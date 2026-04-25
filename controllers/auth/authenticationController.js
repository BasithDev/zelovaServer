const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const Restaurant = require('../../models/restaurant');
const Otp = require('../../models/otp');
const { sendOTPEmail } = require('../../config/emailServiceConfig');
const statusCodes = require('../../config/statusCodes');
const { MESSAGES } = require('../../config/constants');
const { ResponseStatus, UserStatus, OtpPurpose } = require('../../config/enums');
const {
    generateTokenPair,
    setRefreshTokenCookie,
    clearRefreshTokenCookie,
    verifyRefreshToken,
    generateAccessToken
} = require('../../utils/tokenUtils');

const OTP_COOLDOWN_PERIOD_MS = 30000;
const OTP_MAX_ATTEMPTS = 5;

// Cookie configuration
const getCookieConfig = () => ({
    maxAge: 10800000, // 3 hours
    httpOnly: true,   // Prevents XSS - JavaScript cannot access
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: 'strict' // Prevents CSRF
});

// Password validation
const validatePassword = (password) => {
    const errors = [];
    
    if (password.length < 8) {
        errors.push(MESSAGES.PASSWORD.VALIDATION.MIN_LENGTH);
    }
    if (!/[A-Z]/.test(password)) {
        errors.push(MESSAGES.PASSWORD.VALIDATION.UPPERCASE);
    }
    if (!/[a-z]/.test(password)) {
        errors.push(MESSAGES.PASSWORD.VALIDATION.LOWERCASE);
    }
    if (!/[0-9]/.test(password)) {
        errors.push(MESSAGES.PASSWORD.VALIDATION.NUMBER);
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push(MESSAGES.PASSWORD.VALIDATION.SPECIAL_CHAR);
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
};

// Generate OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const login = async (req, res, next) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(statusCodes.UNAUTHORIZED).json({ message: MESSAGES.AUTH.USER_NOT_FOUND });
        }

        if (user.status === UserStatus.BLOCKED) {
            return res.status(statusCodes.FORBIDDEN).json({ 
                status: ResponseStatus.FAILED,
                message: MESSAGES.AUTH.ACCOUNT_BLOCKED 
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(statusCodes.UNAUTHORIZED).json({ message: MESSAGES.AUTH.INVALID_CREDENTIALS });
        }

        const restaurant = await Restaurant.findOne({ vendorId: user._id });

        // Generate access + refresh token pair
        const { accessToken, refreshToken } = generateTokenPair(user, {
            restaurantId: restaurant ? restaurant._id : null
        });

        // Set refresh token as HTTP-only cookie (not accessible via JavaScript)
        setRefreshTokenCookie(res, refreshToken, user.isAdmin);

        // Return access token in response body (stored in memory on frontend)
        return res.status(statusCodes.OK).json({ 
            status: ResponseStatus.SUCCESS,
            userId: user._id,
            accessToken: accessToken,
            isVendor: user.isVendor,
            isAdmin: user.isAdmin,
            restaurantId: restaurant ? restaurant._id : null,
            userStatus: user.status
        });
    } catch (error) {
        next(error);
    }
};

const logout = (req, res, next) => {
    try {
        // Clear refresh token cookies (HTTP-only)
        clearRefreshTokenCookie(res, false); // User refresh token
        clearRefreshTokenCookie(res, true);  // Admin refresh token

        return res.status(statusCodes.OK).json({
            status: ResponseStatus.SUCCESS,
            message: MESSAGES.AUTH.LOGOUT_SUCCESS
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Refresh access token using refresh token from HTTP-only cookie
 */
const refreshToken = async (req, res, next) => {
    try {
        // Get refresh token from cookie
        const userRefreshToken = req.cookies.refresh_token;
        const adminRefreshToken = req.cookies.admin_refresh_token;
        
        const token = adminRefreshToken || userRefreshToken;
        const isAdmin = !!adminRefreshToken;

        if (!token) {
            return res.status(statusCodes.UNAUTHORIZED).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.AUTH.NO_REFRESH_TOKEN
            });
        }

        // Verify the refresh token
        let decoded;
        try {
            decoded = verifyRefreshToken(token, isAdmin);
        } catch (error) {
            // Clear invalid cookie
            clearRefreshTokenCookie(res, isAdmin);
            return res.status(statusCodes.UNAUTHORIZED).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.AUTH.INVALID_REFRESH_TOKEN
            });
        }

        // Check if user still exists and is not blocked
        const user = await User.findById(decoded.userId);
        if (!user) {
            clearRefreshTokenCookie(res, isAdmin);
            return res.status(statusCodes.UNAUTHORIZED).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.USER.NOT_FOUND
            });
        }

        if (user.status === UserStatus.BLOCKED) {
            clearRefreshTokenCookie(res, isAdmin);
            return res.status(statusCodes.FORBIDDEN).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.AUTH.ACCOUNT_BLOCKED
            });
        }

        // Get restaurant info for vendor users
        const restaurant = await Restaurant.findOne({ vendorId: user._id });

        // Generate new token pair (token rotation for security)
        const { accessToken, refreshToken: newRefreshToken } = generateTokenPair(user, {
            restaurantId: restaurant ? restaurant._id : null
        });

        // Set new refresh token cookie (rotation)
        setRefreshTokenCookie(res, newRefreshToken, user.isAdmin);

        // Return new access token
        return res.status(statusCodes.OK).json({
            status: ResponseStatus.SUCCESS,
            userId: user._id,
            accessToken: accessToken,
            isVendor: user.isVendor,
            isAdmin: user.isAdmin,
            restaurantId: restaurant ? restaurant._id : null,
            userStatus: user.status
        });
    } catch (error) {
        next(error);
    }
};

const registerUser = async (req, res, next) => {
    try {
        const { fullname, email, password, age, phoneNumber } = req.body;

        // Validate password strength
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            return res.status(statusCodes.BAD_REQUEST).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.PASSWORD.REQUIREMENTS_NOT_MET,
                errors: passwordValidation.errors
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(statusCodes.BAD_REQUEST).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.USER.ALREADY_EXISTS
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12); // Increased from 10 to 12 rounds
        const user = new User({
            fullname,
            email,
            password: hashedPassword,
            age,
            phoneNumber
        });
        await user.save();

        // Delete any existing OTPs for this email
        await Otp.deleteMany({ email });

        const otpCode = generateOTP();
        await Otp.create({ 
            email, 
            otp: otpCode, 
            purpose: OtpPurpose.REGISTRATION,
            lastRequested: Date.now() 
        });
        await sendOTPEmail(email, otpCode);

        return res.status(statusCodes.CREATED).json({
            status: ResponseStatus.SUCCESS,
            message: MESSAGES.USER.REGISTERED_SUCCESS,
        });
    } catch (error) {
        next(error);
    }
};

const verifyOTP = async (req, res, next) => {
    try {
        const { email, otp } = req.body;
        
        const otpRecord = await Otp.findOne({ email });

        if (!otpRecord) {
            return res.status(statusCodes.BAD_REQUEST).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.OTP.NOT_FOUND,
            });
        }

        // Check if max attempts exceeded
        if (otpRecord.attempts >= OTP_MAX_ATTEMPTS) {
            await Otp.deleteMany({ email });
            return res.status(statusCodes.TOO_MANY_REQUESTS).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.OTP.MAX_ATTEMPTS_EXCEEDED,
            });
        }

        // Check if OTP matches
        if (otpRecord.otp !== otp) {
            // Increment attempt counter
            await Otp.updateOne({ email }, { $inc: { attempts: 1 } });
            const remainingAttempts = OTP_MAX_ATTEMPTS - otpRecord.attempts - 1;
            
            return res.status(statusCodes.BAD_REQUEST).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.OTP.INVALID(remainingAttempts),
            });
        }

        // OTP is valid - delete it
        await Otp.deleteMany({ email });

        return res.status(statusCodes.OK).json({
            status: ResponseStatus.SUCCESS,
            message: MESSAGES.OTP.VERIFIED_SUCCESS,
        });
    } catch (error) {
        next(error);
    }
};

const resendOTP = async (req, res, next) => {
    try {
        const { email } = req.body;
        let otpRecord = await Otp.findOne({ email });

        if (otpRecord) {
            const now = Date.now();
            const timeSinceLastRequest = now - new Date(otpRecord.lastRequested).getTime();
            
            if (timeSinceLastRequest < OTP_COOLDOWN_PERIOD_MS) {
                const waitTime = Math.ceil((OTP_COOLDOWN_PERIOD_MS - timeSinceLastRequest) / 1000);
                return res.status(statusCodes.TOO_MANY_REQUESTS).json({
                    status: ResponseStatus.FAILED,
                    message: MESSAGES.OTP.COOLDOWN(waitTime),
                });
            }

            // Generate new OTP and reset attempts
            const newOtp = generateOTP();
            otpRecord.otp = newOtp;
            otpRecord.lastRequested = now;
            otpRecord.attempts = 0;
            await otpRecord.save();
            
            await sendOTPEmail(email, newOtp);
            
            return res.status(statusCodes.OK).json({
                status: ResponseStatus.SUCCESS,
                message: MESSAGES.OTP.RESENT_SUCCESS,
            });
        }

        // No existing OTP - create new one
        const newOtpCode = generateOTP();
        await Otp.create({ 
            email, 
            otp: newOtpCode, 
            lastRequested: Date.now() 
        });
        await sendOTPEmail(email, newOtpCode);

        return res.status(statusCodes.OK).json({
            status: ResponseStatus.SUCCESS,
            message: MESSAGES.OTP.NEW_GENERATED,
        });
    } catch (error) {
        next(error);
    }
};

const sendOTPForResetPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(statusCodes.NOT_FOUND).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.GENERIC.NO_ACCOUNT_WITH_EMAIL,
            });
        }

        // Delete any existing password reset OTPs
        await Otp.deleteMany({ email, purpose: OtpPurpose.PASSWORD_RESET });

        const otpCode = generateOTP();
        await Otp.create({ 
            email, 
            otp: otpCode, 
            purpose: OtpPurpose.PASSWORD_RESET,
            lastRequested: Date.now() 
        });
        await sendOTPEmail(email, otpCode);
        
        return res.status(statusCodes.CREATED).json({
            status: ResponseStatus.SUCCESS,
            message: MESSAGES.OTP.SENT_SUCCESS,
        });
    } catch (error) {
        next(error);
    }
};

const verifyOTPForResetPassword = async (req, res, next) => {
    try {
        const { email, otp } = req.body;
        
        const otpRecord = await Otp.findOne({ email, purpose: OtpPurpose.PASSWORD_RESET });
        
        if (!otpRecord) {
            return res.status(statusCodes.BAD_REQUEST).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.OTP.NOT_FOUND,
            });
        }

        // Check if max attempts exceeded
        if (otpRecord.attempts >= OTP_MAX_ATTEMPTS) {
            await Otp.deleteMany({ email, purpose: OtpPurpose.PASSWORD_RESET });
            return res.status(statusCodes.TOO_MANY_REQUESTS).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.OTP.MAX_ATTEMPTS_EXCEEDED,
            });
        }

        if (otpRecord.otp !== otp) {
            await Otp.updateOne({ email, purpose: OtpPurpose.PASSWORD_RESET }, { $inc: { attempts: 1 } });
            const remainingAttempts = OTP_MAX_ATTEMPTS - otpRecord.attempts - 1;
            
            return res.status(statusCodes.BAD_REQUEST).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.OTP.INVALID(remainingAttempts),
            });
        }

        await Otp.deleteMany({ email, purpose: OtpPurpose.PASSWORD_RESET });
        
        return res.status(statusCodes.OK).json({
            status: ResponseStatus.SUCCESS,
            message: MESSAGES.OTP.VERIFIED_SUCCESS,
        });
    } catch (error) {
        next(error);
    }
};

const resetPassword = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate password strength
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            return res.status(statusCodes.BAD_REQUEST).json({
                status: ResponseStatus.FAILED,
                message: MESSAGES.PASSWORD.REQUIREMENTS_NOT_MET,
                errors: passwordValidation.errors
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        await User.findOneAndUpdate({ email }, { password: hashedPassword });
        
        return res.status(statusCodes.OK).json({
            status: ResponseStatus.SUCCESS,
            message: MESSAGES.PASSWORD.RESET_SUCCESS,
        });
    } catch (error) {
        next(error);
    }
};

const initiateGoogleLogin = (passport) => passport.authenticate('google', { scope: ['profile', 'email'] });

const handleGoogleCallback = (passport) => (req, res, next) => {
    passport.authenticate('google', { session: false }, (err, user, info) => {
        if (err || !user) {
            console.log("Error or no user:", { err, info });
            const appUrl = process.env.APP_URL || 'http://localhost:5173';
            return res.redirect(`${appUrl}/login`);
        }
        req.user = user;
        next();
    })(req, res, next);
};

const generateTokenAndRedirect = (req, res, next) => {
    try {
        // Ensure APP_URL is set
        const appUrl = process.env.APP_URL || 'http://localhost:5173';
        
        const { status } = req.user;
        if (status === UserStatus.BLOCKED) {
            const redirectUrl = `${appUrl}/google-response?status=blocked`;
            return res.redirect(redirectUrl);
        }
        
        // Generate access + refresh token pair for Google OAuth users
        const { accessToken, refreshToken } = generateTokenPair(req.user, {
            restaurantId: req.user.restaurantId
        });
        
        // Set refresh token as HTTP-only cookie
        setRefreshTokenCookie(res, refreshToken, false);
        
        res.set({
            'Cache-Control': 'no-store',
            'Pragma': 'no-cache',
        });
        
        // Redirect with access token as query param (will be stored in memory by frontend)
        const baseUrl = req.user.isVendor
            ? `${appUrl}/role-select`
            : `${appUrl}/google-response`;
        
        const redirectUrl = `${baseUrl}?accessToken=${encodeURIComponent(accessToken)}&userId=${req.user._id}&isVendor=${req.user.isVendor}`;
        console.log('Redirecting to:', redirectUrl);
        res.redirect(redirectUrl);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
    logout,
    refreshToken,
    registerUser,
    verifyOTP,
    resendOTP,
    initiateGoogleLogin,
    handleGoogleCallback,
    generateTokenAndRedirect,
    sendOTPForResetPassword,
    verifyOTPForResetPassword,
    resetPassword,
    validatePassword
};