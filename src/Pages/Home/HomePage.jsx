import React from "react";
import "./HomePage.css";
import img from "../../assets/logo-moon.png";
import { Image } from "primereact/image";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* First Section */}
      <div className="hero-section">
       
        <div className="hero-content">
          <h1>College Society Name</h1>
          <p>Welcome to the official page of [Society Name]</p>
        </div>
        <div className="logo">
          <Image src={img} alt="Society Logo" />
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
