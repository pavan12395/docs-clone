// SignUp.js
import React, { useRef } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { CHANGE_USER_NAME } from '../Redux/actions';

const SignUp = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const signUpData = {
      name: usernameRef.current.value,
      password: passwordRef.current.value,
    };
  
    try {
      const response = await axios.post('http://localhost:5023/signup', signUpData);  
      console.log(response);
      dispatch({type:CHANGE_USER_NAME,payload:usernameRef.current.value});
      navigate("/home");
    } catch (error) {
      alert(error.response.data.message);
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
