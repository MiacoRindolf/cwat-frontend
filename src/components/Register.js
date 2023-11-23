// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', user);
      console.log(response.data);
      // Redirect to login page or display success message
    } catch (error) {
      console.error('Registration error:', error.response.data);
      // Handle errors (e.g., user already exists, server error)
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={user.username} onChange={handleInputChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleInputChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
