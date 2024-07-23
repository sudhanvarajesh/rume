const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdBy: String, // Add this field
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Room', roomSchema);
