const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const { getCoupons, addCoupon, updateCoupon, deleteCoupon } = require('../../controllers/admin/couponManagementController')

// Apply admin authentication to all routes
router.use(verifyToken('admin'));

router.get('/', getCoupons);
router.post('/add', addCoupon);
router.put('/update/:id', updateCoupon);
router.delete('/delete/:id', deleteCoupon);

module.exports = router