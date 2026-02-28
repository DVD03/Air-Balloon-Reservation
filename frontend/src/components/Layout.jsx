import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const pathname = window.location.pathname;
  const notAllowedPaths = ["/contact-us", "/payment","/Success"];
  const isAllowedPath = notAllowedPaths.some((path) => pathname.includes(path));
  return (
    <main className="main">
      {!isAllowedPath && <Header />}
      {!isAllowedPath && <Navbar />}
      <Outlet />
      {!isAllowedPath && <Footer />}
    </main>
  );
}
