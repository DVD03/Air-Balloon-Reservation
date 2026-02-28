// src/components/footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../views/HomePage/style.css"; // Adjust the path as necessary

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-wave"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>SkyHigh Balloons</h3>
            <p>
              Experience the thrill of floating among the clouds with our
              premium hot air balloon adventures. Safe, memorable, and
              breathtaking.
            </p>
            <div className="social-links">
              <a href="https://web.facebook.com/?_rdc=1&_rdr#" className="social-icon">
                <i className="fab fa-facebook-f"></i> 
              </a>
              <a href="https://www.instagram.com/#" className="social-icon">
                <i className="fab fa-instagram"></i> 
              </a>
              <a href="https://x.com/?lang=en/#" className="social-icon">
                <i className="fab fa-twitter"></i> 
              </a>
              <a href="https://www.youtube.com/#" className="social-icon">
                <i className="fab fa-youtube"></i> 
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/booking">Book a Flight</Link>
              </li>
              <li>
                <Link to="/gallery">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/safety">Safety Information</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Info</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 144 kandy Road,
              pallakale
            </p>
            <p>
              <i className="fas fa-phone"></i> +94 123-4567
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@skyhighballoons.com
            </p>
            <p>
              <i className="fas fa-clock"></i> Operating hours: 5AM-9PM Daily
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SkyHigh Balloons. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
