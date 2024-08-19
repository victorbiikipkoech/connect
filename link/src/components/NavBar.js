import React from 'react';
import './NavBar.css'; // Importing the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyApp</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/updates">Updates</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign-Up</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
