import React from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We’ll get back to you soon.');
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1E90FF 0%, #00BFFF 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Floating Cloud Effect (Left) */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '120px',
          height: '60px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          animation: 'floatCloud 8s ease-in-out infinite',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        }}
      />

      {/* Floating Airplane Effect (Right) */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '10%',
          width: '100px',
          height: '40px',
          background: 'linear-gradient(90deg, #4682B4, #87CEEB)',
          clipPath: 'polygon(0% 50%, 20% 0%, 100% 0%, 80% 100%, 20% 100%)',
          animation: 'flyAirplane 10s linear infinite',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
        }}
      />

      {/* Animated Title */}
      <h1
        style={{
          fontSize: '60px',
          color: '#ffffff',
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
          marginBottom: '40px',
          fontFamily: 'Arial, sans-serif',
          animation: 'bounceIn 1.5s ease-out',
        }}
      >
        Contact Us
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '28px',
          color: '#E6F0FF',
          marginBottom: '50px',
          maxWidth: '700px',
          fontFamily: 'Arial, sans-serif',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          animation: 'fadeInUp 2s ease-out',
        }}
      >
        Have questions? Reach out to Supra Air Travels!
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
          width: '100%',
          maxWidth: '500px',
          animation: 'fadeInUp 2s ease-out',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '18px',
              borderRadius: '10px',
              border: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              fontFamily: 'Arial, sans-serif',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '18px',
              borderRadius: '10px',
              border: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              fontFamily: 'Arial, sans-serif',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <textarea
            placeholder="Your Message"
            required
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '18px',
              borderRadius: '10px',
              border: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              fontFamily: 'Arial, sans-serif',
              minHeight: '100px',
              resize: 'vertical',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#1E90FF',
            color: 'white',
            padding: '15px 40px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            borderRadius: '35px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            animation: 'pulse 2s infinite',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.backgroundColor = '#00BFFF';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.backgroundColor = '#1E90FF';
          }}
        >
          Send Message
        </button>
      </form>

      {/* Back to Home Link */}
      <Link
        to="/"
        style={{
          marginTop: '40px',
          color: '#E6F0FF',
          fontSize: '20px',
          textDecoration: 'none',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
        onMouseLeave={(e) => (e.target.style.color = '#E6F0FF')}
      >
        Back to Home
      </Link>

      {/* Floating Cloud Effect (Bottom Right) */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '150px',
          height: '70px',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '50%',
          animation: 'floatCloud 7s ease-in-out infinite',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
}

// Add keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
  @keyframes floatCloud {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }
  @keyframes flyAirplane {
    0% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(-300px) translateY(-20px); }
    100% { transform: translateX(-100vw) translateY(20px); }
  }
  @keyframes bounceIn {
    0% { transform: scale(0.7); opacity: 0; }
    60% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); }
  }
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(styleSheet);

export default ContactUs;