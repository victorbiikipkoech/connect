import React from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="form-footer">
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
