const rateLimit = require('express-rate-limit');

// Login rate limiter - prevents brute force attacks
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // 50 attempts per window (increased for dev)
    message: {
        success: false,
        message: "Too many login attempts. Please try again after 15 minutes."
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: false
});

// OTP rate limiter - prevents OTP spam
const otpLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 3, // 3 OTP requests per minute
    message: {
        success: false,
        message: "Too many OTP requests. Please wait before requesting again."
    }
});

// Password reset rate limiter
const passwordResetLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // 3 password reset attempts per hour
    message: {
        success: false,
        message: "Too many password reset attempts. Please try again after an hour."
    }
});

// General API rate limiter
const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100, // 100 requests per minute
    message: {
        success: false,
        message: "Too many requests. Please slow down."
    }
});

// Registration rate limiter - prevents account creation spam
const registerLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // 5 registrations per hour per IP
    message: {
        success: false,
        message: "Too many registration attempts. Please try again later."
    }
});

module.exports = { 
    loginLimiter, 
    otpLimiter, 
    passwordResetLimiter, 
    apiLimiter,
    registerLimiter 
};