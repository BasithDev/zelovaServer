const express = require('express')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const path = require('path')
const connetDB = require('./config/databaseConnectionConfig')
const compression = require('compression');

// Security & Logging Middleware
const helmetConfig = require('./middlewares/helmetConfig');
const requestLogger = require('./middlewares/requestLogger');
const logger = require('./utils/logger');

const authRouter = require('./routes/auth/authenticationRoutes')
const userReqVendorRouter = require('./routes/user/vendorRequestRoutes')
const userRouter = require('./routes/user/userRoutes')
const restaurantListing = require('./routes/user/restaurantListingsRoutes')
const cartRouter = require('./routes/user/cartManagementRoutes')
const userCouponRouter = require('./routes/user/redeemCouponRoutes')
const orderRouter = require('./routes/user/ordersManagementRoutes')
const zcoinRouter = require('./routes/user/zcoinRoutes')
const favoriteRouter = require('./routes/user/favoritesManagementRoutes')
const searchRoutes = require('./routes/user/searchRoutes')

const adminManageRouter = require('./routes/admin/adminManagementRoutes')
const adminRouter = require('./routes/admin/adminRoutes')
const adminCouponRouter = require('./routes/admin/couponManagementRoutes')
const sendMailRouter = require('./routes/admin/emailSendingRoutes')
const userIssuesRouter = require('./routes/admin/userIssuesManagementRoutes')
const announcementTempRouter = require('./routes/admin/announcementTemplateRoutes')

const venodrRouter = require('./routes/vendor/vendorRestaurantRoute')
const offerRouter = require('./routes/vendor/vendorOffersRoute')
const categoriesRouter = require('./routes/vendor/vendorCategoriesRoute')
const productMngRouter = require('./routes/vendor/vendorProductsRoute')
const vendorOrderRouter = require('./routes/vendor/vendorOrdersRoute') 
const vendorDashboardRouter = require('./routes/vendor/vendorDashboardRoute')

const suppliesRoutes = require('./routes/user/suppliesRoutes');

const passport = require('passport');
const errorMiddleware = require('./middlewares/errorHandlingMiddleware')
const { protectApi } = require('./middlewares/authenticationValidatorMiddleware')

require('dotenv').config()

const app = express()

// Security headers (first middleware)
app.use(helmetConfig);

// Request logging
app.use(requestLogger);

// Body parsing with size limits
app.use(cookieParser())
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(compression());

// CORS configuration
app.use(cors({
    origin: [
        process.env.APP_URL || "http://localhost:5173",
        "http://zelova.zapto.org",
        "https://api.cloudinary.com"
    ].filter(Boolean),
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
    maxAge: 86400 // Cache preflight for 24 hours
}))

// Database connection
connetDB()
const port = process.env.PORT || 5000

app.use(passport.initialize())

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Apply API protection to all /api routes
app.use('/api', protectApi);

app.use('/api/auth',authRouter)
app.use('/api/user/req-vendor',userReqVendorRouter)
app.use('/api/user',userRouter)
app.use('/api/user',restaurantListing)
app.use('/api/user/cart',cartRouter)
app.use('/api/user/coupons',userCouponRouter)
app.use('/api/user/orders',orderRouter)
app.use('/api/user/zcoins',zcoinRouter)
app.use('/api/user/favourites',favoriteRouter)
app.use('/api/user/supplies', suppliesRoutes);
app.use('/api/user/search', searchRoutes);

app.use('/api/admin/manage',adminManageRouter)
app.use('/api/admin',adminRouter)
app.use('/api/admin/coupon',adminCouponRouter)
app.use('/api/admin/send-mail',sendMailRouter)
app.use('/api/admin/user-issues',userIssuesRouter)
app.use('/api/admin/announcement-temp',announcementTempRouter)

app.use('/api/vendor',venodrRouter)
app.use('/api/vendor',categoriesRouter)
app.use('/api/vendor',productMngRouter)
app.use('/api/vendor/offer',offerRouter)
app.use('/api/vendor/orders',vendorOrderRouter)
app.use('/api/vendor/dashboard',vendorDashboardRouter)

app.use(errorMiddleware); 

const server = app.listen(port, () => {
    logger.info(`Server is listening on port ${port}`);
    console.log(`Server is listening on port ${port}!`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        logger.error(`Port ${port} is already in use`);
        console.error(`Port ${port} is already in use. Please use a different port.`);
        process.exit(1);
    } else {
        logger.error('Server error:', err);
        console.error('Server error:', err);
    }
});

// Graceful shutdown
process.on('SIGTERM', () => {
    logger.info('SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        logger.info('Server closed');
        process.exit(0);
    });
});