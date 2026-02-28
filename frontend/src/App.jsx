import React from "react";
import { Routes, Route } from "react-router-dom";
import Success from "./Success";
import HomePage from "./views/HomePage/index";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import About from "./views/About/About";
import ContactUs from "./views/Contact/ContactUs";
import Packages from "./views/Packages";
import Layout from "./components/Layout";
import BookingForm from "./views/Booking/Booking";
import Payment from "./views/Payment";
import CreatePage from "./views/PilotRegister/CreatePage";
import LoginPage from "./views/LoginPilot/LoginPage";
import TimetablePage from "./views/TimeTable/TimeTablePage";
import UsersDetails from "./views/UserDetails/Users";
import UpdateUser from "./views/UpdateUser/UpdateUser";
import ViewBooking from "./views/ViewBooking/ViewBooking";
import AdminLogin from "./views/admin/AdminLogin";
import AdminDashboard from "./views/admin/AdminDashboard";
import UpdateBooking from "./views/UpdateBooking/UpdateBooking";
import SalaryPage from "./views/SalaryPage/SalaryPage";
import PilotDetailsPage from "./views/PilotDetails/PilotDetailsPage";
import UpdatePage from "./views/PilotUpdatePage/UpdatePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login/customer" element={<Login />} />
          <Route path="/login/pilot" element={<LoginPage />} />
          <Route path="/register/customer" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register/pilot" element={<CreatePage />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/userdetails" element={<UsersDetails />} />
          <Route path="/userdetails/:id" element={<UpdateUser />} />
          <Route path="/viewbooking" element={<ViewBooking />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/read/:nic" element={<UpdateBooking />} />
          <Route path="/salary" element={<SalaryPage />} />
          <Route path="/pilot-details" element={<PilotDetailsPage />} />
            <Route path="/update/:pilotId" element={<UpdatePage />} />
          
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
