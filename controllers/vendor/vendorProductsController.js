const FoodItem = require('../../models/fooditem');
const getRestaurantId = require('../../helpers/restaurantIdHelper');
const statusCodes = require('../../config/statusCodes');
const { MESSAGES } = require('../../config/constants');

const addProduct = async (req, res, next) => {
    try {
        const token = req.cookies.user_token
        const {
            itemName,
            price,
            description,
            category,
            image,
            offer,
            isCustomizable,
        } = req.body;

        // Handle customizations - supports both new array format and legacy string format
        const customFieldsChanged = (req.body.customFields || []).map(field => {
            // New format: options is already an array of {name, price}
            if (Array.isArray(field.options)) {
                return {
                    fieldName: field.fieldName,
                    type: field.type || 'addon',
                    required: field.required || false,
                    multiSelect: field.multiSelect !== false,
                    options: field.options.filter(opt => opt.name && opt.price !== undefined).map(opt => ({
                        name: opt.name.trim(),
                        price: Number(opt.price)
                    }))
                };
            }
            // Legacy format: options and price are comma-separated strings
            return {
                fieldName: field.fieldName,
                type: field.type || 'addon',
                required: field.required || false,
                multiSelect: field.multiSelect !== false,
                options: (field.options || '').split(',').map((name, index) => ({
                    name: name.trim(),
                    price: Number((field.price || '0').split(',')[index] || 0)
                }))
            };
        });


        const restaurantId = getRestaurantId(token, process.env.JWT_SECRET);
        if (!restaurantId || !itemName || !price || !category) {
            return res.status(statusCodes.BAD_REQUEST).json({
                success: false,
                message: MESSAGES.PRODUCT.MISSING_FIELDS
            });
        }

        const existingFoodItem = await FoodItem.findOne({
            restaurantId,
            name: itemName,
            foodCategory: category
        });

        if (existingFoodItem) {
            return res.status(statusCodes.BAD_REQUEST).json({
                success: false,
                message: MESSAGES.PRODUCT.ALREADY_EXISTS
            });
        }

        const newFoodItem = new FoodItem({
            restaurantId,
            name: itemName,
            price,
            description,
            foodCategory: category,
            image: image,
            isActive: true,
            offers: offer || null,
            customizable: isCustomizable,
            customizations: customFieldsChanged ? customFieldsChanged : []
        });
        await newFoodItem.save();

        res.status(statusCodes.CREATED).json({
            success: true,
            message: MESSAGES.PRODUCT.ADDED_SUCCESS,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
const getProducts = async (req, res, next) => {
    try {
        const token = req.cookies.user_token;
        const restaurantId = getRestaurantId(token, process.env.JWT_SECRET);
        if (!restaurantId) {
            return res.status(statusCodes.BAD_REQUEST).json({
                success: false,
                message: MESSAGES.GENERIC.INVALID_RESTAURANT_ID,
            });
        }

        const foodItems = await FoodItem.find({ restaurantId })
            .sort({ createdAt: -1 })
            .select('-__v')
            .populate({
                path: 'foodCategory',
                select: 'name description',
            })
            .populate({
                path: 'offers',
                select: 'offerName discountAmount requiredQuantity',
            })
            .populate({
                path: 'customizations.options',
                select: 'name price',
            });

        // Return empty array with 200 if no items (not 404)
        res.status(statusCodes.OK).json({
            success: true,
            message: foodItems.length ? MESSAGES.PRODUCT.RETRIEVED_SUCCESS : MESSAGES.PRODUCT.NONE_FOUND,
            data: foodItems,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
const listOrUnlist = async (req, res, next) => {
    const { id } = req.params;
    const { isActive } = req.body;
    try {
        const updatedFoodItem = await FoodItem.findByIdAndUpdate(
            id,
            { isActive },
            { new: true }
        );

        if (!updatedFoodItem) {
            return res.status(statusCodes.NOT_FOUND).json({ message: MESSAGES.PRODUCT.NOT_FOUND });
        }

        res.status(statusCodes.OK).json({
            message: MESSAGES.PRODUCT.LISTED_SUCCESS(isActive),
            data: updatedFoodItem,
        });
    } catch (error) {
        console.error('Error updating food item:', error);
        next(error);
    }
}

const deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await FoodItem.findByIdAndDelete(id);

        if (!product) {
            return res.status(statusCodes.NOT_FOUND).json({
                success: false,
                message: MESSAGES.PRODUCT.NOT_FOUND,
            });
        }

        return res.status(statusCodes.OK).json({
            success: true,
            message: MESSAGES.PRODUCT.DELETED_SUCCESS,
        });

    } catch (error) {
        console.error("Error deleting product:", error)
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { id, name, price, description, image, customizable, customizations } = req.body;

        const update = {};
        if (name !== undefined) update.name = name;
        if (price !== undefined) update.price = price;
        if (description !== undefined) update.description = description;
        if (image !== undefined) update.image = image;
        if (customizable !== undefined) update.customizable = customizable;
        if (customizations !== undefined) {
            // Ensure proper format for customizations
            update.customizations = customizations.map(c => ({
                fieldName: c.fieldName,
                type: c.type || 'addon',
                required: c.required || false,
                multiSelect: c.multiSelect !== false,
                options: (c.options || []).map(o => ({
                    name: o.name,
                    price: Number(o.price)
                }))
            }));
        }

        const updatedProduct = await FoodItem.findByIdAndUpdate(
            id,
            { $set: update },
            { new: true, runValidators: true }
        )
            .populate({
                path: 'foodCategory',
                select: 'name description',
            })
            .populate({
                path: 'offers',
                select: 'offerName discountAmount requiredQuantity',
            });

        if (!updatedProduct) {
            return res.status(statusCodes.NOT_FOUND).json({ message: MESSAGES.PRODUCT.NOT_FOUND });
        }

        res.status(statusCodes.OK).json({
            message: MESSAGES.PRODUCT.UPDATED_SUCCESS,
            updatedProduct
        });

    } catch (error) {
        console.error("Error updating product:", error);
        next(error);
    }
}
const updateOffer = async (req, res, next) => {
    try {
      const { productId, offerId } = req.body;
  
      if (!productId) {
        return res.status(statusCodes.BAD_REQUEST).json({ message: MESSAGES.OFFER.FOOD_ITEM_ID_REQUIRED });
      }
  
      const foodItem = await FoodItem.findById(productId);
      if (!foodItem) {
        return res.status(statusCodes.NOT_FOUND).json({ message: MESSAGES.OFFER.NOT_FOUND });
      }

      if(offerId){
        foodItem.offers = offerId;
      }else{
        foodItem.offers = null
      }
      await foodItem.save();
  
      return res.status(statusCodes.OK).json({
        message: MESSAGES.OFFER.UPDATED_SUCCESS,
        updatedOffer: offerId,
      });
    } catch (error) {
      console.error('Error updating offer:', error);
      next(error);
    }
  };

  module.exports = {
    addProduct,
    getProducts,
    listOrUnlist,
    deleteProduct,
    updateProduct,
    updateOffer
  }