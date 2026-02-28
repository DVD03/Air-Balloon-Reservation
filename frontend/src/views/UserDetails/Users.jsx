import React, { useEffect, useState } from 'react';
import axios from "axios";
import User from '../User/User';

const URL = "http://localhost:5000/customer";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function UsersDetails() {
    const [users, setUsers] = useState([]);
    const [searchEmail, setSearchEmail] = useState('');
    const [matchedUser, setMatchedUser] = useState(null);

    useEffect(() => {
        fetchHandler().then((data) => {
            setUsers(data.Users || []);
        });
    }, []);

    console.log(users);

    const handleSearch = (e) => {
        const email = e.target.value.toLowerCase().trim();
        setSearchEmail(email);
        if (email === '') {
            setMatchedUser(null);
        } else {
            const matched = users.find(user => 
                user.email.toLowerCase() === email
            );
            setMatchedUser(matched || null);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #1e3a8a, #60a5fa)',
            padding: '60px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'fadeIn 1.2s ease-in-out',
            overflowX: 'hidden'
        }}>
            <h1 style={{
                color: '#fff',
                textAlign: 'center',
                marginBottom: '30px',
                fontSize: '3em',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
                animation: 'slideInTitle 1s ease-out'
            }}>Search User Details</h1>
            <div style={{
                width: '100%',
                maxWidth: '600px',
                marginBottom: '40px',
                display: 'flex',
                justifyContent: 'center',
                animation: 'slideInSearch 1s ease-out'
            }}>
                <input
                    type="email"
                    placeholder="Enter your Gmail address..."
                    value={searchEmail}
                    onChange={handleSearch}
                    style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #60a5fa',
                        borderRadius: '10px',
                        fontSize: '1.1em',
                        outline: 'none',
                        background: '#eff6ff',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        animation: 'inputPulse 2s infinite'
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = '#2563eb';
                        e.target.style.boxShadow = '0 0 12px rgba(37, 99, 235, 0.5)';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = '#60a5fa';
                        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    }}
                />
            </div>
            {searchEmail && !matchedUser ? (
                <div style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    borderRadius: '15px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                    padding: '25px',
                    textAlign: 'center',
                    color: '#1e40af',
                    fontSize: '1.2em',
                    width: '100%',
                    maxWidth: '400px',
                    animation: 'fadeIn 0.5s ease-in'
                }}>
                    No user found for "{searchEmail}"
                </div>
            ) : matchedUser ? (
                <div style={{
                    width: '100%',
                    maxWidth: '600px',
                    padding: '20px'
                }}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.98)',
                        borderRadius: '15px',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                        padding: '25px',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        animation: 'cardFadeIn 0.5s ease-in',
                        transform: 'scale(1)',
                        border: '1px solid #60a5fa'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05) rotate(1deg)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                    }}
                    >
                        <h2 style={{
                            color: '#1e40af',
                            fontSize: '1.8em',
                            marginBottom: '15px',
                            fontWeight: '600',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            animation: 'textPulse 2s infinite'
                        }}>{matchedUser.name}</h2>
                        <div style={{
                            color: '#1e40af',
                            fontSize: '1.1em',
                            marginBottom: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <strong style={{ minWidth: '60px' }}>ID:</strong> 
                            <span style={{ wordBreak: 'break-all' }}>{matchedUser._id}</span>
                        </div>
                        <div style={{
                            color: '#1e40af',
                            fontSize: '1.1em',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <strong style={{ minWidth: '60px' }}>Email:</strong> 
                            <span>{matchedUser.email}</span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '15px'
                        }}>
                            <User user={matchedUser} />
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    borderRadius: '15px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                    padding: '25px',
                    textAlign: 'center',
                    color: '#1e40af',
                    fontSize: '1.2em',
                    width: '100%',
                    maxWidth: '400px',
                    animation: 'fadeIn 0.5s ease-in'
                }}>
                    Enter an email to search for user details
                </div>
            )}
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slideInTitle {
                        from { opacity: 0; transform: translateY(-50px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slideInSearch {
                        from { opacity: 0; transform: translateY(-20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes cardFadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes inputPulse {
                        0% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
                        50% { box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3); }
                        100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
                    }
                    @keyframes textPulse {
                        0% { color: #1e40af; }
                        50% { color: #2563eb; }
                        100% { color: #1e40af; }
                    }
                `}
            </style>
        </div>
    );
}

export default UsersDetails;