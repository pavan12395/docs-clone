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
      // Make a GET request with query parameters
      const response = await axios.get('http://localhost:5023/login', {
        params: loginData,
      });
  
      // Handle the response
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
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
