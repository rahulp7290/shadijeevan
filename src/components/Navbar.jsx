import React from "react";
import logo from "../assets/logo.jpg";
import { useState } from "react";
import Register from "../components/Register";

const Navbar = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center fixed text-black bg-white w-full z-50 top-0 border py-2 sm:py-3 px-4 sm:px-6 gap-4 sm:gap-0">
        <img src={logo} className="w-40 sm:w-50 h-8 sm:h-10" />

        <div className="hidden sm:flex ml-auto py-3 sm:py-5 px-2 sm:px-5 gap-4 sm:gap-10 text-sm sm:text-lg lg:text-xl font-serif">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          onClick={() => setShowRegister(!showRegister)}
          className="bg-pink-600 px-3 sm:px-2 sm:ml-auto py-2 font-bold font-serif text-sm sm:text-base text-white rounded-lg hover:bg-pink-900 cursor-pointer shadow-md"
        >
          Register
        </button>
      </div>
      {showRegister && <Register close={() => setShowRegister(false)} />}
    </>
  );
};

export default Navbar;
