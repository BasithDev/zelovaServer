/**
 * Centralized enums for the application
 * All status values and action types should be defined here
 */

/**
 * User account status
 */
const UserStatus = Object.freeze({
  ACTIVE: 'active',
  BLOCKED: 'blocked',
  PENDING: 'pending',
});

/**
 * API response status
 */
const ResponseStatus = Object.freeze({
  SUCCESS: 'Success',
  FAILED: 'Failed',
});

/**
 * Order status values
 */
const OrderStatus = Object.freeze({
  PENDING: 'PENDING',
  ACCEPTED: 'ORDER ACCEPTED',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED',
  DELIVERED: 'DELIVERED',
});

/**
 * Cart actions
 */
const CartAction = Object.freeze({
  ADD: 'add',
  REMOVE: 'remove',
});

/**
 * OTP purposes
 */
const OtpPurpose = Object.freeze({
  REGISTRATION: 'registration',
  PASSWORD_RESET: 'password_reset',
});

/**
 * Payment methods
 */
const PaymentMethod = Object.freeze({
  ZCOINS: 'ZCOINS',
  RAZORPAY: 'RAZORPAY',
  CASH_ON_DELIVERY: 'COD',
});

/**
 * User roles
 */
const UserRole = Object.freeze({
  USER: 'user',
  VENDOR: 'vendor',
  ADMIN: 'admin',
});

module.exports = {
  UserStatus,
  ResponseStatus,
  OrderStatus,
  CartAction,
  OtpPurpose,
  PaymentMethod,
  UserRole,
};
