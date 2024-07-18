require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const chatRoutes = require('./routes/chatRoutes');
const chatController = require('./controllers/chatController');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use('/api', chatRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
  });

  socket.on('chatMessage', (msg) => {
    chatController.addMessage(msg);
    io.to(msg.roomId).emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 8082;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
