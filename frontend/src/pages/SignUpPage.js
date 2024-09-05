import React, { useContext, useState } from 'react';
import { useNavigate} from 'react-router-dom';  
import '../css/SignUpPage.css'; // Import the CSS file if you're using a separate file
import axios from 'axios';
const API_URL = 'http://localhost:8081'; 

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8081/api/auth/signup', {username, password});
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Failed to sign up. Username might be already taken.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
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
          <button type="submit" className="btn btn-signup">Sign Up</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
