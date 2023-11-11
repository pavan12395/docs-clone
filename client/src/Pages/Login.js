// Login.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      name: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      // Call your API endpoint for login (e.g., localhost:5023/login)
      // If successful, you can navigate to the Home page
      // For demonstration purposes, let's assume a successful login
      console.log('Login successful!', loginData);
    } catch (error) {
      console.error('Error in login:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login Page</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" ref={usernameRef} required />
          </label>
          <label>
            Password:
            <input type="password" ref={passwordRef} required />
          </label>
          <button type="submit">Login</button>
        </form>
        <Link to="/" className="link">
          Go to SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
