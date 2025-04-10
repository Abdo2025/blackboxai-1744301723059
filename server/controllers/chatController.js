const Message = require('../models/Message');

// Send a message
exports.sendMessage = async (req, res) => {
    const { jobId } = req.params;
    const { senderId, receiverId, content } = req.body;

    try {
        const newMessage = new Message({
            jobId,
            senderId,
            receiverId,
            content,
        });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully', newMessage });
    } catch (error) {
        res.status(500).json({ message: 'Error sending message', error });
    }
};

// Get message history
exports.getMessageHistory = async (req, res) => {
    const { jobId } = req.params;

    try {
        const messages = await Message.find({ jobId }).sort({ createdAt: 1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving message history', error });
    }
};
