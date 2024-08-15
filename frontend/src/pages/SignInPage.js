// SignInPage.js
import React, { useContext, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import '../css/SignInPage.css';
import axios from 'axios';

const SignInPage = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/auth/signin', { username, password });
    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      setUser({ username, password });
      navigate('/home'); // Redirect to homepage
    }
    else{
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="btn">Sign In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
