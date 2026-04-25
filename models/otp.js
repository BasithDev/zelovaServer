const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true
    },
    otp: {
        type: String,
        required: true,
    },
    purpose: {
        type: String,
        enum: ['registration', 'password_reset'],
        default: 'registration'
    },
    attempts: {
        type: Number,
        default: 0
    },
    maxAttempts: {
        type: Number,
        default: 5
    },
    lastRequested: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
        index: { expires: 0 } // TTL index - auto-delete when expired
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Compound index for faster lookups
otpSchema.index({ email: 1, otp: 1 });

module.exports = mongoose.model('Otp', otpSchema);