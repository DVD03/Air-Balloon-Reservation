import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const sessionId = new URLSearchParams(window.location.search).get("session_id");
  console.log(sessionId);

  const verifyPayment = async () => {
    try {
      const response = await fetch(`http://localhost:5000/checkout-success?session_id=${sessionId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Payment verified successfully:", data);
      } else {
        console.error("Error verifying payment:", data);
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Success!</h1>
        <p className="text-lg text-gray-600 mb-2">
          Your payment was successful!
        </p>
        <p className="text-gray-500 mb-2">Thank you for your purchase.</p>
        <p className="text-gray-500 mb-2">We appreciate your business.</p>
        <p className="text-gray-600 mt-4">
          If you have any questions, please{" "}
          <span className="text-blue-600 font-medium">contact us</span>.
        </p>
        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
          onClick={() => navigate("/")}
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default Success;
