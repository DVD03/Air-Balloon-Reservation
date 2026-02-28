import React, { useState, useEffect } from 'react';
import pbimage from ".././../assets/images/fire.jpg";

const CreatePage = () => {
  const [pilotId, setPilotId] = useState('');
  const [pilotName, setPilotName] = useState('');
  const [password, setPassword] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
  const [flightHours, setFlightHours] = useState('');
  const [category, setCategory] = useState('Junior Pilot');
  const [message, setMessage] = useState('');

  // Dynamic category update based on experienceYears
  useEffect(() => {
    const expYears = parseInt(experienceYears);
    if (!isNaN(expYears)) {
      setCategory(expYears > 10 ? 'Senior Pilot' : 'Junior Pilot');
    }
  }, [experienceYears]);

  // Page styles with only pbimage as background (no gradient or color)
  const pageStyle = {
    minHeight: '100vh',
    background: `url(${pbimage})`,
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

  // Container styles
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

  // Select styles
  const selectStyle = {
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
    cursor: 'pointer'
  };

  // Button styles with blue theme
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

  const buttonHoverStyle = {
    background: 'linear-gradient(45deg, #00ddeb, #3a7bd5)',
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 8px 25px rgba(0, 221, 235, 0.8)'
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pid: pilotId,
          pname: pilotName,
          password,
          experienceYears: parseInt(experienceYears) || 0,
          flightHours: parseInt(flightHours) || 0,
          category
        })
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Pilot created successfully! Category: ${data.category}`);
        setPilotId('');
        setPilotName('');
        setPassword('');
        setExperienceYears('');
        setFlightHours('');
        setCategory('Junior Pilot');
      } else {
        setMessage(data.message || 'Error creating pilot');
      }
    } catch (err) {
      setMessage('Error creating pilot');
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
          Reserve a Balloon Pilot
        </h2>
        <form onSubmit={handleSubmit}>
          <input 
            style={inputStyle} 
            type="text" 
            placeholder="Pilot ID" 
            value={pilotId} 
            onChange={(e) => setPilotId(e.target.value)} 
            onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
          <input 
            style={inputStyle} 
            type="text" 
            placeholder="Pilot Name" 
            value={pilotName} 
            onChange={(e) => setPilotName(e.target.value)} 
            onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
          <input 
            style={inputStyle} 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
          <input 
            style={inputStyle} 
            type="number" 
            placeholder="Experience Years" 
            value={experienceYears} 
            onChange={(e) => setExperienceYears(e.target.value)} 
            onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
          <input 
            style={inputStyle} 
            type="number" 
            placeholder="Flight Hours" 
            value={flightHours} 
            onChange={(e) => setFlightHours(e.target.value)} 
            onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
          <select 
            style={selectStyle} 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, selectStyle)}
          >
            <option value="Senior Pilot">Senior Pilot</option>
            <option value="Junior Pilot">Junior Pilot</option>
          </select>
          <button 
            style={buttonStyle} 
            type="submit"
            onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Create Pilot
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

export default CreatePage;