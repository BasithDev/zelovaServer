const express = require('express');
const router = express.Router();
const { addFavorite, removeFavorite, getFavorites } = require('../../controllers/user/favoritesManagementController');
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');

// Apply user authentication to all favorites routes
router.use(verifyToken('user'));

router.post('/add', addFavorite);
router.delete('/remove', removeFavorite);
router.get('/', getFavorites);

module.exports = router;