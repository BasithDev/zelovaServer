const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const { shareSupplies, viewSharedSupplies, updateSupplies, deleteSupplies, getNearBySupplies } = require('../../controllers/user/suppliesManagementController');

// All supplies routes require authentication
router.use(verifyToken('user'));

router.post('/share', shareSupplies);
router.get('/view', viewSharedSupplies);
router.put('/update', updateSupplies);
router.delete('/delete', deleteSupplies);
router.get('/', getNearBySupplies);

module.exports = router;
