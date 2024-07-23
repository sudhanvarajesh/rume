import axios from 'axios';

const API_URL = process.env.REACT_APP_CHAT_API_URL || 'http://localhost:8082'; 

export const getMessages = async (roomId) => {
  const response = await axios.get(`${API_URL}/api/messages/${roomId}`);
  return response.data;
};
