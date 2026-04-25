const mongoose = require('mongoose');
const { Schema } = mongoose;

const customizationSchema = new Schema({
  fieldName: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['addon', 'version'], // addon = optional extras, version = required choice (half/full, size)
    default: 'addon',
  },
  required: {
    type: Boolean,
    default: false, // true for version type typically
  },
  multiSelect: {
    type: Boolean,
    default: true, // false for version type (single choice)
  },
  options: [
    {
      name: { type: String, required: true, trim: true },
      price: { type: Number, required: true, min: 0 },
    },
  ],
});

const foodItemsSchema = new Schema({
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    trim: true,
  },
  foodCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },
  image: {
      type: String,
    },
  isActive: {
    type: Boolean,
    default: true,
  },
  offers: {
    type: Schema.Types.ObjectId,
    ref: 'Offer',
  },
  customizable: {
    type: Boolean,
    default: false,
  },
  customizations: [customizationSchema],
}, {
  timestamps: true,
});

module.exports = mongoose.models.FoodItem || mongoose.model("FoodItem", foodItemsSchema);