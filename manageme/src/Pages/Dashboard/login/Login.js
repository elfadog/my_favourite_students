<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Login.css';
import logo from './logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const playAnimation = () => {
    const loginBox = document.querySelector('.login-box');
    const svg = document.querySelector('.background-svg');
=======
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import gsap from "gsap";
import "./Login.css";
import logo from "./logo.png";

const Login = () => {
  const navigate = useNavigate(); // Get the navigate function
  useEffect(() => {
    const loginBox = document.querySelector(".login-box");
    const svg = document.querySelector(".background-svg");
>>>>>>> eba858f754ecf98f5f9ded8b4e1d6b5f3f36be87
    gsap.set(loginBox, { opacity: 0 });

    const tl = gsap.timeline();
    tl.to(svg, {
      duration: 0.5,
      scale: 1.5,
      opacity: 0,
      ease: "power1.in",
    }).to(loginBox, { duration: 1, opacity: 1, ease: "power1.out" });
    tl.play();
  }

  useEffect(() => {
    playAnimation();
  }, []);
<<<<<<< HEAD

  const handleLoginClick = async () => {
  try {
    const res = await axios.post('http://localhost:3001/login', { username, password });
    if (res.data.success) { // assuming your server responds with a success field
      console.log('Login Successful', res.data);
      navigate('/Dashboard');
    } else {
      throw new Error(res.data.error || 'Login failed');
    }
  } catch (err) {
    console.error('Login Error', err.message);
    setError(err.message);
    setPassword('');
    setUsername('');
    playAnimation();
  }
};

  
=======
  const handleLoginClick = () => {
    // You can also add your login logic here
    navigate("/Dashboard"); // Navigate to the dashboard when the button is clicked
  };
>>>>>>> eba858f754ecf98f5f9ded8b4e1d6b5f3f36be87

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="logo" />
        <h2>ManageMe</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
<<<<<<< HEAD
            <label htmlFor='username'>USERNAME:</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor='password'>PASSWORD:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
=======
            <label htmlFor="username">USERNAME:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">PASSWORD:</label>
            <input type="password" id="password" name="password" />
>>>>>>> eba858f754ecf98f5f9ded8b4e1d6b5f3f36be87
          </div>
          {error && <div className="error-message">{error}</div>} {/* Display errors */}
        </form>
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
