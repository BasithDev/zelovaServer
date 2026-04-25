const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const {sendMailFromAdmin,getAnnouncementStatus,sendAnnouncement} = require('../../controllers/admin/emailSendingController')

// Apply admin authentication to all routes
router.use(verifyToken('admin'));

router.post('/',sendMailFromAdmin)
router.post('/announcement',sendAnnouncement)
router.get('/announcement/status/:jobId',getAnnouncementStatus)
module.exports = router