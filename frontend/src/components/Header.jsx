import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../views/HomePage/style.css";
import logo from "../assets/images/balloon-logo.png";
import SignUp_Popup from "./LoginSignUpModal/LoginSignUpModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loginOrRegi, setLoginOrRegi] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="SkyHigh Balloons" className="logo" />
            <h1 className="site-title">SkyHigh Balloons</h1>
          </div>
          <div className="welcome-note">
            <span className="welcome-text">
              <b>Your journey to the skies begins here</b>
            </span>
          </div>
          <div className="header-actions">
            <p onClick={
              () => { setIsOpen(true); setLoginOrRegi("login") }
            } className="auth-btn login-btn">
              Login
            </p>
            <p
              onClick={() =>{ setIsOpen(true); setLoginOrRegi("register")}}
              className="auth-btn register-btn"
            >
              Register
            </p>
          </div>
        </div>
      </header>
      <SignUp_Popup isOpen={isOpen} isCancel={() => setIsOpen(false)} loginOrRegi={loginOrRegi}/>
    </>
  );
};

export default Header;
