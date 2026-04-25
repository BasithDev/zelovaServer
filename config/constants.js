/**
 * Centralized constants for API messages
 * All response messages should be defined here and imported in controllers
 */

const MESSAGES = {
  // Auth Messages
  AUTH: {
    USER_NOT_FOUND: 'User not found',
    ACCOUNT_BLOCKED: 'Your account is blocked. Please contact support.',
    INVALID_CREDENTIALS: 'Invalid credentials',
    LOGOUT_SUCCESS: 'Logout successful',
    UNAUTHORIZED: 'Not authorized',
    NO_REFRESH_TOKEN: 'No refresh token provided',
    INVALID_REFRESH_TOKEN: 'Invalid or expired refresh token',
  },

  // Password Messages
  PASSWORD: {
    REQUIREMENTS_NOT_MET: 'Password does not meet requirements',
    RESET_SUCCESS: 'Password reset successfully',
    VALIDATION: {
      MIN_LENGTH: 'Password must be at least 8 characters long',
      UPPERCASE: 'Password must contain at least one uppercase letter',
      LOWERCASE: 'Password must contain at least one lowercase letter',
      NUMBER: 'Password must contain at least one number',
      SPECIAL_CHAR: 'Password must contain at least one special character',
    },
  },

  // OTP Messages
  OTP: {
    NOT_FOUND: 'OTP not found or expired. Please request a new one.',
    MAX_ATTEMPTS_EXCEEDED: 'Maximum verification attempts exceeded. Please request a new OTP.',
    INVALID: (remaining) => `Invalid OTP. ${remaining} attempts remaining.`,
    VERIFIED_SUCCESS: 'OTP verified successfully',
    RESENT_SUCCESS: 'OTP resent successfully',
    NEW_GENERATED: 'New OTP generated and sent successfully',
    SENT_SUCCESS: 'OTP sent successfully',
    COOLDOWN: (waitTime) => `Please wait ${waitTime} seconds before requesting another OTP.`,
  },

  // User Messages
  USER: {
    ALREADY_EXISTS: 'User already exists',
    REGISTERED_SUCCESS: 'User registered successfully. Please verify your email.',
    NOT_FOUND: 'User not found',
    ID_REQUIRED: 'User ID is required',
  },

  // Category Messages
  CATEGORY: {
    ALREADY_EXISTS: 'Category already exists.',
    NOT_FOUND: 'Category not found.',
    ADDED_SUCCESS: 'Category added successfully.',
    RETRIEVED_SUCCESS: 'Categories retrieved successfully.',
    NONE_FOUND: 'No categories yet.',
    DELETE_SUCCESS: 'Category deleted successfully',
    CANNOT_DELETE_WITH_SUBCATEGORIES: (count) => `Cannot delete category with ${count} subcategories. Delete subcategories first.`,
  },

  // SubCategory Messages
  SUBCATEGORY: {
    ALREADY_EXISTS: 'Subcategory already exists.',
    NOT_FOUND: 'Subcategory not found',
    ADDED_SUCCESS: 'Subcategory added successfully.',
    DELETE_SUCCESS: 'Subcategory deleted successfully',
  },

  // Product/Food Item Messages
  PRODUCT: {
    MISSING_FIELDS: 'Missing required fields: restaurantId, name, price, or foodCategory.',
    ALREADY_EXISTS: 'This food item already exists in your menu for the selected category.',
    ADDED_SUCCESS: 'Food item added successfully.',
    RETRIEVED_SUCCESS: 'Food items retrieved successfully.',
    NONE_FOUND: 'No food items yet.',
    NOT_FOUND: 'Product not found',
    UPDATED_SUCCESS: 'Product updated successfully',
    DELETED_SUCCESS: 'Product deleted successfully',
    LISTED_SUCCESS: (isActive) => `Food item has been ${isActive ? 'listed' : 'unlisted'} successfully.`,
  },

  // Offer Messages
  OFFER: {
    UPDATED_SUCCESS: 'Offer updated successfully.',
    FOOD_ITEM_ID_REQUIRED: 'FoodItem ID is required.',
    NOT_FOUND: 'FoodItem not found.',
  },

  // Cart Messages
  CART: {
    EMPTY_DELETED: 'Cart is empty and deleted.',
    UPDATED_SUCCESS: 'Cart updated successfully',
    MULTIPLE_RESTAURANTS: 'Cannot add items from multiple restaurants to the cart',
  },

  CART_ACTION: {
    ADD: 'add',
    REMOVE: 'remove',
  },

  // Order Messages
  ORDER: {
    PLACED_SUCCESS: 'Order placed successfully',
    RETRIEVED_SUCCESS: 'Orders retrieved successfully',
    NOT_FOUND: 'Order not found',
    STATUS_UPDATED: 'Order status updated successfully',
    RATED_SUCCESS: 'Restaurant rating updated successfully',
    INVALID_COUPON: 'Invalid coupon code',
    COUPON_NOT_WITH_ZCOINS: 'Coupons cannot be used with Zcoin payments',
    INSUFFICIENT_ZCOINS: 'Insufficient Zcoins balance',
  },

  // Payment Messages
  PAYMENT: {
    CREATED_SUCCESS: 'Payment order created successfully',
    VERIFIED_SUCCESS: 'Payment verified successfully',
    INVALID_SIGNATURE: 'Invalid payment signature',
    MISSING_DETAILS: 'Missing required payment details',
  },

  // Issue Messages
  ISSUE: {
    NOT_FOUND: 'Issue not found',
    RESOLVED_SUCCESS: 'Issue resolved successfully',
    IGNORED_SUCCESS: 'Issue ignored successfully',
    GENERIC_ERROR: 'Something went wrong',
    REFUND_SUCCESS: 'User refunded successfully',
    ORDER_DETAILS_FETCH_FAILED: 'Failed to fetch order details',
  },

  // Generic Messages
  GENERIC: {
    SUCCESS: 'Success',
    FAILED: 'Failed',
    UNAUTHORIZED: 'Unauthorized',
    INTERNAL_ERROR: 'Internal server error',
    MISSING_PARAMS: 'Missing required parameters.',
    INVALID_RESTAURANT_ID: 'Invalid or missing restaurant ID.',
    RESTAURANT_ID_REQUIRED: 'Restaurant ID is required',
    RESTAURANT_NOT_FOUND: 'Restaurant not found',
    DISTANCE_CALC_FAILED: 'Distance calculation failed',
    NO_ACCOUNT_WITH_EMAIL: 'No account exists with this email',
  },

  // ZCoin Messages
  ZCOIN: {
    NOT_FOUND: 'User zcoins not found',
  },
};

module.exports = { MESSAGES };
