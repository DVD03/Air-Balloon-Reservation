import React, { useState, useEffect } from 'react';
import pwimage from "../../assets/images/fire.jpg";
import { useParams } from 'react-router-dom';

const UpdatePage = () => {
  const { pilotId } = useParams(); // Extract pilotId from URL parameters

  const [pilotName, setPilotName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Page styles with dark.jpg as background
  const pageStyle = {
    minHeight: '100vh',
    background: `url(${pwimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '40px',
    borderRadius: '25px',
    width: '480px',
    boxShadow: '0 10px 40px rgba(30, 60, 114, 0.6)',
    border: '3px solid #3a7bd5',
    zIndex: 10,
    position: 'relative'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    margin: '15px 0',
    backgroundColor: '#f0f8ff',
    color: '#1e3c72',
    border: '2px solid #3a7bd5',
    borderRadius: '12px',
    fontSize: '16px',
    transition: 'all 0.4s ease',
    boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.1)',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(45deg, #3a7bd5, #00ddeb)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    boxShadow: '0 5px 20px rgba(58, 123, 213, 0.6)',
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden'
  };

  useEffect(() => {
    if (pilotId) {
      console.log(`Fetching data for pilotId: ${pilotId}`);
      // Example: fetchPilotDetails(pilotId);
    }
  }, [pilotId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users/${pilotId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pname: pilotName, password })
      });
      await response.json();
      setMessage('Pilot updated successfully!');
    } catch (err) {
      setMessage('Error updating pilot');
    }
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#1e3c72', 
          marginBottom: '35px', 
          fontSize: '30px', 
          fontWeight: 'bold',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
        }}>
          Update Pilot
        </h2>
        <form onSubmit={handleUpdate}>
          <input 
            style={inputStyle} 
            type="text" 
            placeholder="Pilot ID" 
            value={pilotId} 
            readOnly
          />
          <input 
            style={inputStyle} 
            type="text" 
            placeholder="New Pilot Name" 
            value={pilotName} 
            onChange={(e) => setPilotName(e.target.value)}
          />
          <input 
            style={inputStyle} 
            type="password" 
            placeholder="New Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={buttonStyle} type="submit">
            Update Pilot
          </button>
        </form>
        {message && (
          <div style={{
            marginTop: '25px',
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: message.includes('Error') ? 'rgba(255, 68, 68, 0.9)' : 'rgba(68, 255, 68, 0.9)',
            color: '#fff',
            textAlign: 'center',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdatePage;
