const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const { getCurrentOrdersForVendor, streamOrders, updateOrderStatus, getPreviousOrdersOnDate } = require('../../controllers/vendor/vendorOrdersController');

// All vendor orders routes require user authentication
router.get('/current', verifyToken('user'), getCurrentOrdersForVendor);
router.get('/stream', verifyToken('user'), streamOrders); // SSE endpoint
router.patch('/update-status', verifyToken('user'), updateOrderStatus);
router.get('/previous/:date', verifyToken('user'), getPreviousOrdersOnDate);

module.exports = router;