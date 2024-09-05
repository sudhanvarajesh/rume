import axios from 'axios';

const API_URL = 'http://ec2-13-59-204-174.us-east-2.compute.amazonaws.com'; 
console.log(API_URL);
 // Make sure this matches your Docker setup

export const createRoom = async (roomName, roomDesc, roomCreatedBy) => {
  try {
    const response = await axios.post(`${API_URL}/api/rooms`, { name: roomName, description: roomDesc, createdBy: roomCreatedBy});
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