import React, { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "../../assets/logo-moon.png";
import hand from "../../assets/hand.png";
import about_logo from "../../assets/about-logo.png";
import about_photo from "../../assets/about-photo.png";
import nexus_photo from "../../assets/nexus-photo.png";
import event_photos from "../../assets/event-photos.png";
import aboutBg from '../../assets/about-bg.png';

import NavDrawer from "../../components/Navbar/NavDrawer";
import MenuButton from "../../components/MenuButton/MenuButton";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { motion } from "framer-motion";
import { SparklesCore } from "./meteors";


import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return (
    <>
      {/* Drawer */}
      <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
      <MenuButton onClick={() => toggleDrawer(true)} />

      <div className="home-page">
        {/* First Section */}
        <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
              SECE : WHERE INNOVATION MEETS EXCELLENCE</motion.h1>
          </div>
          <div className="logo-hand">
            <motion.div className="logo">
              <motion.img 
              whileInView={{ opacity: 1, y: 0}}
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
            <div className="social">
              <a 
              className="hover:text-white text-[#e41146] transition-all ease-in-out duration-500"
              href="https://www.instagram.com/secenitjsr/" target="_blank">
                <FaInstagram style={{ fontSize: "2rem" }} />
              </a>
              <a
                className="hover:text-white text-[#0A66C2] transition-all ease-in-out duration-500"
                href="https://www.linkedin.com/company/sece-nitjsr"
                target="_blank"
              >
                <CiLinkedin style={{ fontSize: "2rem" }} />
              </a>
              <a
                className="hover:text-white text-[#FF0000] transition-all ease-in-out duration-500"
                href="https://www.youtube.com/@SECENITJamshedpur"
                target="_blank"
              >
                <AiOutlineYoutube
                  style={{ fontSize: "2rem" }}
                />
              </a>
              <a 
                className="hover:text-white text-[#0165E1] transition-all ease-in-out duration-500"
                href="https://www.facebook.com/secenitjsr/" target="_blank">
                <CiFacebook style={{ fontSize: "2rem" }} />
              </a>
            </div>
            <a href="#About">
              <IoIosArrowRoundDown />
            </a>
          </div>
    </div>
        
        </div>

        <div
        className="bg-gray-100 py-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
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
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 150 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0"
          >
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to the Society of Electronics and Communication Engineering, where innovation meets excellence in the realm of advancing technology. Our vision is to create a space where fresh ideas can be turned into reality through passion and determination. We organize a variety of events, workshops, and webinars throughout the year to keep students informed about the latest industry trends in the field of electronics and software. This enables students to explore both domains and gain a clear understanding of their career paths.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center py-8 px-4 lg:px-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Events</h2>
              <div className="content-right">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                The Society of Electronics and Communication Engineering (SECE) conducts a series of events throughout the year, offering students a platform to showcase their talents and unlock their potential. We organize a variety of workshops, webinars, and competitions on diverse topics ranging from electronics, coding to fun events designed to enhance the technical and programming skills of students.
              </p>
              </div>
              <a
                href="/events"
                className="button"
              >
                Explore Events
              </a>
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
              className="rounded-lg shadow-lg"
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
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 px-4"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nexus</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Nexus is the official fest of Electronics and Communication Engineering department at NIT Jamshedpur, usually held in October or November. Nexus is known for its exclusive events that attract participants across the campus. This three-day fest offers a variety of events and competitions ranging from technical challenges and coding competitions to fun games, culminating with a vibrant cultural night.
              </p>
              <a 
                href="/nexus" 
                className="button"
              >
                Discover Nexus
              </a>
            </motion.div>
          </div>
        </div>
      </div>
        {/* Third Section - Footer */}
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
