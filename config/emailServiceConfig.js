const nodemailer = require('nodemailer');

// Check if email credentials are configured
const isEmailConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASS;

const transporter = isEmailConfigured 
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
    : null;

const sendOTPEmail = async (to, otp) => {
    // If email is not configured, log and skip
    if (!transporter) {
        console.warn('⚠️ Email not configured. OTP would be:', otp);
        console.warn('Set EMAIL_USER and EMAIL_PASS in .env to enable emails');
        return; // Don't throw error, just skip
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Your Zelova OTP Code',
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2 style="color: #f97316;">Zelova Verification</h2>
                <p>Your OTP code is:</p>
                <h1 style="color: #333; letter-spacing: 5px;">${otp}</h1>
                <p>This code expires in 10 minutes.</p>
                <p style="color: #666; font-size: 12px;">If you didn't request this, please ignore this email.</p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ OTP sent successfully to', to);
    } catch (error) {
        console.error('❌ Error sending OTP:', error.message);
        throw error;
    }
};

module.exports = { sendOTPEmail };