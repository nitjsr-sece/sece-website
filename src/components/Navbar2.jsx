import React, { useState } from "react";
import logo from "../assets/logo-moon.png"
import './Navbar/Navbar2.css'
import { ElevatorSharp } from "@mui/icons-material";
const Navbar2 = () => {
  const [visibility,changeVisibility]=useState("none");
  const toggleVisibility=()=>{
    if(visibility=="none"){
      changeVisibility("block");
    }
    else{
      changeVisibility("none");
    }
  }
  return (
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0" style={{backgroundColor:"rgb(7, 3, 62)",width:"99%"}}>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-8" alt="Flowbite Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{color:"white"}}>SECE</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button onClick={toggleVisibility}data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" style={{display:visibility}} id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" class="block py-2 px-3 text-white  md:p-0 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="/events" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style={{color:"white"}}>Events</a>
      </li>
      <li>
        <a href="/nexus" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style={{color:"white"}}>Nexus</a>
      </li>
      <li>
        <a href="/team" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style={{color:"white"}}>Team</a>
      </li>
      <li>
        <a href="/placement_masterclass" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style={{color:"white"}}>Placement masterclass</a>
      </li>
      <li>
        <a href="/alumni" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" style={{color:"white"}}>Alumni</a>
      </li>
    </ul>
  </div>
  </div>
</nav>



  );
};

export default Navbar2;
