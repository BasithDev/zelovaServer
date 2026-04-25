const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');

const {
    addCategory,
    addSubCategory,
    getCategories,
    getSubCategories
} = require('../../controllers/vendor/vendorCategoriesController');

// All vendor categories routes require user authentication
router.get('/categories', verifyToken('user'), getCategories);
router.get('/subcategories', verifyToken('user'), getSubCategories);
router.post('/category/add', verifyToken('user'), addCategory);
router.post('/subcategory/add', verifyToken('user'), addSubCategory);

module.exports = router;