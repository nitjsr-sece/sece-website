import React, { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "../../assets/logo-white.png";
import hand from "../../assets/hand1.png";
import about_logo from "../../assets/about-logo1.png";
import about_photo from "../../assets/about-photo.png";
import nexus_photo from "../../assets/nexus-photo1.png";
import event_photos from "../../assets/event_photos1.png";
import NavDrawer from "../../components/Navbar/NavDrawer.jsx";
import MenuButton from "../../components/MenuButton/MenuButton";
import Navbar2 from "../../components/Navbar2";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { motion } from "framer-motion";
import { SparklesCore } from "./meteors";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Footer from "../../components/Footer/Footer";
import Card from "./Card.jsx";
const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return (
    <>
      <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
      <MenuButton
        onClick={() => toggleDrawer(true)}
        className="hamburger-home"
      />
      <div className="home-page">
        <Navbar2 />
        {/* First Section */}
        <div className=" relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
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
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
              >
                <h4 className="hero-heading font-sans font-semibold text-[#9375c6]">
                  Society of Electronics and Communication Engineering
                  <div className="x">
                    <p className="tagline font-light text-[white]">
                      Shaping Electronics | Transforming Communication | Connecting
                      the Future{" "}
                    </p>
                  </div>
                </h4>
                <img src={logo} className="mobile-view-logo" />
              </motion.h1>
            </div>

            <div className="logo-hand">
              <motion.div className="logo">
                <motion.img
                  whileInView={{ opacity: 1, y: -35 }}
                  initial={{ opacity: 0, y: -150 }}
                  transition={{ duration: 1 }}
                  src={logo}
                  alt="Society Logo"
                />
              </motion.div>
              <div className="hand">
                <motion.img
                  whileInView={{ opacity: 1, y: 30 }}
                  initial={{ opacity: 0, y: 150 }}
                  transition={{ duration: 1 }}
                  src={hand}
                  alt="hand image"
                />
              </div>
            </div>
            <div className="scroll">
              <a href="#About" className="scroll-btn">
                <ArrowDropDownIcon />
              </a>
            </div>
          </div>
        </div>



        <div className="py-8 bg-cover bg-center w-[90%] mx-auto" id="About">
          <div className="text-center">
            <motion.img
              src={about_logo}
              alt="About Us"
              className="mx-auto w-[84%] md:w-[45%] my-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
            />
            {/* <motion.h1
              className="text-white text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
            >ABOUT US</motion.h1> */}
          </div>

          <div className="flex flex-wrap items-center py-8 px-4 lg:px-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 px-6 mt-4 lg:mt-0 drop-shadow-[0_4px_10px_#9375c6]"
            >
              <img
                src={about_photo}
                alt="About Us"
                className="rounded-lg w-[100%] about-photo h-auto"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 150 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 px-6 mt-4 lg:mt-0 drop-shadow-[0_4px_10px_#9375c6]"
            >
              <div className="about-content-container">
                <p className="text-3xl md:text-base font-sans font-normal text-justify text-gray-400 about-content py-12 md:py-4">
                  Welcome to the Society of Electronics and Communication
                  Engineering, where innovation meets excellence in the realm of
                  advancing technology. Our vision is to create a space where
                  fresh ideas can be turned into reality through passion and
                  determination. We organize a variety of events, workshops, and
                  webinars throughout the year to keep students informed about
                  the latest industry trends in the field of electronics and
                  software. This enables students to explore both domains and
                  gain a clear understanding of their career paths.
                </p>
              </div>
            </motion.div>
          </div>

          <div
            className="flex flex-wrap items-center py-8 px-4 lg:px-8 event-container w-[98%] m-auto mt-36"
            id="Events"
          >

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0"
            >
              <div className="text-center lg:text-left">
                <h2 className="text-6xl mt-4 md:mt-0 md:text-3xl font-bold text-[#9375c6] mb-4">
                  Events
                </h2>
                <div className="content-right drop-shadow-[0_4px_10px_#9375c6]">

                  <p className="text-3xl md:text-base text-justify font-normal font-sans text-gray-400 mb-6 events-content ">
                    The Society of Electronics and Communication Engineering
                    (SECE) conducts a series of events throughout the year,
                    offering students a platform to showcase their talents and
                    unlock their potential. We organize a variety of workshops,
                    webinars, and competitions on diverse topics ranging from
                    electronics, coding to fun events designed to enhance the
                    technical and programming skills of students.
                  </p>
                </div>
                <div className="event-btn-container">
                  <a
                    href="/events"
                    className="text-4xl md:text-base p-2 border-[1px] border-[#9375c6]  px-4 rounded-md bg-[none] hover:bg-gradient-to-r hover:from-[#bb0cf0] hover:to-[#9375c6] text-white transition-all duration-300"

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
                className="rounded-lg w-[100%] h-auto shadow-lg event-photo drop-shadow-[0_4px_10px_#9375c6]"
              />
            </motion.div>
          </div>

          <div className="px-4 lg:px-8" id="Nexus">
            <div className="flex flex-wrap items-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -150 }}
                transition={{ duration: 1 }}
                className="lg:w-1/2 px-4 mb-6 lg:mb-0"
              >
                <img
                  src={nexus_photo}
                  alt="Nexus Event"
                  className="rounded-lg h-auto shadow nexus-photo drop-shadow-[0_4px_10px_#9375c6] w-[100%]"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 px-4 "
              >
                <h2
                  className="text-6xl mt-4 md:mt-0 md:text-3xl font-bold text-[#9375c6] "
                  style={{ textAlign: "center" }}
                >
                  Nexus
                </h2>
                <p className="text-3xl text-justify md:text-base font-normal font-sans text-gray-400 mb-6 events-content ">
                  Nexus is the official fest of Electronics and Communication
                  Engineering department at NIT Jamshedpur, usually held in
                  October or November. Nexus is known for its exclusive events
                  that attract participants across the campus. This three-day
                  fest offers a variety of events and competitions ranging from
                  technical challenges and coding competitions to fun games,
                  culminating with a vibrant cultural night.
                </p>
                <div className="nexus-btn-container">
                  <a
                    href="/nexus"
                    className="p-2 text-4xl md:text-base border-[1px] border-[#9375c6]  px-4 rounded-md bg-[none] hover:bg-gradient-to-r hover:from-[#bb0cf0] hover:to-[#9375c6] text-white transition-all duration-300"

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
