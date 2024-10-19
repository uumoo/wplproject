import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Link to CSS for custom styles

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate(`/signin`); 
  };
  const handleSignUpClick = () => {
    navigate(`/signup`); 
  };




  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>art kid.</h1>
      </div>

      <ul className="navbar-menu">
        <li>Rare Things</li>
        <li>Paintings</li>
        <li>Drawings</li>
        <li>Sculpture</li>
        <li>Artists</li>
      </ul> 

      <div className="navbar-auth">
        <button onClick={() => handleSignInClick()}   className="login-btn">Login</button>
        <button onClick={() => handleSignUpClick()} className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
