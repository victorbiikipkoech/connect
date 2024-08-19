import React from 'react';
import './Home.css'; // Importing the CSS file

const Home = () => {
  const handleGetStarted = () => {
    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to Hustler's Connections</h1>
        <p>Your journey to find the perfect job starts here.</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
