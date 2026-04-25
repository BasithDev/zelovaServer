const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  items: [{
    item: {
      type: Schema.Types.ObjectId,
      ref: 'FoodItem',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
    itemPrice: {
      type: Number,
    },
    selectedCustomizations: [{
      fieldName: String,
      options: {
        name: String,
        price: Number
      }
    }],
  }],
  totalItems: { 
    type: Number,
    default: 0,
  },
  totalPrice: { 
    type: Number,
    default: 0,
  }
}, {
  timestamps: true
});

// Pre-validate middleware to handle restaurantId
cartSchema.pre('validate', async function (next) {
  try {
      if (this.items && this.items.length > 0) {
          const FoodItem = mongoose.model('FoodItem');

          // Ensure the first item exists and has a restaurantId
          const firstItem = await FoodItem.findById(this.items[0].item);
          if (!firstItem || !firstItem.restaurantId) {
              throw new Error('Food item or its restaurantId is missing.');
          }

          // Assign the restaurantId if it's not already set
          if (!this.restaurantId) {
              this.restaurantId = firstItem.restaurantId;
          } else {
              // Validate all items belong to the same restaurant
              for (const cartItem of this.items) {
                  const foodItem = await FoodItem.findById(cartItem.item);
                  if (!foodItem) {
                      throw new Error('Food item not found.');
                  }
                  if (foodItem.restaurantId.toString() !== this.restaurantId.toString()) {
                      const error = new Error('Cannot add items from multiple restaurants. Clear cart first.');
                      error.status = 400;
                      return next(error);
                  }
              }
          }
      }
      next();
  } catch (error) {
      next(error);
  }
});

// Pre-save middleware to calculate prices and totals
cartSchema.pre('save', async function(next) {
  try {
    if (this.items && this.items.length > 0) {
      const FoodItem = mongoose.model('FoodItem');

      for (const item of this.items) {
        const foodItem = await FoodItem.findById(item.item);
        if (!foodItem) {
          throw new Error('Food item not found');
        }

        // Start with base price
        let basePrice = foodItem.price;
        let addOnPrice = 0;

        if (item.selectedCustomizations && item.selectedCustomizations.length > 0) {
          // For each selected customization, check if it's a variant or add-on
          for (const selectedCust of item.selectedCustomizations) {
            // Find the customization definition in the food item
            const custDefinition = foodItem.customizations?.find(
              c => c.fieldName === selectedCust.fieldName
            );
            
            if (custDefinition) {
              if (custDefinition.type === 'version') {
                // Variant: REPLACES the base price
                basePrice = selectedCust.options.price || 0;
              } else {
                // Add-on: ADDS to the price
                addOnPrice += selectedCust.options.price || 0;
              }
            } else {
              // Fallback: treat as add-on if definition not found
              addOnPrice += selectedCust.options.price || 0;
            }
          }
        }

        // Final item price = base price (or variant price) + add-ons
        item.itemPrice = basePrice + addOnPrice;
      }
    }

    this.totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
    this.totalPrice = this.items.reduce((total, item) => 
      total + (item.itemPrice * item.quantity), 0);

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Cart", cartSchema);