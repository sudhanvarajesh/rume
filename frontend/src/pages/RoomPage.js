import React, { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useChat } from '../contexts/ChatContext';
import { useUser } from '../contexts/UserContext';
import { getMessages } from '../api/chatService';
import { getRoomById } from '../api/roomService';
import '../App.css';

const RoomPage = () => {
  const { roomId } = useParams();
  const { socket } = useChat();
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [roomName, setRoomName] = useState('');
  const messagesEndRef = useRef(null);
  const [activeUsers, setActiveUsers] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (user===null){
      navigate('/'); // Redirect to homepage
    }
    const fetchRoomDetails = async () => {
      const room = await getRoomById(roomId);
      setRoomName(room.name);
    };

    fetchRoomDetails();

    getMessages(roomId).then(setMessages);

    if (socket) {
      socket.emit('joinRoom', roomId, user.username);

      socket.on('message', (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      socket.on('activeUsers', (users) => {
        setActiveUsers(users);
      });

      return () => {
        socket.off('message');
        socket.off('activeUsers');
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
        user: user.username, 
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
      <div className="users">
        <h3>Active Users</h3>
        <ul>
          {activeUsers.map((user, index) => (
            <li key={index}>{user.user}</li>
          ))}
        </ul>
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