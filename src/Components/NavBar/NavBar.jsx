import React, { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="nav-container" role="navigation" aria-label="Main navigation">
      <div className="nav">
        <div className="nav-logo" tabIndex={0}>
          Code<span className="highlight">E</span>asier
        </div>

        {/* Navigation menu */}
        <ul className="nav-menu">
          <li>
            <a href="#" tabIndex={0}>Home</a>
          </li>
          <li>
            <a href="#" tabIndex={0}>About</a>
          </li>
          <li>
            <a href="#" tabIndex={0}>Achievement</a>
          </li>
          <li className="login-register">
            <a href="#" tabIndex={0}>Login/Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
