const Job = require('../models/Job');

// Post a new job
exports.postJob = async (req, res) => {
    const { title, description, requirements, salary, location, type } = req.body;

    try {
        const newJob = new Job({ title, description, requirements, salary, location, type, recruiterId: req.user.id });
        await newJob.save();
        res.status(201).json({ message: 'Job posted successfully', job: newJob });
    } catch (error) {
        res.status(500).json({ message: 'Error posting job', error });
    }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving jobs', error });
    }
};

// Apply to a job
exports.applyToJob = async (req, res) => {
    const { jobId } = req.params;
    const studentId = req.user.id;

    try {
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        job.applicants.push({ studentId, status: 'pending' });
        await job.save();
        res.status(200).json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error applying to job', error });
    }
};
