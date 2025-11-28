import React from "react";
import "../../assets/styles/navbar.css";
import logo from "../../assets/images/logo.jpg";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="right-to-bar">
          <div id="top-bar-trapezoid">
          </div>
          <p>Join with us and be part of the success</p>
        </div>
        <FaFacebookF className="facebook-icon" />
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="logo-section">
          <img src={logo} alt="School Logo" />
          <span>CAN-AVID NATIONAL HIGH SCHOOL</span>
        </div>
        <button className="message-button">
          <span>MESSAGE US</span>
          <FaEnvelope className="envelope-icon" />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>
            About Us
            <ul className="dropdown">
              <li>History</li>
              <li>Mission & Vision</li>
            </ul>
          </li>
          <li>
            Admission
            <ul className="dropdown">
              <li>Requirements</li>
              <li>Process</li>
            </ul>
          </li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;