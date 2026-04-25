const jwt = require('jsonwebtoken');

// Token expiry times
const ACCESS_TOKEN_EXPIRY = '15m';  // 15 minutes
const REFRESH_TOKEN_EXPIRY = '7d';  // 7 days
const REFRESH_TOKEN_COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days in ms

/**
 * Generate access token (short-lived)
 * @param {Object} payload - Token payload { userId, isVendor, isAdmin, restaurantId }
 * @param {boolean} isAdmin - Whether this is an admin token
 * @returns {string} JWT access token
 */
const generateAccessToken = (payload, isAdmin = false) => {
    const secret = isAdmin 
        ? process.env.JWT_ACCESS_ADMIN_SECRET || process.env.JWT_ADMIN_SECRET
        : process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET;
    
    return jwt.sign(payload, secret, { expiresIn: ACCESS_TOKEN_EXPIRY });
};

/**
 * Generate refresh token (long-lived)
 * @param {Object} payload - Token payload (minimal - just userId)
 * @param {boolean} isAdmin - Whether this is an admin token
 * @returns {string} JWT refresh token
 */
const generateRefreshToken = (payload, isAdmin = false) => {
    const secret = isAdmin
        ? process.env.JWT_REFRESH_ADMIN_SECRET || process.env.JWT_ADMIN_SECRET
        : process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET;
    
    // Refresh token contains minimal data
    const refreshPayload = {
        userId: payload.userId,
        isAdmin: payload.isAdmin || isAdmin,
        type: 'refresh'
    };
    
    return jwt.sign(refreshPayload, secret, { expiresIn: REFRESH_TOKEN_EXPIRY });
};

/**
 * Generate both access and refresh tokens
 * @param {Object} user - User object
 * @param {Object} additionalData - Additional data like restaurantId
 * @returns {Object} { accessToken, refreshToken }
 */
const generateTokenPair = (user, additionalData = {}) => {
    const isAdmin = user.isAdmin || false;
    
    const accessPayload = {
        userId: user._id,
        isVendor: user.isVendor || false,
        isAdmin: isAdmin,
        restaurantId: additionalData.restaurantId || null
    };
    
    const refreshPayload = {
        userId: user._id,
        isAdmin: isAdmin
    };
    
    return {
        accessToken: generateAccessToken(accessPayload, isAdmin),
        refreshToken: generateRefreshToken(refreshPayload, isAdmin)
    };
};

/**
 * Get cookie configuration for refresh token
 * @returns {Object} Cookie configuration
 */
const getRefreshTokenCookieConfig = () => ({
    httpOnly: true,    // Prevents XSS - JavaScript cannot access
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: 'strict', // Prevents CSRF
    maxAge: REFRESH_TOKEN_COOKIE_MAX_AGE,
    path: '/'          // Cookie available for all paths
});

/**
 * Set refresh token as HTTP-only cookie
 * @param {Response} res - Express response object
 * @param {string} token - Refresh token
 * @param {boolean} isAdmin - Whether this is an admin refresh token
 */
const setRefreshTokenCookie = (res, token, isAdmin = false) => {
    const cookieName = isAdmin ? 'admin_refresh_token' : 'refresh_token';
    res.cookie(cookieName, token, getRefreshTokenCookieConfig());
};

/**
 * Clear refresh token cookie
 * @param {Response} res - Express response object
 * @param {boolean} isAdmin - Whether to clear admin refresh token
 */
const clearRefreshTokenCookie = (res, isAdmin = false) => {
    const cookieName = isAdmin ? 'admin_refresh_token' : 'refresh_token';
    res.clearCookie(cookieName, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    });
};

/**
 * Verify refresh token
 * @param {string} token - Refresh token to verify
 * @param {boolean} isAdmin - Whether this is an admin refresh token
 * @returns {Object} Decoded token payload
 */
const verifyRefreshToken = (token, isAdmin = false) => {
    const secret = isAdmin
        ? process.env.JWT_REFRESH_ADMIN_SECRET || process.env.JWT_ADMIN_SECRET
        : process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET;
    
    return jwt.verify(token, secret);
};

/**
 * Verify access token
 * @param {string} token - Access token to verify
 * @param {boolean} isAdmin - Whether this is an admin access token
 * @returns {Object} Decoded token payload
 */
const verifyAccessToken = (token, isAdmin = false) => {
    const secret = isAdmin 
        ? process.env.JWT_ACCESS_ADMIN_SECRET || process.env.JWT_ADMIN_SECRET
        : process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET;
    
    return jwt.verify(token, secret);
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    generateTokenPair,
    setRefreshTokenCookie,
    clearRefreshTokenCookie,
    verifyRefreshToken,
    verifyAccessToken,
    getRefreshTokenCookieConfig,
    ACCESS_TOKEN_EXPIRY,
    REFRESH_TOKEN_EXPIRY
};
