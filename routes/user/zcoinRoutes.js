const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const { getZcoinsData, sendZcoins, searchUsers } = require('../../controllers/user/zcoinManagementController');

// All zcoin routes require authentication
router.use(verifyToken('user'));

router.get('/', getZcoinsData);
router.post('/send', sendZcoins);
router.get('/search', searchUsers);

module.exports = router;