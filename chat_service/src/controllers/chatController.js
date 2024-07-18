const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  const { roomId } = req.params;
  const messages = await Message.find({ roomId });
  res.json(messages);
};

exports.addMessage = async (messageData) => {
  const message = new Message(messageData);
  await message.save();
};
