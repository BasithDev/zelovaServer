const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middlewares/authenticationValidatorMiddleware');
const { getVendorReports, exportVendorReportPDF, exportVendorReportExcel, getVendorDashboardData } = require('../../controllers/vendor/vendorDashboardController');

// All vendor dashboard routes require user authentication
router.get('/reports', verifyToken('user'), getVendorReports);
router.post('/reports/export/pdf', verifyToken('user'), exportVendorReportPDF);
router.post('/reports/export/excel', verifyToken('user'), exportVendorReportExcel);
router.get('/', verifyToken('user'), getVendorDashboardData);

module.exports = router;
