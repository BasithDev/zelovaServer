const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const {
  getUserById,
  updateProfile, 
  deleteImage, 
  sendOTP, 
  updateEmail, 
  resetPassword, 
  getUserStatus, 
  addAddress, 
  getAddresses, 
  deleteAddress, 
  updateAddress, 
  raiseIssue
} = require('../../controllers/user/userOperationsController');

// Public routes (no auth required)
router.get('/status/:id', getUserStatus);

// Protected routes (require user authentication)
router.get('/', verifyToken('user'), getUserById);
router.put('/update-profile', verifyToken('user'), updateProfile);
router.post('/delete-image', verifyToken('user'), deleteImage);
router.post('/send-otp', verifyToken('user'), sendOTP);
router.patch('/update-email', verifyToken('user'), updateEmail);
router.patch('/reset-password', verifyToken('user'), resetPassword);
router.post('/address/new', verifyToken('user'), addAddress);
router.get('/addresses', verifyToken('user'), getAddresses);
router.delete('/address/:addressId/delete', verifyToken('user'), deleteAddress);
router.put('/address/:addressId/update', verifyToken('user'), updateAddress);
router.post('/raise-issue', verifyToken('user'), raiseIssue);

module.exports = router;