import React from 'react';
import './Navbar.css'; // Link to CSS for custom styles

const Navbar = () => {
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
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
