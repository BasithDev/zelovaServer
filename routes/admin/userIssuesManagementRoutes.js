const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');

const { 
    ignoreIssue, 
    getIssues, 
    refundUser, 
    resolveIssue, 
    getOrderDetails
} = require('../../controllers/admin/userIssuesManagementController')

// Apply admin authentication to all routes
router.use(verifyToken('admin'));

router.get('/', getIssues)
router.delete('/ignore', ignoreIssue)
router.put('/refund', refundUser)
router.delete('/resolve', resolveIssue)
router.get('/getOrderDetails/:orderId', getOrderDetails)

module.exports = router;