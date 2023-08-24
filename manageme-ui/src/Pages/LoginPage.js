// src/components/LoginPage.js

import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';

const LoginPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleLogin = () => {
    // You can implement your login logic here.
    // For demonstration purposes, let's navigate to the Home page after "logging in".
    navigate.push('/home');
};
return (
    <div>
    <h2>Login Page</h2>
    <form>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
        Login
        </button>
    </form>
    </div>
);
};

export default LoginPage;
