import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Login.css";
import logo from "./logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const playAnimation = () => {
    const loginBox = document.querySelector(".login-box");
    const svg = document.querySelector(".background-svg");

    gsap.set(loginBox, { opacity: 0 });

    const tl = gsap.timeline();
    tl.to(svg, {
      duration: 0.5,
      scale: 1.5,
      opacity: 0,
      ease: "power1.in",
    }).to(loginBox, { duration: 1, opacity: 1, ease: "power1.out" });
    tl.play();
  };

  useEffect(() => {
    playAnimation();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLoginClick();
    }
  };

  const handleLoginClick = async () => {
    try {
      const res = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      if (res.data.success) {
        console.log("Login Successful", res.data);
        navigate("/Dashboard");
      } else {
        throw new Error(res.data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login Error", err.message);
      setError(err.message);
      setPassword("");
      setUsername("");
      playAnimation();
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="logo" />
        <h2>ManageMe</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="username">USERNAME:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress} // Added this line
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">PASSWORD:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress} // Added this line
            />
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
        <button
          className="login-button"
          type="button"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
