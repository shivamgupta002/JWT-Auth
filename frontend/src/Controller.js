import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Component/Pages/About";
import { Routes, Route } from "react-router-dom";
import Service from "./Component/Pages/Service";
import SignUp from "./Component/authPage/SignUp";
import Login from "./Component/authPage/Login";
import Home from "./Component/Pages/Home";
import ChangePassword from "./Component/authPage/ChangePassword";
import ProtectedRoute from "./Component/Services/ProtectedRoute";

const Controller = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </>
  );
};

export default Controller;
