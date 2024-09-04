import React, { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "../../assets/bulb.png";
import hand from "../../assets/hand.png";
import NavDrawer from "../../components/Navbar/NavDrawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return (
    <div className="home-page">
      {/* Drawer */}
      <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />

      <MenuButton onClick={() => toggleDrawer(true)} />

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
        <FaInstagram style={{color:"#e41146",fontSize:"2rem"}}/>
        </a>
        <a href="https://www.linkedin.com/company/sece-nitjsr" target="_blank">
        <CiLinkedin  style={{color:"#0A66C2",fontSize:"2rem"}}/>
        </a>
        <a href="https://www.youtube.com/@SECENITJamshedpur" target="_blank">
        <AiOutlineYoutube style={{color:"#FF0000",fontSize:"2rem"}}/>
        </a>
        <a href="https://www.facebook.com/secenitjsr/" target="_blank">
        <CiFacebook style={{color:"#0165E1",fontSize:"2rem"}}/>
        </a>
        </div>
 <a href="#About">
<IoIosArrowRoundDown />
</a>
</div>
      </div>

      {/* Second Section */}
      <div className="content-section" id="About">
        <h2>About Us</h2>
        <p>
        Welcome to the Society of Electronics and Communication Engineering, where innovation meets excellence in the realm of advancing technology.
        Our vision is to create a space where fresh ideas can turn into reality through passion and determination.
        We organize a variety of events, workshops, and webinars throughout the year to keep students aware about the latest industry trends in the field of  electronics and software. 
        This enables students to explore both domains and gain a clear understanding of their career paths.
        We provide  a platform where students can engage themselves in a range of educational and entertaining events,
        creating a perfect balance between learning and enjoyment.
        </p>
      </div>

      {/* Third Section - Footer */}
      <div className="footer-section">
        <p>© 2024 [College Society Name]. All Rights Reserved.</p>
        <p>Contact us: [email@example.com]</p>
      </div>
    </div>
  );
};

export default HomePage;
