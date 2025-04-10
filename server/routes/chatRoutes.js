const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Send a message
router.post('/:jobId/send', chatController.sendMessage);

// Get message history
router.get('/:jobId/history', chatController.getMessageHistory);

module.exports = router;
