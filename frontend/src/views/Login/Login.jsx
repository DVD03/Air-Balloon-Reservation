import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // Input field data update
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    // Form submit event
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await sendRequest(user); // User data sent to API
            if (response) {
                alert("Login Successful!");
                navigate("/userdetails");
            }
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    // API request for login
    const sendRequest = async (user) => {
        try {
            const res = await axios.post("http://localhost:5000/customer/login", {
                email: user.email,
                password: user.password,
            });
            return res.data;
        } catch (error) {
            console.error("Error logging in:", error.message);
            throw error;
        }
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
                }}>User Login</h1>
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
                        }}>Email</label>
                        <input
                            type="email"
                            value={user.email}
                            onChange={handleInputChange}
                            name="email"
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
                        }}>Password</label>
                        <input
                            type="password"
                            value={user.password}
                            onChange={handleInputChange}
                            name="password"
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
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px',
                        fontSize: '0.9em'
                    }}>
                        <label style={{
                            color: '#1e40af',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <input
                                type="checkbox"
                                style={{
                                    accentColor: '#1e40af',
                                    cursor: 'pointer'
                                }}
                            />
                            Remember Me
                        </label>
                        <a
                            href="/forgotpassword"
                            style={{
                                color: '#1e40af',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.color = '#2563eb'}
                            onMouseOut={(e) => e.target.style.color = '#1e40af'}
                        >
                            Forgot Password?
                        </a>
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
                        Login
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

export default Login;