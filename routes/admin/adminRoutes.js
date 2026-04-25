const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const {getAdminById, getReports,exportReportExcel,exportReportPDF,getRestaurants,blockUnblockRestaurant,getDashboardData} = require('../../controllers/admin/adminOperationsController')

// Apply admin authentication to all routes
router.use(verifyToken('admin'));

router.get('/',getAdminById)
router.get('/reports',getReports) 
router.post('/reports/export/pdf', exportReportPDF);
router.post('/reports/export/excel', exportReportExcel);
router.get('/restaurants',getRestaurants)
router.patch('/restaurant/block-unblock/:id',blockUnblockRestaurant)
router.get('/dashboard',getDashboardData)
module.exports = router