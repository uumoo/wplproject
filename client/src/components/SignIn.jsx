import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './SignIn.css';  // Import your CSS file for styling

const SignIn = () => {
  const [userType, setUserType] = useState('artist');  // User type: artist or buyer
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize navigate for redirecting

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { email, password };
      let response;

      if (userType === 'artist') {
        // Call API for artist sign-in and get artistID
        response = await axios.post(`http://localhost:8000/api/artists/signin`, data);
        const artistID = response.data.artistID;
        navigate(`/user/artist/${artistID}`);  // Redirect to artist profile page
      } else if (userType === 'buyer') {
        // Call API for buyer sign-in and get buyerID
        response = await axios.post(`http://localhost:8000/api/buyers/signin`, data);
        const buyerID = response.data.buyerID;
        navigate(`/user/buyer/${buyerID}`);  // Redirect to buyer profile page
      }

      alert('Sign-in successful!');
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Invalid credentials.');
    }
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="artist">Artist</option>
            <option value="buyer">Buyer</option>
          </select>
        </label>

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
