const Job = require('../models/Job');

// Function to match jobs based on parsed CV data
exports.matchJobs = async (parsedCV) => {
    const { skills, education, experience } = parsedCV;

    // Placeholder logic for matching jobs
    const matchedJobs = await Job.find({
        $or: [
            { 'requirements': { $in: skills } },
            { 'description': { $regex: skills.join('|'), $options: 'i' } },
        ],
    }).limit(5); // Return top 5 matched jobs

    return matchedJobs;
};
