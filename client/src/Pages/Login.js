// Login.js
import React, { useRef } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { CHANGE_USER_NAME } from '../Redux/actions';


const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      name: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(loginData);
    try {
      const response = await axios.post('http://localhost:5023/login',loginData);
      dispatch({type:CHANGE_USER_NAME,payload:usernameRef.current.value});
      navigate("/home");
    } catch (error) {
        console.log(error);
      alert(error.response.data.message);

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
