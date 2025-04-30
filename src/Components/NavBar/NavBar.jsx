import React, { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="nav-container" role="navigation" aria-label="Main navigation">
      <div className="nav">
        <div className="nav-logo" tabIndex={0} aria-label="Code Easier Logo">
          Code<span className="highlight">E</span>asier
        </div>

        {/* Navigation menu */}
        <ul className="nav-menu">
          <li>
            <a href="#home" tabIndex={0} aria-label="Navigate to Home">Home</a>
          </li>
          <li>
            <a href="#about" tabIndex={0} aria-label="Navigate to About">About</a>
          </li>
          <li>
            <a href="#achievement" tabIndex={0} aria-label="Navigate to Achievement">Achievement</a>
          </li>
          <li className="login-register">
            <a href="#login" tabIndex={0} aria-label="Navigate to Login/Register">Login/Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
