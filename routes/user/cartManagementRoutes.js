const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const { 
    getCart, 
    getTotalItemsFromCart, 
    getTotalPriceFromCart,
    updateCart,
    generateDeliveryFee
} = require('../../controllers/user/cartManagementController');

// All cart routes require authentication
router.use(verifyToken('user'));

router.get('/', getCart);
router.get('/total-items', getTotalItemsFromCart);
router.get('/total-price', getTotalPriceFromCart);
router.put('/update', updateCart);
router.get('/delivery-fee', generateDeliveryFee);

module.exports = router;