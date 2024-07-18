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
