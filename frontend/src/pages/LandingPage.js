import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css'; // Assuming you will place the CSS in a separate file

const LandingPage = () => {
  console.log('LandingPage rendered');
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Rume</h1>
        <p>Your one-stop solution for managing your chat rooms efficiently.</p>
        <div className="navigation-links">
          <Link to="/signin" className="btn btn-signin">Sign In</Link>
          <Link to="/signup" className="btn btn-signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
