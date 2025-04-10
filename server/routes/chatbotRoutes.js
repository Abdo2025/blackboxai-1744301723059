const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

// Interact with the chatbot
router.post('/interact', chatbotController.interact);

module.exports = router;
