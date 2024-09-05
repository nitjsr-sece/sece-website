import React, { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "../../assets/logo-moon.png";
import hand from "../../assets/hand.png";
import about_logo from "../../assets/about-logo.png";
import about_photo from "../../assets/about-photo.png";
import nexus_photo from "../../assets/nexus-photo.png";
import event_photos from "../../assets/event-photos.png";

import NavDrawer from "../../components/Navbar/NavDrawer";
import MenuButton from "../../components/MenuButton/MenuButton";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
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
        <div className="hero-section">
          <div className="hero-content">
            <h1>SECE : WHERE INNOVATION MEETS EXCELLENCE</h1>
          </div>
          <div className="logo-hand">
            <div className="logo">
              <img src={logo} alt="Society Logo" />
            </div>
            <div className="hand">
              <img src={hand} alt="hand image" />
            </div>
          </div>
          <div className="scroll">
            <div className="social">
              <a href="https://www.instagram.com/secenitjsr/" target="_blank">
                <FaInstagram style={{ color: "#e41146", fontSize: "2rem" }} />
              </a>
              <a
                href="https://www.linkedin.com/company/sece-nitjsr"
                target="_blank"
              >
                <CiLinkedin style={{ color: "#0A66C2", fontSize: "2rem" }} />
              </a>
              <a
                href="https://www.youtube.com/@SECENITJamshedpur"
                target="_blank"
              >
                <AiOutlineYoutube
                  style={{ color: "#FF0000", fontSize: "2rem" }}
                />
              </a>
              <a href="https://www.facebook.com/secenitjsr/" target="_blank">
                <CiFacebook style={{ color: "#0165E1", fontSize: "2rem" }} />
              </a>
            </div>
            <a href="#About">
              <IoIosArrowRoundDown />
            </a>
          </div>
        </div>

        {/* Second Section */}
        <div className="content-section" id="About">
          {/* Header Section with About Us Image */}
          <div className="content-header">
            <img src={about_logo} className="about-header" alt="About Us" />
          </div>

          {/* First Content Block with Image on the Left and Text on the Right */}
          <div className="content-block left-align">
            <img
              src={about_photo}
              alt="First Image"
              className="content-image"
            />
            <p className="content-text">
              Welcome to the Society of Electronics and Communication
              Engineering, where innovation meets excellence in the realm of
              advancing technology. Our vision is to create a space where fresh
              ideas can be turned into reality through passion and
              determination. We organize a variety of events, workshops, and
              webinars throughout the year to keep students informed about the
              latest industry trends in the field of electronics and software.
              This enables students to explore both domains and gain a clear
              understanding of their career paths.
            </p>
          </div>

          {/* Second Content Block with Image on the Right and Text on the Left */}
          {/* Second Content Block with Image on the Right and Text on the Left */}
          <div className="content-block right-align">
            <img
              src={event_photos}
              alt="Second Image"
              className="content-image"
            />
            <div className="content-right">
              <h2 className="content-heading">Events</h2>
              <p className="content-text">
                The Society of Electronics and Communication Engineering (SECE)
                conducts a series of events throughout the year, offering
                students a platform to showcase their talents and unlock their
                potential. We organize a variety of workshops, webinars, and
                competitions on diverse topics ranging from electronics, coding
                to fun events designed to enhance the technical and programming
                skills of students.
              </p>
              <div className="button-container">
                <a href="/events" className="button">
                  Explore Events
                </a>
              </div>
            </div>
          </div>

          {/* Third Content Block with Image on the Left and Text on the Right */}
          <div className="content-block left-align">
            <img
              src={nexus_photo}
              alt="Third Image"
              className="content-image"
            />
            <div>
              <h2 className="content-heading">Nexus</h2>
              <p className="content-text">
                Nexus is the official fest of Electronics and Communication
                Engineering department at NIT Jamshedpur, usually held in
                October or November. Nexus is known for its exclusive events
                that attract participants across the campus. This three-day fest
                offers a variety of events and competitions ranging from
                technical challenges and coding competitions to fun games,
                culminating with a vibrant cultural night.
              </p>
              <div className="button-container">
                <a href="/nexus" className="button">
                  Discover Nexus
                </a>
              </div>
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
