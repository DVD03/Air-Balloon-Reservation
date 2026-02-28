import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateUser() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/customer/${id}`);
        console.log(res.data);
        setInput(res.data.Users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    try {
      await axios.put(`http://localhost:5000/customer/${id}`, {
        name: input.name,
        email: input.email,
        password: input.password,
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(() => navigate('/userdetails'));
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a, #60a5fa)',
      padding: '20px',
      animation: 'fadeIn 1s ease-in'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px',
        transform: 'scale(1)',
        transition: 'transform 0.3s ease'
      }}>
        <h1 style={{
          color: '#1e40af',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.2em',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>Update User</h1>
        <form onSubmit={handleSubmit}>
          <div style={{
            marginBottom: '20px'
          }}>
            <label style={{
              color: '#1e40af',
              fontSize: '1.1em',
              fontWeight: '500',
              display: 'block',
              marginBottom: '8px'
            }}>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={input.name}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #60a5fa',
                borderRadius: '8px',
                fontSize: '1em',
                outline: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                background: '#eff6ff'
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 8px rgba(30, 64, 175, 0.3)'}
              onBlur={(e) => e.target.style.boxShadow = 'none'}
            />
          </div>
          <div style={{
            marginBottom: '20px'
          }}>
            <label style={{
              color: '#1e40af',
              fontSize: '1.1em',
              fontWeight: '500',
              display: 'block',
              marginBottom: '8px'
            }}>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={input.email}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #60a5fa',
                borderRadius: '8px',
                fontSize: '1em',
                outline: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                background: '#eff6ff'
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 8px rgba(30, 64, 175, 0.3)'}
              onBlur={(e) => e.target.style.boxShadow = 'none'}
            />
          </div>
          <div style={{
            marginBottom: '30px'
          }}>
            <label style={{
              color: '#1e40af',
              fontSize: '1.1em',
              fontWeight: '500',
              display: 'block',
              marginBottom: '8px'
            }}>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={input.password}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #60a5fa',
                borderRadius: '8px',
                fontSize: '1em',
                outline: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                background: '#eff6ff'
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 8px rgba(30, 64, 175, 0.3)'}
              onBlur={(e) => e.target.style.boxShadow = 'none'}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: '#1e40af',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1em',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s ease, transform 0.2s ease',
              boxShadow: '0 4px 15px rgba(30, 64, 175, 0.4)'
            }}
            onMouseOver={(e) => e.target.style.background = '#2563eb'}
            onMouseOut={(e) => e.target.style.background = '#1e40af'}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          >
            Submit
          </button>
        </form>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default UpdateUser;