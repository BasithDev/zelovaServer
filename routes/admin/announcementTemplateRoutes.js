const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');

const {createAnnounceTemp,deleteAnnounceTemp,getAnnounceTemp} = require('../../controllers/admin/announcementTemplateController')

// Apply admin authentication to all routes
router.use(verifyToken('admin'));

router.post('/add',createAnnounceTemp)
router.delete('/delete/:id',deleteAnnounceTemp)
router.get('/',getAnnounceTemp)

module.exports = router;