// SignUp.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const signUpData = {
      name: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      // Call your API endpoint for signup (e.g., localhost:5023/signUp)
      // If successful, you can navigate to the Home page
      // For demonstration purposes, let's assume a successful signup
      console.log('Sign up successful!', signUpData);
    } catch (error) {
      console.error('Error in sign up:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>SignUp Page</h2>
        <form onSubmit={handleSignUp}>
          <label>
            Username:
            <input type="text" ref={usernameRef} required />
          </label>
          <label>
            Password:
            <input type="password" ref={passwordRef} required />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/login" className="link">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
