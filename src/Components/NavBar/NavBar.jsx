import React, { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav">
        <div className="nav-logo">
          Code<span className="highlight">E</span>asier
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Achievement</a>
          </li>
          <li className="login-register">
            <a href="#">Login/Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
