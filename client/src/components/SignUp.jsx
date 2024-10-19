// SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; // Import your CSS file for styling

const SignUp = () => {
  const [userType, setUserType] = useState('artist'); // User type: artist or buyer
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [portfolioURL, setPortfolioURL] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [businessDetails, setBusinessDetails] = useState('');
  const [yearlyWage, setYearlyWage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      bio,
      portfolioURL,
      shippingAddress,
      businessDetails,
      yearlyWage,
    };

    try {
      if (userType === 'artist') {
        // Call API for artist signup
        await axios.post(`/api/artists/${name}/new`, data);
      } else if (userType === 'buyer') {
        // Call API for buyer signup
        await axios.post(`/api/buyers/${name}/new`, data);
      }
      alert('Sign-up successful!');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="artist">Artist</option>
            <option value="buyer">Buyer</option>
          </select>
        </label>

        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        {userType === 'artist' && (
          <>
            <label>
              Bio:
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            </label>

            <label>
              Portfolio URL:
              <input type="url" value={portfolioURL} onChange={(e) => setPortfolioURL(e.target.value)} />
            </label>
          </>
        )}

        {userType === 'buyer' && (
          <>
            <label>
              Shipping Address:
              <input type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} />
            </label>

            <label>
              Business Details:
              <input type="text" value={businessDetails} onChange={(e) => setBusinessDetails(e.target.value)} />
            </label>

            <label>
              Yearly Wage:
              <input type="number" value={yearlyWage} onChange={(e) => setYearlyWage(e.target.value)} />
            </label>
          </>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
