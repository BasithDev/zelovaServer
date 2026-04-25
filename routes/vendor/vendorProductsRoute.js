const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const { addProduct, getProducts, listOrUnlist, deleteProduct, updateProduct, updateOffer } = require('../../controllers/vendor/vendorProductsController');
const { invalidateCache } = require('../../middlewares/cacheMiddleware');

// All vendor products routes require user authentication
router.get('/products', verifyToken('user'), getProducts);

router.post('/product',
    verifyToken('user'),
    invalidateCache('menu:*', 'restaurants:*'),
    addProduct
);

router.patch('/product/:id/list-or-unlist',
    verifyToken('user'),
    invalidateCache('menu:*'),
    listOrUnlist
);

router.delete('/product/:id/delete',
    verifyToken('user'),
    invalidateCache('menu:*'),
    deleteProduct
);

router.put('/product/update',
    verifyToken('user'),
    invalidateCache('menu:*'),
    updateProduct
);

router.patch('/product/offer/update',
    verifyToken('user'),
    invalidateCache('menu:*'),
    updateOffer
);

module.exports = router;