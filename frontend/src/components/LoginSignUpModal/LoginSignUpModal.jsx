import React from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import customerImg from "../../assets/images/as_user.jpg";
import "./style.css";

export default function SignUp_Popup({ isOpen, isCancel, loginOrRegi }) {
  const navigate = useNavigate();

  function redirectRegister(role) {
    if (loginOrRegi === "login") {
      navigate(`/login/${role}`);
    } else {
      navigate(`/register/${role}`);
    }

    if (isCancel) {
      isCancel();
    }
  }

  return (
    <>
      <Modal
        className="loginModal"
        open={isOpen}
        onCancel={isCancel}
        footer={null}
      >
        <section className="loginModal-con">
          <div
            className="subContainer"
            onClick={() => {
              redirectRegister("customer");
            }}
          >
            <img src={customerImg} alt="passenger" />
            <section className="subSection">
              <p>As a Customer</p>
              <p>Let’s Ride & Track in Real-Time.</p>
            </section>
          </div>

          <div
            className="subContainer"
            onClick={() => redirectRegister("pilot")}
          >
            <img
              src={
                "https://th.bing.com/th/id/OIP.PwIIOpGyFyJGkGRZOyymEgHaL4?cb=iwc2&rs=1&pid=ImgDetMain"
              }
              alt="Restaurant"
            />
            <section className="subSection">
              <p>As a Pilot</p>
              <p>Let’s Manage Routes & Fleet Smartly.</p>
            </section>
          </div>
        </section>
      </Modal>
    </>
  );
}
