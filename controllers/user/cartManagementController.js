const Cart = require('../../models/cart');
const getUserId = require('../../helpers/userIdHelper');
const Restaurant = require('../../models/restaurant');
const mongoose = require('mongoose');
const statusCodes = require('../../config/statusCodes');
const { MESSAGES } = require('../../config/constants');
const { CartAction } = require('../../config/enums');

const getCart = async (req, res, next) => {
    try {
        const token = req.cookies.user_token;
        const userId = getUserId(token, process.env.JWT_SECRET);
        const cart = await Cart.findOne({ userId })
            .populate({
                path: 'items.item',
                populate: {
                    path: 'offers',
                    select: 'offerName requiredQuantity discountAmount'
                }
            })
            .populate('restaurantId', 'name image address');

        res.json({ cart: cart || null });
    } catch (error) {
        console.error('Error getting cart:', error);
        next(error);
    }
}

const getTotalItemsFromCart = async (req, res, next) => {
    try {
        const token = req.cookies.user_token;
        const userId = getUserId(token, process.env.JWT_SECRET);
        const cart = await Cart.findOne({ userId });
        res.json({ totalItems: cart ? cart.totalItems : 0 });
    } catch (error) {
        console.error('Error getting cart total items:', error);
        next(error);
    }
}

const getTotalPriceFromCart = async (req, res, next) => {
    try {
        const token = req.cookies.user_token;
        const userId = getUserId(token, process.env.JWT_SECRET);
        const cart = await Cart.findOne({ userId });
        res.json({ totalPrice: cart ? cart.totalPrice : 0 });
    } catch (error) {
        console.error('Error getting cart total price:', error);
        next(error);
    }
}

const updateCart = async (req, res, next) => {
    try {
        const token = req.cookies.user_token;
        const userId = getUserId(token, process.env.JWT_SECRET);
        if (!userId) {
            return res.status(statusCodes.UNAUTHORIZED).json({ message: MESSAGES.GENERIC.UNAUTHORIZED });
        }

        const { itemId, action, selectedCustomizations } = req.body;
        if (!itemId || !action) {
            return res.status(statusCodes.BAD_REQUEST).json({ message: MESSAGES.GENERIC.MISSING_PARAMS });
        }

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = await Cart.create({
                userId,
                items: [{
                    item: itemId,
                    quantity: action === CartAction.ADD ? 1 : 0,
                    selectedCustomizations: selectedCustomizations || [],
                }],
            });
        } else {
            const itemIndex = cart.items.findIndex(item => item.item.toString() === itemId);

            if (itemIndex === -1) {
                cart.items.push({
                    item: itemId,
                    quantity: action === CartAction.ADD ? 1 : 0,
                    selectedCustomizations: selectedCustomizations || [],
                });
            } else {
                if (action === CartAction.ADD) {
                    cart.items[itemIndex].quantity += 1;
                } else if (action === CartAction.REMOVE) {
                    cart.items[itemIndex].quantity -= 1;
                    if (cart.items[itemIndex].quantity <= 0) {
                        cart.items.splice(itemIndex, 1);
                    }
                }
            }

            if (cart.items.length === 0) {
                await Cart.findByIdAndDelete(cart._id);
                return res.json({ message: MESSAGES.CART.EMPTY_DELETED });
            }
        }

        try {
            await cart.save();
            res.json({ message: MESSAGES.CART.UPDATED_SUCCESS, cart });
        } catch (saveError) {
            if (saveError.name === 'ValidatorError' && saveError.message.includes('Multiple restaurants')) {
                return res.status(400).json({ message: MESSAGES.CART.MULTIPLE_RESTAURANTS });
            } else if (saveError.status === 400) {
                return res.status(400).json({ message: saveError.message });
            }
            console.error('Error saving cart:', saveError);
            next(saveError);
        }
    } catch (error) {
        console.error('Error updating cart:', error);
        next(error);
    }
}

const generateDeliveryFee = async (req, res, next) => {
    try {
        const token = req.cookies.user_token;
        if (!token) {
            return res.status(statusCodes.UNAUTHORIZED).json({ message: MESSAGES.GENERIC.UNAUTHORIZED });
        }
        const userId = getUserId(token, process.env.JWT_SECRET);
        if (!userId) {
            return res.status(statusCodes.BAD_REQUEST).json({ message: MESSAGES.USER.ID_REQUIRED });
        }
        let { lat, lon, restaurantId } = req.query;
        if (!lat || !lon || !restaurantId) {
            return res.status(statusCodes.BAD_REQUEST).json({ message: MESSAGES.GENERIC.MISSING_PARAMS });
        }

        lat = parseFloat(lat);
        lon = parseFloat(lon);


        try {
            const distanceResult = await Restaurant.aggregate([
                {
                    $geoNear: {
                        near: { type: "Point", coordinates: [lat, lon] },
                        distanceField: "distance",
                        spherical: true,
                        maxDistance: 50000
                    }
                },
                {
                    $match: { _id: new mongoose.Types.ObjectId(restaurantId) }
                }
            ]);

            if (!distanceResult.length) {
                return res.status(statusCodes.NOT_FOUND).json({ message: MESSAGES.GENERIC.DISTANCE_CALC_FAILED });
            }

            const deliveryFee = (distanceResult[0].distance / 1000) * 8;

            res.json({ deliveryFee });
        } catch (error) {
            console.error('Error during distance calculation:', error);
            return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ message: MESSAGES.GENERIC.INTERNAL_ERROR });
        }
    } catch (error) {
        console.error('Error getting delivery fee:', error);
        next(error);
    }
}

module.exports = {
    getCart,
    getTotalItemsFromCart,
    getTotalPriceFromCart,
    updateCart,
    generateDeliveryFee
}