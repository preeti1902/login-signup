// components/Register.js
import React, { useState } from 'react';

const Register = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Registering with:', fullName, email, password);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
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
