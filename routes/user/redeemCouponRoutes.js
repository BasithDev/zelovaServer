const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const { getAvailableCoupons } = require('../../controllers/user/redeemedCouponsManagement');

// All coupon routes require authentication
router.use(verifyToken('user'));

router.get('/', getAvailableCoupons);

module.exports = router;