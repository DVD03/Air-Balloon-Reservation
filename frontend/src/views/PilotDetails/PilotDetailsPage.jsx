import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting to Update page
import pwimage from "../../assets/images/salary.jpg";

const PilotDetailsPage = () => {
  const [pilots, setPilots] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Page styles with salary.jpg as background
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

  // Container styles with blue theme
  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '40px',
    borderRadius: '25px',
    width: '80%', // Wider for table
    maxWidth: '1000px',
    boxShadow: '0 10px 40px rgba(30, 60, 114, 0.6)',
    border: '3px solid #3a7bd5',
    zIndex: 10,
    position: 'relative'
  };

  // Table styles with blue theme
  const tableStyle = {
    width: '100%',
    marginTop: '20px',
    borderCollapse: 'collapse',
    color: '#1e3c72'
  };

  const thStyle = {
    backgroundColor: '#3a7bd5',
    padding: '12px',
    borderRadius: '5px 5px 0 0',
    color: '#fff',
    fontWeight: 'bold'
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid #3a7bd5',
    color: '#1e3c72',
    textAlign: 'center'
  };

  // Button styles with blue theme
  const buttonStyle = {
    padding: '8px 16px',
    background: 'linear-gradient(45deg, #3a7bd5, #00ddeb)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 5px',
    boxShadow: '0 3px 10px rgba(58, 123, 213, 0.6)'
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(45deg, #00ddeb, #3a7bd5)',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 221, 235, 0.8)'
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    background: '#F44336'
  };

  const deleteButtonHoverStyle = {
    ...buttonHoverStyle,
    background: '#D32F2F'
  };

  // Fetch all pilots
  const fetchPilots = async () => {
    try {
      const response = await fetch('http://localhost:5000/users');
      const data = await response.json();
      if (response.ok) {
        setPilots(data);
        setMessage('');
      } else {
        setMessage(data.message || 'Error fetching pilots');
      }
    } catch (err) {
      setMessage('Error fetching pilots');
    }
  };

  // Delete a pilot
  const handleDelete = async (pilotId) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${pilotId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Pilot deleted successfully!');
        fetchPilots(); // Refresh table
      } else {
        setMessage(data.message || 'Error deleting pilot');
      }
    } catch (err) {
      setMessage('Error deleting pilot');
    }
  };

  // Handle update button click
  const handleUpdate = (pilotId) => {
    navigate(`/update/${pilotId}`); // Redirect to update page
  };

  // Fetch pilots on component mount
  useEffect(() => {
    fetchPilots();
  }, []);

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#1e3c72', 
          marginBottom: '30px', 
          fontSize: '30px', 
          fontWeight: 'bold',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
        }}>
          Pilot Details
        </h2>
        {message && (
          <div style={{
            marginTop: '20px',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: message.includes('Error') ? 'rgba(255, 68, 68, 0.9)' : 'rgba(68, 255, 68, 0.9)',
            color: '#fff',
            textAlign: 'center'
          }}>
            {message}
          </div>
        )}
        {pilots.length > 0 ? (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Pilot ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Experience (Years)</th>
                <th style={thStyle}>Flight Hours</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {pilots.map((pilot) => (
                <tr key={pilot.pid}>
                  <td style={tdStyle}>{pilot.pid}</td>
                  <td style={tdStyle}>{pilot.pname}</td>
                  <td style={tdStyle}>{pilot.category}</td>
                  <td style={tdStyle}>{pilot.experienceYears}</td>
                  <td style={tdStyle}>{pilot.flightHours}</td>
                  <td style={tdStyle}>
                    <button
                      style={buttonStyle}
                      onClick={() => handleUpdate(pilot.pid)}
                      onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                      onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                    >
                      Update
                    </button>
                    <button
                      style={deleteButtonStyle}
                      onClick={() => handleDelete(pilot.pid)}
                      onMouseOver={(e) => Object.assign(e.target.style, deleteButtonHoverStyle)}
                      onMouseOut={(e) => Object.assign(e.target.style, deleteButtonStyle)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: 'center', color: '#1e3c72' }}>No pilots found.</p>
        )}
      </div>
    </div>
  );
};

export default PilotDetailsPage;