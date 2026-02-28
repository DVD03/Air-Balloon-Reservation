import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ubcVideo from '../../assets/videos/bc.mp4'; // Import your video file

function UpdateBooking() {
  const [inputs, setInputs] = useState({
    name: '',
    nic: '',
    country: '',
    address: '',
    gmail: '',
    phoneNumber: '',
    durationTime: '',
    date: '',
    start: '',
    end: '',
    passengerNumber: '',
  });

  const navigate = useNavigate();
  const { nic } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bookings/${nic}`);
        setInputs(response.data.user || response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchHandler();
  }, [nic]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/bookings/${nic}`, inputs);
      alert('Update successful!');
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.1), rgba(0, 191, 255, 0.1))',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(0.8) contrast(1.2)',
        }}
      >
        <source src={ubcVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '700px',
          margin: '40px auto',
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(220, 240, 255, 0.9))',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 10,
        }}
        whileHover={{ boxShadow: '0 15px 50px rgba(30, 144, 255, 0.4)' }}
      >
        {/* Glowing Border Effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(30, 144, 255, 0.3), transparent)',
            zIndex: -1,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        <h1
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '32px',
            fontWeight: '800',
            color: '#1E90FF',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
            background: 'linear-gradient(to right, #1E90FF, #00BFFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ✈️ Update Your Journey
        </h1>

        <form onSubmit={sendRequest}>
          <div
            style={{
              display: 'grid',
              gap: '20px',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '15px',
              boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            {[
              { label: 'Full Name', name: 'name', type: 'text' },
              { label: 'NIC', name: 'nic', type: 'text', disabled: true },
              { label: 'Country', name: 'country', type: 'text' },
              { label: 'Address', name: 'address', type: 'text' },
              { label: 'Gmail', name: 'gmail', type: 'email' },
              { label: 'Phone Number', name: 'phoneNumber', type: 'tel' },
              { label: 'Duration Time', name: 'durationTime', type: 'text' },
              { label: 'Date', name: 'date', type: 'date' },
              { label: 'Start', name: 'start', type: 'text' },
              { label: 'End', name: 'end', type: 'text' },
              { label: 'Passengers', name: 'passengerNumber', type: 'number' },
            ].map(({ label, name, type, disabled }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: name === 'name' ? 0 : 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                <label
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#34495e',
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {label}:
                </label>
                <motion.input
                  type={type}
                  name={name}
                  value={inputs[name] || ''}
                  onChange={handleChange}
                  disabled={disabled}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '10px',
                    border: 'none',
                    background: disabled
                      ? 'rgba(200, 200, 200, 0.8)'
                      : 'rgba(255, 255, 255, 0.9)',
                    fontSize: '16px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    color: '#34495e',
                  }}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: '0 0 15px rgba(30, 144, 255, 0.6)',
                  }}
                  whileHover={!disabled ? { boxShadow: '0 6px 20px rgba(30, 144, 255, 0.4)' } : {}}
                />
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 30px',
                background: 'linear-gradient(135deg, #3498db, #1E90FF)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold',
                boxShadow: '0 6px 20px rgba(52, 152, 219, 0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.6)')
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.4)')
              }
            >
              Update
            </motion.button>
            <motion.button
              type="button"
              onClick={handleCancel}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 30px',
                background: 'linear-gradient(135deg, #95a5a6, #bdc3c7)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold',
                boxShadow: '0 6px 20px rgba(149, 165, 166, 0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow = '0 8px 25px rgba(149, 165, 166, 0.6)')
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow = '0 6px 20px rgba(149, 165, 166, 0.4)')
              }
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default UpdateBooking;