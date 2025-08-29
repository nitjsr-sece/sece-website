import React, { useState } from "react";
import logo from "../assets/logo-white.png";
import './Navbar/Navbar2.css';

const Navbar2 = () => {
  const [visibility, changeVisibility] = useState("block");

  const toggleVisibility = () => {
    if (visibility === "none") {
      changeVisibility("block");
    } else {
      changeVisibility("none");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0" style={{ backgroundColor: "black", width: "99%" }} id="navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={logo} className="h-8" alt="Flowbite Logo"/> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{ color: "white" }}>SECE</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button onClick={toggleVisibility} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" style={{ display: visibility }} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 text-white md:p-0 hover:text-[#9375c6]" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/events" className="block py-2 px-3 text-white rounded hover:text-[#9375c6] md:p-0">Events</a>
            </li>
            <li>
              <a href="/nexus" className="block py-2 px-3 text-white rounded hover:text-[#9375c6] md:p-0">Nexus</a>
            </li>
            <li>
              <a href="/team" className="block py-2 px-3 text-white rounded hover:text-[#9375c6] md:p-0">Team</a>
            </li>
            <li>
              <a href="/placement_masterclass" className="block py-2 px-3 text-white rounded hover:text-[#9375c6] md:p-0">Placement Masterclass</a>
            </li>
            <li>
              <a href="/alumni" className="block py-2 px-3 text-white rounded hover:text-[#9375c6] md:p-0">Alumni</a>
            </li>
            <li>
              <a href="/registration" className="block py-2 px-3 text-white rounded hover:text-[#9375c6] md:p-0">Registration</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

