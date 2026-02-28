import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    nic: "",
    country: "",
    address: "",
    gmail: "",
    phoneNumber: "",
    durationTime: "",
    date: "",
    start: "",
    end: "",
    passengerNumber: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["name", "nic", "gmail", "phoneNumber", "date"];
    const missing = requiredFields.filter((field) => !formData[field]);
    if (missing.length) {
      alert(`Please fill in: ${missing.join(", ")}`);
      return;
    }

    console.log("Submitting data:", formData); // Debug log

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Backend response:", response.status, responseData); // Debug response

      if (response.ok) {
        // 200-299 status codes
        alert("Reservation submitted successfully!");
        setSubmittedData({ ...formData });
        console.log("Data stored in submittedData:", { ...formData });
        setIsSubmitted(true); // Enable the Download PDF button
        console.log("isSubmitted set to true"); // Confirm state change
        setFormData({
          name: "",
          nic: "",
          country: "",
          address: "",
          gmail: "",
          phoneNumber: "",
          durationTime: "",
          date: "",
          start: "",
          end: "",
          passengerNumber: "",
        });
        navigate("/payment");
      } else {
        throw new Error(
          `Submission failed: ${responseData.message || response.statusText}`
        );
      }
    } catch (error) {
      console.error("Network error:", error.message);
      alert(
        `Failed to submit reservation: ${error.message}. Check the console and ensure the backend is running.`
      );
    }
  };

  const downloadPDF = () => {
    console.log("Attempting to download PDF with data:", submittedData);
    if (!submittedData) {
      alert("No data available to download. Please submit the form first.");
      return;
    }
    try {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.text("Air Balloon Adventure Reservation", 20, 20);
      doc.setFontSize(12);
      doc.text(`Full Name: ${submittedData.name || "N/A"}`, 20, 40);
      doc.text(`NIC: ${submittedData.nic || "N/A"}`, 20, 50);
      doc.text(`Country: ${submittedData.country || "N/A"}`, 20, 60);
      doc.text(`Address: ${submittedData.address || "N/A"}`, 20, 70);
      doc.text(`Email: ${submittedData.gmail || "N/A"}`, 20, 80);
      doc.text(`Phone Number: ${submittedData.phoneNumber || "N/A"}`, 20, 90);
      doc.text(
        `Duration Time: ${submittedData.durationTime || "N/A"}`,
        20,
        100
      );
      doc.text(
        `Date: ${
          submittedData.date
            ? new Date(submittedData.date).toLocaleDateString()
            : "N/A"
        }`,
        20,
        110
      );
      doc.text(`Start Location: ${submittedData.start || "N/A"}`, 20, 120);
      doc.text(`End Location: ${submittedData.end || "N/A"}`, 20, 130);
      doc.text(
        `Number of Passengers: ${submittedData.passengerNumber || "N/A"}`,
        20,
        140
      );
      doc.save("reservation-details.pdf");
      console.log("PDF generated and saved successfully");
    } catch (error) {
      console.error("PDF generation error:", error);
      alert("Failed to generate PDF. Check the console for details.");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1E90FF 0%, #00BFFF 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "150px",
          height: "70px",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          animation: "floatCloud 6s ease-in-out infinite",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "80px",
          height: "120px",
          background: "radial-gradient(circle, #4682B4 50%, #87CEEB 100%)",
          borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
          animation: "floatBalloon 5s ease-in-out infinite",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        }}
      />
      <div
        style={{
          width: "100%",
          maxWidth: "750px",
          margin: "40px auto",
          padding: "50px",
          backgroundColor: "rgba(255, 255, 255, 0.97)",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
          position: "relative",
          zIndex: 10,
          animation: "zoomIn 1s ease-out",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "36px",
            color: "#1E90FF",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)",
            fontFamily: "Arial, sans-serif",
            animation: "bounceIn 1.2s ease-out",
          }}
        >
          Book Your Air Balloon Adventure
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "25px" }}
        >
          {[
            {
              label: "Full Name",
              name: "name",
              type: "text",
              placeholder: "Enter your full name",
            },
            {
              label: "NIC",
              name: "nic",
              type: "text",
              placeholder: "Enter your NIC",
            },
            {
              label: "Country",
              name: "country",
              type: "text",
              placeholder: "Enter your country",
            },
            {
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter your address",
            },
            {
              label: "Email",
              name: "gmail",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              label: "Phone Number",
              name: "phoneNumber",
              type: "tel",
              placeholder: "Enter your phone number",
            },
            {
              label: "Duration Time",
              name: "durationTime",
              type: "text",
              placeholder: "e.g., 2 hours",
            },
            { label: "Date", name: "date", type: "date", placeholder: "" },
            {
              label: "Start Location",
              name: "start",
              type: "text",
              placeholder: "Enter start point",
            },
            {
              label: "End Location",
              name: "end",
              type: "text",
              placeholder: "Enter end point",
            },
            {
              label: "Number of Passengers",
              name: "passengerNumber",
              type: "number",
              placeholder: "Enter number",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} style={{ position: "relative" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#333",
                  fontFamily: "Arial, sans-serif",
                  animation: "fadeIn 0.5s ease-out",
                }}
              >
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "2px solid #1E90FF",
                  backgroundColor: "#F0F8FF",
                  fontSize: "16px",
                  color: "#333",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#00BFFF";
                  e.target.style.boxShadow = "0 0 10px rgba(0, 191, 255, 0.6)";
                  e.target.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#1E90FF";
                  e.target.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
          <div
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#1E90FF",
                color: "white",
                padding: "16px 40px",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                borderRadius: "12px",
                marginTop: "30px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
                fontFamily: "Arial, sans-serif",
                animation: "pulse 2s infinite",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.backgroundColor = "#00BFFF";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.backgroundColor = "#1E90FF";
              }}
            >
              Submit Reservation
            </button>
          </div>
        </form>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "60px",
          height: "90px",
          background: "radial-gradient(circle, #00BFFF 50%, #87CEEB 100%)",
          borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
          animation: "floatBalloon 4s ease-in-out infinite",
          boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  );
}

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes floatCloud {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }
  @keyframes floatBalloon {
    0% { transform: translateY(0) rotate(2deg); }
    50% { transform: translateY(-30px) rotate(-2deg); }
    100% { transform: translateY(0) rotate(2deg); }
  }
  @keyframes zoomIn {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes bounceIn {
    0% { transform: scale(0.7); opacity: 0; }
    60% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); }
  }
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(styleSheet);
