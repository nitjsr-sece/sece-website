import React from "react";
import "./HomePage.css";
import img from "../../assets/logo-moon.png";
import { Image } from "primereact/image";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosArrowRoundDown } from "react-icons/io";
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
        <div className="scroll">
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
