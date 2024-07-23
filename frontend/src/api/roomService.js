import axios from 'axios';

const API_URL = process.env.REACT_APP_ROOM_API_URL || 'http://localhost:8083'; 
console.log(API_URL);
 // Make sure this matches your Docker setup

export const createRoom = async (roomName, roomDesc) => {
  try {
    const response = await axios.post(`${API_URL}/api/rooms`, { name: roomName, description: roomDesc });
    return response.data;
  } catch (error) {
    console.error('Failed to create room', error.message);
    throw error;
  }
};

export const getRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/rooms`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch rooms', error.message);
    console.error('Error details:', error.toJSON());
    throw error;
  }
};

export const getRoomById = async (roomId) => { 
  const response = await axios.get(`${API_URL}/api/rooms/${roomId}`);
  return response.data;
};