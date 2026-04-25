const express = require('express');
const { getRestaurants, getMenu } = require('../../controllers/user/restaurantListingsController');
const { cacheResponse } = require('../../middlewares/cacheMiddleware');
const router = express.Router();

// Cache restaurant listings for 5 minutes
// Key includes lat/lon for location-specific caching
router.get('/nearby-restaurants', 
    cacheResponse(300, (req) => `restaurants:${req.query.lat || 'default'}:${req.query.lon || 'default'}`),
    getRestaurants
);

// Cache menu for 10 minutes
router.get('/:id/menu', 
    cacheResponse(600, (req) => `menu:${req.params.id}`),
    getMenu
);

module.exports = router