const jwt = require('jsonwebtoken');

/**
 * Decode and verify a JWT token
 * @param {string} token - JWT token
 * @param {string} secret - Secret key  
 * @returns {Object|null} Decoded payload or null
 */
const decodeToken = (token, secret) => {
    if (token) {
        try {
            return jwt.verify(token, secret);
        } catch (error) {
            console.error("Token decoding error:", error.message);
            return null;
        } 
    } else {
        return null;
    }
};

module.exports = decodeToken;