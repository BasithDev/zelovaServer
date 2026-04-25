const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');

const {
    addOffer,
    getOffers,
    deleteOffer
} = require('../../controllers/vendor/vendorOffersController');

// All vendor offers routes require user authentication
router.get('/', verifyToken('user'), getOffers);
router.post('/add', verifyToken('user'), addOffer);
router.delete('/delete/:offerId', verifyToken('user'), deleteOffer);

module.exports = router;