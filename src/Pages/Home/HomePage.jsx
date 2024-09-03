import React, { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "../../assets/logo-moon.png";
import NavDrawer from "../../components/Navbar/NavDrawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuButton from "../../components/MenuButton/MenuButton";

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
        <div className="logo">
          <img src={logo} alt="Society Logo" />
        </div>
      </div>

      {/* Second Section */}
      <div className="content-section">
        <h2>About Us</h2>
        <p>
          [Insert detailed information about the society, its events, mission,
          etc.]
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
