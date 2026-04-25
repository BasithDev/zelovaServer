const jwt = require('jsonwebtoken');
const { verifyAccessToken } = require('../utils/tokenUtils');

/**
 * Global API protection middleware
 * Checks for XMLHttpRequest header to prevent direct browser access
 * Note: Request signing (when enabled) provides stronger protection
 */
const protectApi = (req, res, next) => {
    // Skip checks for static files and certain paths
    if (req.path.startsWith('/assets/') || 
        req.path === '/favicon.ico' || 
        req.path === '/' ||
        req.path === '/health') {
        return next();
    }

    // Check if this is a Google auth related endpoint
    const isGoogleAuthEndpoint = req.path.includes('/auth/google') || req.path.includes('/oauth');
    if (isGoogleAuthEndpoint) {
        return next();
    }

    // Skip checks for public endpoints
    const publicEndpoints = [
        '/auth/login',
        '/auth/register',
        '/auth/verify-otp',
        '/auth/resend-otp',
        '/auth/refresh',  // Refresh token endpoint is public (uses HTTP-only cookie)
        '/user/status'
    ];

    if (publicEndpoints.some(endpoint => req.path.includes(endpoint))) {
        return next();
    }

    // In development, be more lenient with header checks
    if (process.env.NODE_ENV === 'development') {
        return next();
    }

    // Check XMLHttpRequest header (basic protection against direct browser access)
    const xRequestedWith = req.get('X-Requested-With');
    if (!xRequestedWith || xRequestedWith !== 'XMLHttpRequest') {
        return res.status(403).json({
            success: false,
            message: 'Direct API access not allowed'
        });
    }

    // Note: X-App-Token check removed
    // Use ENABLE_REQUEST_SIGNING=true for stronger protection

    next();
};

/**
 * Role-based authentication middleware
 * Verifies JWT access token from Authorization header (Bearer token)
 * Also sets req.cookies for backward compatibility with existing controllers
 * 
 * @param {string} role - 'admin' or 'user'
 */
const verifyToken = (role) => (req, res, next) => {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: 'Authentication required'
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Authentication required'
        });
    }

    try {
        // Verify access token using the appropriate secret
        const isAdmin = role === 'admin';
        const decoded = verifyAccessToken(token, isAdmin);
        
        // Validate role if specified
        if (role === 'admin' && !decoded.isAdmin) {
            return res.status(403).json({
                success: false,
                message: 'Admin access required'
            });
        }
        
        // Set req.user with decoded token data (new pattern)
        req.user = decoded;
        
        // BACKWARD COMPATIBILITY: Set cookies so existing controllers work
        // Controllers use req.cookies.user_token - we set it from the Bearer token
        if (!req.cookies) {
            req.cookies = {};
        }
        if (isAdmin) {
            req.cookies.admin_token = token;
        } else {
            req.cookies.user_token = token;
        }
        
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token expired',
                code: 'TOKEN_EXPIRED'
            });
        }
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
};

module.exports = { verifyToken, protectApi };