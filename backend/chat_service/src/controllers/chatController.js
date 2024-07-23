const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  const { roomId } = req.params;
  try {
    const messages = await Message.find({ roomId });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages', error });
  }
};

exports.addMessage = async (messageData) => {
  try {
    const message = new Message(messageData);
    await message.save();
  } catch (error) {
    console.error('Error adding message:', error);
  }
};
