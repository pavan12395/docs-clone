import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Home from './Pages/Home';
import './index.css';
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  </Router>
  );
}

export default App;
