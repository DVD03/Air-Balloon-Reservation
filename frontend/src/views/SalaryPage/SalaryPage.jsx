import React, { useState } from 'react';
import pwimage from "../../assets/images/hotair.jpg";

const SalaryPage = () => {
  const [pilotId, setPilotId] = useState('');
  const [salaryData, setSalaryData] = useState(null);
  const [message, setMessage] = useState('');

  // Page styles with salary.jpg as background
  const pageStyle = {
    minHeight: '100vh',
    background: `url(${pwimage})`,
    backgroundSize: '100%',
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
    width: '500px',
    boxShadow: '0 10px 40px rgba(30, 60, 114, 0.6)',
    border: '3px solid #3a7bd5',
    zIndex: 10,
    position: 'relative'
  };

  // Input styles with blue theme
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

  const inputHoverFocusStyle = {
    borderColor: '#00ddeb',
    boxShadow: '0 0 12px rgba(0, 221, 235, 0.7)',
    transform: 'scale(1.03) translateY(-2px)'
  };

  // Button styles with blue theme
  const buttonStyle = {
    width: '100%',
    padding: '15px',
    background: 'linear-gradient(45deg, #3a7bd5, #00ddeb)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    boxShadow: '0 5px 20px rgba(58, 123, 213, 0.6)'
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(45deg, #00ddeb, #3a7bd5)',
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 8px 25px rgba(0, 221, 235, 0.8)'
  };

  const fetchSalary = async () => {
    if (!pilotId) return;
    try {
      const response = await fetch(`http://localhost:5000/users/${pilotId}/salary`);
      const data = await response.json();
      if (response.ok) {
        setSalaryData(data);
        setMessage('');
      } else {
        setMessage(data.message || 'Error fetching salary');
      }
    } catch (err) {
      setMessage('Error fetching salary');
    }
  };

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
          Pilot Salary
        </h2>
        <input
          style={inputStyle}
          type="text"
          placeholder="Pilot Email"
          value={pilotId}
          onChange={(e) => setPilotId(e.target.value)}
          onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
        />
        <button 
          style={buttonStyle} 
          onClick={fetchSalary}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          Calculate Salary
        </button>
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
        {salaryData && (
          <div style={{ marginTop: '20px', color: '#1e3c72', textAlign: 'center' }}>
            <p><strong>Pilot ID:</strong> {salaryData.pid}</p>
            <p><strong>Name:</strong> {salaryData.pname}</p>
            <p><strong>Category:</strong> {salaryData.category}</p>
            <p><strong>Experience:</strong> {salaryData.experienceYears} years</p>
            <p><strong>Flight Hours:</strong> {salaryData.flightHours}</p>
            <p><strong>Hourly Rate:</strong> ${salaryData.hourlyRate}</p>
            <p><strong>Base Salary:</strong> ${salaryData.baseSalary}</p>
            <p><strong>Bonus:</strong> ${salaryData.bonus}</p>
            <p><strong>Total Salary:</strong> ${salaryData.totalSalary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryPage;