import React, { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "../../assets/logo-moon.png";
import hand from "../../assets/hand.png";
import about_logo from "../../assets/about-logo.png";
import about_photo from "../../assets/about-photo.png";
import nexus_photo from "../../assets/nexus-photo.png";
import event_photos from "../../assets/event-photos.png";

import Navbar2 from "../../components/Navbar2";
import NavDrawer from "../../components/Navbar/NavDrawer";
import MenuButton from "../../components/MenuButton/MenuButton";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { motion } from "framer-motion";
import { SparklesCore } from "./meteors";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Footer from "../../components/Footer/Footer";
const HomePage = () => {

  return (
    <>
       
      <div className="home-page">
   
      <Navbar2/>
        {/* First Section */}
        <div className="h-[43.45rem] relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="hero-section">
          <div className="hero-content">
            <motion.h1
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -200}}
            transition={{ duration: 1}}
            >
            <h4 className="hero-heading">
              Society of Electronics and Communication Engineering.
                <div className="x">
                  
                  <p className="tagline">Shaping Electronics,Transforming Communication,Connecting the Future. </p>
                </div>
              </h4>
              </motion.h1>
              
          </div>

          <div className="logo-hand">
            <motion.div className="logo">
              <motion.img 
              whileInView={{ opacity: 1, y: -25}}
              initial={{ opacity: 0, y: -150}}
              transition={{ duration: 1}}
              src={logo} alt="Society Logo" />
            </motion.div>
            <div className="hand">
              <motion.img 
              whileInView={{ opacity: 1, y: 0}}
              initial={{ opacity: 0, y: 150}}
              transition={{ duration: 1}}
              src={hand} alt="hand image" />
            </div>
          </div>
          <div className="scroll">
            <a href="#About" className="scroll-btn">
              <ArrowDropDownIcon/>
            </a>
          </div>
    </div>
        
        </div>

        <div
        className="bg-gray-100 py-8 bg-cover bg-center"
        id="About">
        <div className="text-center py-8">
          <motion.img
            src={about_logo}
            alt="About Us"
            className="mx-auto max-w-xs lg:max-w-md"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="flex flex-wrap items-center py-8 px-4 lg:px-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 px-4"
          >
            <img
              src={about_photo}
              alt="About Us"
              className="rounded-lg shadow-lg about-photo"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 150 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0"
          >
           <div className="about-content-container">
           <p className="text-lg leading-relaxed text-gray-700 about-content pt-5">
              Welcome to the Society of Electronics and Communication Engineering, where innovation meets excellence in the realm of advancing technology. Our vision is to create a space where fresh ideas can be turned into reality through passion and determination. We organize a variety of events, workshops, and webinars throughout the year to keep students informed about the latest industry trends in the field of electronics and software. This enables students to explore both domains and gain a clear understanding of their career paths.
            </p>
           </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center py-8 px-4 lg:px-8 event-container" id="Events">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-5">Events</h2>
              <div className="content-right">
              <p className="text-lg leading-relaxed text-gray-700 mb-6 events-content">
                The Society of Electronics and Communication Engineering (SECE) conducts a series of events throughout the year, offering students a platform to showcase their talents and unlock their potential. We organize a variety of workshops, webinars, and competitions on diverse topics ranging from electronics, coding to fun events designed to enhance the technical and programming skills of students.
              </p>
              </div>
              <div className="event-btn-container">
              <a
                href="/events"
                className="events-button transition-all ease-in duration-300"
              >
                Explore Events
              </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 150 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0 flex justify-end"
          >
            <img
              src={event_photos}
              alt="Events"
              className="rounded-lg shadow-lg event-photo"
            />
          </motion.div>
        </div>

        <div className=" py-8 px-4 lg:px-8" id="Nexus">
          <div className="flex flex-wrap items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -150 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0"
            >
              <img
                src={nexus_photo}
                alt="Nexus Event"
                className="rounded-lg shadow nexus-photo"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 px-4"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{textAlign:"center"}}>Nexus</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6 nexus-event-content">
                Nexus is the official fest of Electronics and Communication Engineering department at NIT Jamshedpur, usually held in October or November. Nexus is known for its exclusive events that attract participants across the campus. This three-day fest offers a variety of events and competitions ranging from technical challenges and coding competitions to fun games, culminating with a vibrant cultural night.
              </p>
              <div className="nexus-btn-container">
                <a 
                  href="/nexus" 
                  className="nexus-button transition-all ease-in duration-300"
                >
                  Discover Nexus
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
        {/* Third Section - Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
