const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: [{
        type: String,
    }],
    salary: {
        min: { type: Number },
        max: { type: Number },
        type: { type: String, enum: ['hourly', 'monthly'] },
    },
    location: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['part-time', 'internship'],
        required: true,
    },
    recruiterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    applicants: [{
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        status: {
            type: String,
            enum: ['pending', 'accepted', 'rejected'],
            default: 'pending',
        },
        appliedAt: {
            type: Date,
            default: Date.now,
        },
    }],
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
