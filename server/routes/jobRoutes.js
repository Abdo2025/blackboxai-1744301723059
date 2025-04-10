const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Post a new job
router.post('/', jobController.postJob);

// Get all jobs
router.get('/', jobController.getAllJobs);

// Apply to a job
router.post('/:jobId/apply', jobController.applyToJob);

module.exports = router;
