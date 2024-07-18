const express = require('express');
const chatController = require('../controllers/chatController');
const router = express.Router();

router.get('/messages/:roomId', chatController.getMessages);


module.exports = router;
