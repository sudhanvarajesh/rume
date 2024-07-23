const Room = require('../models/Room');

exports.getRooms = async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
};

exports.createRoom = async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.status(201).json(room);
};

exports.getRoomById = async (req, res) => {
  const { roomId } = req.params;
  try {
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching room', error });
  }
};