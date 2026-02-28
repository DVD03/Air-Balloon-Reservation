// Components/admin/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded admin credentials (for simplicity; use a backend in production)
    if (username === 'admin1' && password === 'supra') {
      localStorage.setItem('adminLoggedIn', 'true'); // Simple auth flag
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  // Background animation variants
  const backgroundVariants = {
    animate: {
      background: [
        'linear-gradient(135deg, #1E90FF 0%, #00BFFF 50%, #87CEEB 100%)',
        'linear-gradient(135deg, #00BFFF 0%, #87CEEB 50%, #1E90FF 100%)',
        'linear-gradient(135deg, #87CEEB 0%, #1E90FF 50%, #00BFFF 100%)',
        'linear-gradient(135deg, #1E90FF 0%, #00BFFF 50%, #87CEEB 100%)',
      ],
      transition: {
        duration: 10, // Duration of one full cycle
        ease: 'easeInOut',
        repeat: Infinity, // Loops indefinitely
      },
    },
  };

  return (
    <motion.div
      variants={backgroundVariants}
      animate="animate"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1E90FF 0%, #00BFFF 50%, #87CEEB 100%)', // Initial background
        backgroundAttachment: 'fixed', // Keeps background steady
        overflow: 'auto', // Ensures scrollability
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '28px',
            color: '#1E90FF',
            marginBottom: '30px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Added shadow for depth
          }}
        >
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '16px', color: '#34495e' }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                marginTop: '5px',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '16px', color: '#34495e' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                marginTop: '5px',
              }}
              required
            />
          </div>
          {error && (
            <p
              style={{
                color: '#e74c3c',
                textAlign: 'center',
                marginBottom: '20px',
                fontSize: '14px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)', // Subtle shadow
              }}
            >
              {error}
            </p>
          )}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(135deg, #3498db, #1E90FF)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              fontSize: '18px',
              cursor: 'pointer',
              boxShadow: '0 6px 15px rgba(52, 152, 219, 0.4)',
            }}
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default AdminLogin;