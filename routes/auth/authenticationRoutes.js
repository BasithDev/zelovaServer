const express = require('express');
const router = express.Router();
const passport = require('../../config/authenticationConfig');
const authController = require('../../controllers/auth/authenticationController');
const { 
    loginLimiter, 
    otpLimiter, 
    passwordResetLimiter,
    registerLimiter 
} = require('../../middlewares/rateLimitingMiddleware');
const {
    validateRegistration,
    validateLogin,
    validateOTP,
    validatePasswordReset,
    validateEmail,
    sanitizeInput
} = require('../../middlewares/inputValidation');

// Apply input sanitization to all routes
router.use(sanitizeInput);

// Registration with validation and rate limiting
router.post('/register', registerLimiter, validateRegistration, authController.registerUser);

// OTP endpoints with validation and rate limiting
router.post('/verify-otp', validateOTP, authController.verifyOTP);
router.post('/resend-otp', otpLimiter, validateEmail, authController.resendOTP);

// Password reset with validation and rate limiting
router.post('/otp-reset-password', passwordResetLimiter, validateEmail, authController.sendOTPForResetPassword);
router.post('/verify-otp-reset-password', validateOTP, authController.verifyOTPForResetPassword);
router.post('/reset-password', validatePasswordReset, authController.resetPassword);

// Login/Logout with validation and rate limiting
router.post('/login', loginLimiter, validateLogin, authController.login);
router.post('/logout', authController.logout);

// Token refresh endpoint - no rate limiting as it's called automatically
router.post('/refresh', authController.refreshToken);

// Google OAuth
router.get('/google', authController.initiateGoogleLogin(passport));
router.get(
    '/google/callback',
    authController.handleGoogleCallback(passport),
    authController.generateTokenAndRedirect
);

module.exports = router;