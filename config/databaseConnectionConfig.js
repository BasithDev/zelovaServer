const mongoose = require('mongoose');
const initCronJobs = require('../utils/cron');
const logger = require('../utils/logger');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            // Connection pool optimization
            maxPoolSize: 10,
            minPoolSize: 5,
            socketTimeoutMS: 45000,
            serverSelectionTimeoutMS: 5000,
            
            // Performance options
            autoIndex: process.env.NODE_ENV !== 'production',
            autoCreate: true
        });

        logger.info('Database connected successfully');
        console.log('Database connected successfully');
        
        // Strict query mode
        mongoose.set('strictQuery', true);
        
        // Initialize cron jobs
        initCronJobs();
    } catch (error) {
        logger.error('Database connection error:', error);
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

// Graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    logger.info('MongoDB connection closed');
    console.log('MongoDB connection closed');
    process.exit(0);
});

module.exports = connectDB;