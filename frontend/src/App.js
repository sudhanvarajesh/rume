import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChatProvider } from './contexts/ChatContext';
import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';
import './App.css';

const App = () => {
  return (
    <ChatProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms/:roomId" element={<RoomPage />} />
        </Routes>
      </Router>
    </ChatProvider>
  );
};

export default App;
