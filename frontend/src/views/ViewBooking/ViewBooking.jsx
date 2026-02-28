import React from 'react';
import { Link } from 'react-router-dom';
import svVideo from '../../assets/videos/sv.mp4';
import svvVideo from '../../assets/videos/svv.mp4';
import svvvVideo from '../../assets/videos/svvv.mp4';

function ViewBooking() {
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
          background: 'rgba(255, 255, 255, 0.8)', // Fixed typo: `_RGBA` to `rgba`
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
        Supra Air Travels
      </h1>

      {/* Animated Subtitle */}
      <p
        style={{
          fontSize: '28px',
          color: '#E6F0FF',
          marginBottom: '70px',
          maxWidth: '700px',
          fontFamily: 'Arial, sans-serif',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          animation: 'fadeInUp 2s ease-out',
        }}
      >
        Soar Above the World in Style with Supra!
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/form" className="act form">
          <button
            style={{
              backgroundColor: '#1E90FF',
              color: 'white',
              padding: '18px 50px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
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
            Book Your Flight
          </button>
        </Link>

        <Link to="/search" className="act form-1">
          <button
            style={{
              backgroundColor: '#4682B4',
              color: 'white',
              padding: '18px 50px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              borderRadius: '35px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              fontFamily: 'Arial, sans-serif',
              animation: 'pulse 2s infinite',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.backgroundColor = '#5A9BD4';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = '#4682B4';
            }}
          >
            View Reservations
          </button>
        </Link>

        <Link to="/contact" className="act form-2">
          <button
            style={{
              backgroundColor: '#87CEEB',
              color: 'white',
              padding: '18px 50px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              borderRadius: '35px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              fontFamily: 'Arial, sans-serif',
              animation: 'pulse 2s infinite',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.backgroundColor = '#B0E0E6';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = '#87CEEB';
            }}
          >
            Contact Us
          </button>
        </Link>

        <Link to="/about" className="act form-3">
          <button
            style={{
              backgroundColor: '#00CED1',
              color: 'white',
              padding: '18px 50px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              borderRadius: '35px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              fontFamily: 'Arial, sans-serif',
              animation: 'pulse 2s infinite',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.backgroundColor = '#40E0D0';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = '#00CED1';
            }}
          >
            About Us
          </button>
        </Link>

        {/* Admin Login Button */}
        <Link to="/admin/login" className="act form-4">
          <button
            style={{
              backgroundColor: '#FF4500', // Distinct color for admin
              color: 'white',
              padding: '18px 50px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              borderRadius: '35px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              fontFamily: 'Arial, sans-serif',
              animation: 'pulse 2s infinite',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.backgroundColor = '#FF6347'; // Hover color
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = '#FF4500';
            }}
          >
            Admin Login
          </button>
        </Link>
      </div>

      {/* Our Journey Video Section */}
      <div
        style={{
          marginTop: '80px',
          textAlign: 'center',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
          animation: 'fadeInUp 2s ease-out',
        }}
      >
        <h2
          style={{
            fontSize: '40px',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
            marginBottom: '40px',
          }}
        >
          Our Journey
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <video
            width="300"
            height="200"
            controls
            style={{
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            <source src={svVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            width="300"
            height="200"
            controls
            style={{
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            <source src={svvVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            width="300"
            height="200"
            controls
            style={{
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            <source src={svvvVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

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

export default ViewBooking;