import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Link to CSS for custom styles

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignInClick = () => {
    navigate(`/signin`); 
  };

  const handleSignUpClick = () => {
    navigate(`/signup`); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          ☰ Menu
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li className="menu-item">Rare Things</li>
            <li className="menu-item">Paintings</li>
            <li className="menu-item">Drawings</li>
            <li className="menu-item">Sculpture</li>
            <li className="menu-item">Artists</li>
          </ul>
        )}
      </div>

      <div className="navbar-logo">
        <h1>Artisify</h1>
      </div>

      <div className="navbar-auth">
        <button onClick={handleSignInClick} className="login-btn">Login</button>
        <button onClick={handleSignUpClick} className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
