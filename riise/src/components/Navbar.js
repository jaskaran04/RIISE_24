// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for the navbar styles
import LogoSvg from "../components/nav_logo.svg"; // Import your SVG logo
import { useState } from "react";

const Navbar = ({ scrollToFooter }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={LogoSvg} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/#schedule-section" className="navbar-button">
            Schedule
          </Link>
          <Link to="/" className="navbar-button">
            Speakers
          </Link>
          <Link to="/" className="navbar-button">
            About Us
          </Link>
          <Link to="#" className="navbar-button" onClick={scrollToFooter}>
            Contact Us
          </Link>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSd9CcVMj2jj9REtWkVmSXNwv6zVc2sw4DLEZGzZstuJQtEKjw/viewform?usp=sf_link" className="navbar-register-button">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
