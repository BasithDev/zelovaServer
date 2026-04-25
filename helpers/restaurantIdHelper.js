const decodeToken = require('../utils/jwtDecoder');

/**
 * Get restaurant ID from token
 * @param {string} token - JWT token
 * @param {string} secret - JWT secret
 * @returns {string|null} Restaurant ID or null
 */
const getRestaurantId = (token, secret) => {
    const decoded = decodeToken(token, secret);
    return decoded && decoded.restaurantId ? decoded.restaurantId : null;
};

module.exports = getRestaurantId;
