// contexts/UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      setUser(JSON.parse(token));
    } else {
      setUser(null);
    } 
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};



export const useUser = () => useContext(UserContext);
