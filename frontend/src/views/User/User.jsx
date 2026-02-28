import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function User(props) {
    const { _id, name, email } = props.user || {};
    const navigate = useNavigate();

    const deleteHandler = async () => {
        await axios.delete(`http://localhost:5000/customer/${_id}`)
            .then(res => res.data)
            .then(() => navigate("/"))
            .then(() => navigate("/userdetails"));
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px'
        }}>
            <Link to={`/userdetails/${_id}`} style={{ textDecoration: 'none' }}>
                <button style={{
                    background: '#60a5fa',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '1em',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                }}
                onMouseOver={(e) => {
                    e.target.style.background = '#2563eb';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                    e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                    e.target.style.background = '#60a5fa';
                    e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                    e.target.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.target.style.transform = 'scale(1.05)'}
                >
                    Update
                </button>
            </Link>
            <button
                onClick={deleteHandler}
                style={{
                    background: '#ef4444',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '1em',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                }}
                onMouseOver={(e) => {
                    e.target.style.background = '#dc2626';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                    e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                    e.target.style.background = '#ef4444';
                    e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                    e.target.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.target.style.transform = 'scale(1.05)'}
            >
                Delete
            </button>
        </div>
    );
}

export default User;