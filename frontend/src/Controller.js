import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Component/Pages/About";
import { Routes, Route } from "react-router-dom";
import Service from "./Component/Pages/Service";
import SignUp from "./Component/authPage/SignUp";
import Login from "./Component/authPage/Login";
import Home from "./Component/Pages/Home";
import ChangePassword from "./Component/authPage/ChangePassword";

const Controller = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
};

export default Controller;
