import React, { useState, useEffect } from 'react';
import { createRoom, getRooms } from '../api/roomService';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  const [roomName, setRoomName] = useState('');
  const [roomDesc, setRoomDesc] = useState('');
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms().then(setRooms);
  }, []);

  const handleCreateRoom = () => {
    createRoom(roomName, roomDesc).then((newRoom) => {
      setRooms([...rooms, newRoom]);
      setRoomName('');
      setRoomDesc('');
    });
  };

  return (
    <div className="container">
      <h1>Chat Application</h1>
      <input
        type="text"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <input
        type="text"
        value={roomDesc}
        onChange={(e) => setRoomDesc(e.target.value)}
      />
      <br></br>
      <button onClick={handleCreateRoom}>Create New Room</button>
      <br></br>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            <h2><Link to={`/rooms/${room._id}`}>{room.name}</Link></h2>
            <h4>{room.description}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
