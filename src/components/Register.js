// components/Register.js
import React, { useState } from 'react';

const Register = ({ onFormSwitch }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('YOUR_REGISTER_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });
      if (response.ok) {
        // Handle successful registration
        console.log('Registration successful');
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <button onClick={() => onFormSwitch('login')}>Login here</button></p>
    </div>
  );
}

export default Register;
