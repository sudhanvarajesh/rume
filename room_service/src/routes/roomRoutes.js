const express = require('express');
const roomController = require('../controllers/roomController');
const router = express.Router();

router.get('/rooms', roomController.getRooms);
router.post('/rooms', roomController.createRoom);

module.exports = router;
