const decodeToken = require('../utils/jwtDecoder');

/**
 * Get user ID from token
 * @param {string} token - JWT token
 * @param {string} secret - JWT secret
 * @returns {string|null} User ID or null
 */
const getUserId = (token, secret) => {
    const decoded = decodeToken(token, secret);
    return decoded && decoded.userId ? decoded.userId : null;
};

module.exports = getUserId;