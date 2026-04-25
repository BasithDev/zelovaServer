const crypto = require('crypto');

/**
 * Request Signing Middleware
 * 
 * This provides stronger API protection than a static APP_SECRET by:
 * 1. Each request has a unique signature
 * 2. Signatures expire after 5 minutes (replay attack protection)
 * 3. Signature includes timestamp + method + URL + body hash
 * 
 * Headers required from client:
 * - X-Timestamp: Unix timestamp in milliseconds
 * - X-Signature: HMAC-SHA256 signature
 */

const SIGNATURE_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Generate signature for a request (used for testing)
 */
const generateSignature = (timestamp, method, path, body) => {
    const secret = process.env.APP_SECRET;
    const bodyHash = body ? crypto.createHash('sha256').update(JSON.stringify(body)).digest('hex') : '';
    const message = `${timestamp}:${method}:${path}:${bodyHash}`;
    return crypto.createHmac('sha256', secret).update(message).digest('hex');
};

/**
 * Verify request signature middleware
 */
const verifyRequestSignature = (req, res, next) => {
    // Check if request signing is enabled via env variable
    // Set ENABLE_REQUEST_SIGNING=true in .env to enable
    if (process.env.ENABLE_REQUEST_SIGNING !== 'true') {
        return next();
    }

    // Skip for public endpoints
    const publicPaths = [
        '/api/auth/login',
        '/api/auth/register',
        '/api/auth/google',
        '/api/auth/verify-otp',
        '/api/auth/resend-otp',
        '/health'
    ];

    if (publicPaths.some(path => req.path.includes(path) || req.originalUrl.includes(path))) {
        return next();
    }

    const timestamp = req.get('X-Timestamp');
    const signature = req.get('X-Signature');

    // Check if headers are present
    if (!timestamp || !signature) {
        return res.status(401).json({
            success: false,
            message: 'Missing authentication headers'
        });
    }

    // Check timestamp validity (prevent replay attacks)
    const now = Date.now();
    const requestTime = parseInt(timestamp, 10);

    if (isNaN(requestTime) || Math.abs(now - requestTime) > SIGNATURE_EXPIRY_MS) {
        return res.status(401).json({
            success: false,
            message: 'Request expired or invalid timestamp'
        });
    }

    // Generate expected signature
    const expectedSignature = generateSignature(
        timestamp,
        req.method,
        req.originalUrl.split('?')[0], // Path without query string
        req.body && Object.keys(req.body).length > 0 ? req.body : null
    );

    // Constant-time comparison to prevent timing attacks
    const isValid = crypto.timingSafeEqual(
        Buffer.from(signature, 'hex'),
        Buffer.from(expectedSignature, 'hex')
    );

    if (!isValid) {
        return res.status(401).json({
            success: false,
            message: 'Invalid request signature'
        });
    }

    next();
};

/**
 * Legacy APP_SECRET check (fallback/additional layer)
 * Can be used alongside or instead of request signing
 */
const verifyAppToken = (req, res, next) => {
    // Skip in development
    if (process.env.NODE_ENV === 'development') {
        return next();
    }

    const appToken = req.get('X-App-Token');
    
    if (!appToken || appToken !== process.env.APP_SECRET) {
        return res.status(403).json({
            success: false,
            message: 'Invalid application token'
        });
    }

    next();
};

module.exports = { 
    verifyRequestSignature, 
    verifyAppToken,
    generateSignature 
};
