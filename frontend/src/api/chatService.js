import axios from 'axios';

const API_URL = 'http://localhost:8082'; 


export const getMessages = async (roomId) => {
  const response = await axios.get(`http://localhost:8082/api/messages/${roomId}`);
  return response.data;
};
