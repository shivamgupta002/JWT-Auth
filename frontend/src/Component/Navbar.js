import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Image/logo.png";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Service", link: "/service" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <span className="font-bold text-2xl flex items-center font-[poppins] text-gray-800">
            <img src={logo} alt="" className="w-[20%]" />
          </span>
          <div
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
            {/* <i class="fa-solid fa-bars"></i> */}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  ease-in duration-500 ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            }`}
          >
            {Links.map((val) => {
              return (
                <li key={val.name} className="md:ml-6 text-xl md:my-0 my-7">
                  <Link
                    to={val.link}
                    className="text-gray-800 hover:text-gray-400 duration-500"
                  >
                    {val.name}
                  </Link>
                </li>
              );
            })}
            <Link to="/signUp">
              <button className="bg-indigo-600 text-white font-[poppins] py-2 px-5 rounded md:ml-8 hover:bg-indigo-800 duration-500 mr-6">
                SignUp
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-indigo-600 text-white font-[poppins] py-2 px-5 rounded md:ml-2 hover:bg-indigo-800 duration-500">
                Login
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
