import React from "react";
import "./Header.css";
import Logo from "../assets/logo/logo.png"; // ✅ IBI NI UKURI

function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={Logo} alt="Company Logo" className="logo-img" /> {/* ✅ HANO DUHINDUYE */}
        <h1 className="company-name">Trust Cleaning Company</h1>
      </div>

      <nav>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#booking">Book Now</a>
      </nav>
    </header>
  );
}

export default Header;

