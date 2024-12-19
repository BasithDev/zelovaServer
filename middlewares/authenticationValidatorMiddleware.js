const jwt = require('jsonwebtoken');

// Global API protection middleware
const protectApi = (req, res, next) => {
    // Skip checks for static files and certain paths
    if (req.path.startsWith('/assets/') || 
        req.path === '/favicon.ico' || 
        req.path === '/') {
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
        '/user/status'
    ];

    if (publicEndpoints.some(endpoint => req.path.includes(endpoint))) {
        return next();
    }

    // For other API endpoints, check headers
    const xRequestedWith = req.get('X-Requested-With');
    const appToken = req.get('X-App-Token');
    
    // In development, be more lenient with header checks
    if (process.env.NODE_ENV === 'development') {
        return next();
    }

    if (!xRequestedWith || xRequestedWith !== 'XMLHttpRequest') {
        return res.status(403).json({
            success: false,
            message: 'Direct API access not allowed'
        });
    }

    if (!appToken || appToken !== process.env.APP_SECRET) {
        return res.status(403).json({
            success: false,
            message: 'Invalid application token'
        });
    }

    next();
};

// Role-based authentication middleware
const verifyToken = (role) => (req, res, next) => {
    const tokenName = role === 'admin' ? 'admin_token' : 'user_token';
    const secret = role === 'admin' ? process.env.JWT_ADMIN_SECRET : process.env.JWT_SECRET;
    const token = req.cookies[tokenName];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Authentication required'
        });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
};

module.exports = { verifyToken, protectApi };