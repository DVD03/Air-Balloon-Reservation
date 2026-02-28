import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import "./style.css";
import ImprovedHomepage from "./FeaturesSection.jsx";
import video from "../../../public/video/vidio2.mp4";

const HomePage = () => {
  useEffect(() => {
    // Initialize scroll animations
    const sections = document.querySelectorAll(".animate-section");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-page">
      

      <main className="home-content">
        {/* Hero Section with Fullscreen Image */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Experience the Magic of Flight</h1>
            <p className="hero-subtitle">
              Breathtaking views, unforgettable moments, and the peaceful
              serenity of floating above the world
            </p>
            <Link to="/booking" className="cta-button">
              Book Your Adventure
            </Link>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="welcome-section animate-section">
          <div className="container">
            <div className="welcome-content">
              <h2>Welcome to SkyHigh Balloon Adventures</h2>
              <div className="divider"></div>
              <p>
                Join us on a journey through the skies and discover the world
                from a whole new perspective. Our balloon flights offer a unique
                combination of adventure, tranquility, and breathtaking
                panoramic views.
              </p>
              <p>
                Whether you're celebrating a special occasion, looking for a
                unique gift, or simply want to experience the wonder of hot air
                ballooning, we have the perfect flight for you.
              </p>
            </div>
          </div>
        </section>

        {/* Image Showcase Section */}
        <section className="image-showcase animate-section">
          <div className="showcase-item">
            <div className="showcase-image image-placeholder"></div>
            <div className="showcase-caption">
              <h3>Nature’s Canvas</h3>
              <p>Drift over rolling hills and endless horizons</p>
            </div>
          </div>
          <div className="showcase-item">
            <div className="showcase-image image-placeholder2"></div>
            <div className="showcase-caption">
              <h3>Sunset Splendor</h3>
              <p>Witness dawn and dusk's vibrant glow from above the clouds</p>
            </div>
          </div>
          <div className="showcase-item">
            <div className="showcase-image image-placeholder3"></div>
            <div className="showcase-caption">
              <h3>Special Occasions</h3>
              <p>
                Celebrate your milestone moments with an unforgettable
                experience
              </p>
            </div>
          </div>
        </section>

        {/* Video Section Placeholder */}
        <section className="video-section animate-section">
          <div className="container">
            <h2>Experience the Journey</h2>
            <div className="divider"></div>
            <div className="video-container">
              <video className="video-placeholder" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <ImprovedHomepage />

        {/* Full-width Image Section */}
        <section className="fullwidth-image animate-section">
          {/* You'll add actual image later */}
          <div className="parallax-image"></div>
          <div className="image-overlay">
            <div className="overlay-content">
              <h2>Adventure Awaits Above</h2>
              <Link to="/booking" className="cta-button light">
                Start Your Journey
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default HomePage;
