// Components/admin/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bookings');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (nic) => {
    if (window.confirm('Are you sure you want to delete this reservation?')) {
      try {
        await axios.delete(`http://localhost:5000/bookings/${nic}`);
        setUsers(users.filter((user) => user.nic !== nic));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  // Background animation variants
  const backgroundVariants = {
    animate: {
      background: [
        'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6b7280 100%)',
        'linear-gradient(135deg, #2a5298 0%, #6b7280 50%, #1e3c72 100%)',
        'linear-gradient(135deg, #6b7280 0%, #1e3c72 50%, #2a5298 100%)',
        'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6b7280 100%)',
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
        padding: '40px',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6b7280 100%)', // Initial background
        minHeight: '100vh',
        backgroundAttachment: 'fixed', // Keeps background steady during scroll
        overflow: 'auto', // Ensures content is scrollable
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#ffffff',
          fontSize: '32px',
          marginBottom: '40px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Depth for readability
        }}
      >
        Admin Dashboard - Manage Reservations
      </h1>
      <motion.button
        onClick={() => navigate('/')}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05, background: '#e74c3c' }} // Red on hover
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          background: '#1E90FF',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto', // Centered button
        }}
      >
        Logout
      </motion.button>
      {users.length === 0 ? (
        <p
          style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#ffffff',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          No reservations found.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          }}
        >
          {users.map((user) => (
            <motion.div
              key={user.nic}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3>{user.name}</h3>
              <p>NIC: {user.nic}</p>
              <p>Date: {new Date(user.date).toLocaleDateString()}</p>
              <p>Start: {user.start}</p>
              <p>End: {user.end}</p>
              <p>Passengers: {user.passengerNo}</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  onClick={() => navigate(`/read/${user.nic}`)}
                  style={{
                    padding: '8px 16px',
                    background: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.nic)}
                  style={{
                    padding: '8px 16px',
                    background: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default AdminDashboard;