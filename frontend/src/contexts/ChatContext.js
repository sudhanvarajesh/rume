import React, { createContext, useContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const ChatContext = createContext();
const API_URL = 'http://localhost:8082'; 

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:8082');
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  return (
    <ChatContext.Provider value={{ socket }}>
      {children}
    </ChatContext.Provider>
  );
};
