const express = require('express');
const router = express.Router();
const bugReportController = require('../controllers/bugReportController');

// POST /api/bug-report
router.post('/', bugReportController.submitBugReport);

// Optional: GET /api/bug-reports to view all reports
router.get('/', bugReportController.getBugReports);

module.exports = router;
