import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useChat } from '../contexts/ChatContext';
import { getMessages } from '../api/chatService';
import { getRoomById } from '../api/roomService';
import '../App.css';

const RoomPage = () => {
  const { roomId } = useParams();
  const { socket } = useChat();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [roomName, setRoomName] = useState('');  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      const room = await getRoomById(roomId);
      setRoomName(room.name); 
    };

    fetchRoomDetails();

    getMessages(roomId).then(setMessages);

    if (socket) {
      socket.emit('joinRoom', roomId);

      socket.on('message', (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      return () => {
        socket.off('message');
        socket.emit('leaveRoom', roomId);
      };
    }
  }, [roomId, socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const msg = {
        roomId,
        user: 'Anonymous', 
        message,
      };
      socket.emit('chatMessage', msg);
      setMessage('');
    }
  };

  return (
    <div className="container chat-container">
      <h1>{roomName}</h1> 
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default RoomPage;
