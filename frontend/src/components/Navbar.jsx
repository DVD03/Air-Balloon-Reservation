// src/components/navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../views/HomePage/style.css"; // Adjust the path as necessary

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="container">
        <div className="nav-container">
          <div className="mobile-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/packages" className="nav-link">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/transport" className="nav-link">
                Transport
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
