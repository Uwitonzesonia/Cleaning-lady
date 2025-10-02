import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo">SukuSmart</div>
      <nav>
        <a href="#services">Services</a>
        <a href="#how">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
