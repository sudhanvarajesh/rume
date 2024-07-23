import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChat } from '../contexts/ChatContext';
import { getMessages } from '../api/chatService';
import './App.css';

const RoomPage = () => {
  const { roomId } = useParams();
  const { socket } = useChat();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getMessages(roomId).then(setMessages);

    if (socket) {
      socket.emit('joinRoom', roomId);

      socket.on('message', (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      return () => socket.off('message');
    }
  }, [roomId, socket]);

  const handleSendMessage = () => {
    const newMessage = { roomId, user: 'User', message };
    socket.emit('chatMessage', newMessage);
    setMessage('');
  };

  return (
    <div className="container chat-container">
      <h1>Chat Room</h1>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default RoomPage;
