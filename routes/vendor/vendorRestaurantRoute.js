const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const { invalidateCache } = require('../../middlewares/cacheMiddleware');

const {
    getRestaurant,
    openOrCloseShop,
    setLocation,
    updateRestaurantDetails,
    updateRestaurantPic
} = require('../../controllers/vendor/vendorRestaurantController');

// All vendor routes require user authentication
router.get('/restaurant', verifyToken('user'), getRestaurant);

router.put('/restaurant/details', 
    verifyToken('user'),
    invalidateCache('restaurants:*', 'menu:*'),
    updateRestaurantDetails
);

router.patch('/restaurant/status', 
    verifyToken('user'),
    invalidateCache('restaurants:*'),
    openOrCloseShop
);

router.patch('/restaurant/image', 
    verifyToken('user'),
    invalidateCache('restaurants:*'),
    updateRestaurantPic
);

router.patch('/restaurant/location', 
    verifyToken('user'),
    invalidateCache('restaurants:*'),
    setLocation
);

module.exports = router;