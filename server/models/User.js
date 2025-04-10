const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'recruiter', 'admin'],
        required: true,
    },
    profile: {
        name: { type: String },
        avatar: { type: String },
        contact: { type: String },
        cv: { type: String },
        skills: [{ type: String }],
        education: [{ type: Object }],
        experience: [{ type: Object }],
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
