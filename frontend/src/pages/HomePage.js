import React, { useState, useEffect } from 'react';
import { createRoom, getRooms } from '../api/roomService';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  const [roomName, setRoomName] = useState('');
  const [roomDesc, setRoomDesc] = useState('');
  const [roomCreatedBy, setRoomCreatedBy] = useState('Anonymous');
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getRooms().then(setRooms);
  }, []);

  const handleCreateRoom = () => {
    if (roomName.trim() === '' || roomDesc.trim() === '') {
      setError('Room name and description cannot be empty');
      return;
    }

    createRoom(roomName, roomDesc, roomCreatedBy).then((newRoom) => {
      setRooms([...rooms, newRoom]);
      setRoomName('');
      setRoomDesc('');
      setRoomCreatedBy('Anonymous');
      setError('');
    });
  };

  return (
    <div className="container">
      <h1>Chat Rooms</h1>
      <div className="create-room">
      
        <label htmlFor="roomName">Room Name:</label>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <label htmlFor="roomDesc">Room Description:</label>
        <input
          type="text"
          value={roomDesc}
          onChange={(e) => setRoomDesc(e.target.value)}
        />
        <button onClick={handleCreateRoom}>Create New Room</button>
        {error && <p className="error">{error}</p>}
      </div>
      <ul className="room-list">
        {rooms.map((room) => (
          <li key={room._id} className="room-item">
            <Link to={`/rooms/${room._id}`} className="room-link">
            <h2>{room.name}</h2>
            </Link>
            <p>{room.description}</p>
            <p>Created by {room.createdBy} at {new Date(room.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
