import React, { useState } from "react";
import pwimage from "../../assets/images/time.jpg";
import { useEffect } from "react";

const TimetablePage = () => {
  const [pilotId, setPilotId] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");
  const [timetable, setTimetable] = useState([]);
  const [message, setMessage] = useState("");

  // Page styles with pilot.jpg as background
  const pageStyle = {
    minHeight: "100vh",
    background: `url(${pwimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  };

  // Container styles with blue theme
  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "25px",
    width: "500px",
    boxShadow: "0 10px 40px rgba(30, 60, 114, 0.6)",
    border: "3px solid #3a7bd5",
    zIndex: 10,
    position: "relative",
  };

  // Input styles with blue theme
  const inputStyle = {
    width: "100%",
    padding: "15px",
    margin: "15px 0",
    backgroundColor: "#f0f8ff",
    color: "#1e3c72",
    border: "2px solid #3a7bd5",
    borderRadius: "12px",
    fontSize: "16px",
    transition: "all 0.4s ease",
    boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
    outline: "none",
    boxSizing: "border-box",
  };

  const inputHoverFocusStyle = {
    borderColor: "#00ddeb",
    boxShadow: "0 0 12px rgba(0, 221, 235, 0.7)",
    transform: "scale(1.03) translateY(-2px)",
  };

  // Button styles with blue theme
  const buttonStyle = {
    width: "48%",
    padding: "15px",
    background: "linear-gradient(45deg, #3a7bd5, #00ddeb)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.5s ease",
    margin: "5px",
    boxShadow: "0 5px 20px rgba(58, 123, 213, 0.6)",
  };

  const buttonHoverStyle = {
    background: "linear-gradient(45deg, #00ddeb, #3a7bd5)",
    transform: "translateY(-3px) scale(1.05)",
    boxShadow: "0 8px 25px rgba(0, 221, 235, 0.8)",
  };

  const tableStyle = {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
    color: "#1e3c72", // Changed to dark blue for readability
  };

  const thStyle = {
    backgroundColor: "#3a7bd5",
    padding: "10px",
    borderRadius: "5px 5px 0 0",
    color: "#fff",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #3a7bd5",
    color: "#1e3c72",
  };

  const fetchTimetable = async () => {
    if (!pilotId) return;
    try {
      const response = await fetch(
        `http://localhost:5000/users/${pilotId}/timetable`
      );
      const data = await response.json();
      if (response.ok) {
        setTimetable(data);
        setMessage("");
      } else {
        setMessage(data.message || "Error fetching timetable");
      }
    } catch (err) {
      setMessage("Error fetching timetable");
    }
  };

  const handleAddEntry = async (e) => {
    e.preventDefault();
    console.log("Adding entry:", { date, task });
    try {
      const response = await fetch(
        `http://localhost:5000/users/${pilotId}/timetable`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date, task }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setMessage("Entry added successfully!");
        setDate("");
        setTask("");
        fetchTimetable();
      } else {
        setMessage(data.message || "Error adding entry");
      }
    } catch (err) {
      console.log(err);
      setMessage("Error adding entry");
    }
  };

  const handleDeleteEntry = async (entryId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users/${pilotId}/timetable/${entryId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (response.ok) {
        setMessage("Entry deleted successfully!");
        fetchTimetable();
      } else {
        setMessage(data.message || "Error deleting entry");
      }
    } catch (err) {
      setMessage("Error deleting entry");
    }
  };

  useEffect(() => {
    if (pilotId) {
      fetchTimetable();
    }
  }, [pilotId]);

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2
          style={{
            textAlign: "center",
            color: "#1e3c72",
            marginBottom: "30px",
            fontSize: "30px",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          Pilot Timetable
        </h2>
        <input
          style={inputStyle}
          type="text"
          placeholder="Pilot ID"
          value={pilotId}
          onChange={(e) => {
            setPilotId(e.target.value);
            fetchTimetable();
          }}
          onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
        />
        <form>
          <input
            style={inputStyle}
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
          <input
            style={inputStyle}
            type="text"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onFocus={(e) => Object.assign(e.target.style, inputHoverFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
          <button
            style={buttonStyle}
            onClick={handleAddEntry}
            type="submit"
            onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Add Entry
          </button>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={buttonStyle}
              type="button"
              onClick={fetchTimetable}
              onMouseOver={(e) =>
                Object.assign(e.target.style, buttonHoverStyle)
              }
              onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Refresh
            </button>
            <button
              style={buttonStyle}
              type="button"
              onMouseOver={(e) =>
                Object.assign(e.target.style, buttonHoverStyle)
              }
              onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
              onClick={() => {
                window.location.href = "/salary";
              }}
            >
              Salary
            </button>
            <button
              style={buttonStyle}
              type="button"
              onMouseOver={(e) =>
                Object.assign(e.target.style, buttonHoverStyle)
              }
              onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
              onClick={() => {
                window.location.href = "/pilot-details";
              }}
            >
              Details
            </button>
          </div>
        </form>
        {message && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: message.includes("Error")
                ? "rgba(255, 68, 68, 0.9)"
                : "rgba(68, 255, 68, 0.9)",
              color: "#fff",
              textAlign: "center",
            }}
          >
            {message}
          </div>
        )}
        {timetable.length > 0 && (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Task</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((entry) => (
                <tr key={entry._id}>
                  <td style={tdStyle}>
                    {new Date(entry.date).toLocaleString()}
                  </td>
                  <td style={tdStyle}>{entry.task}</td>
                  <td style={tdStyle}>
                    <button
                      style={{
                        ...buttonStyle,
                        background: "#F44336",
                        width: "auto",
                        padding: "10px 20px",
                      }}
                      onClick={() => handleDeleteEntry(entry._id)}
                      onMouseOver={(e) =>
                        (e.target.style.background = "#D32F2F")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.background = "#F44336")
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TimetablePage;
