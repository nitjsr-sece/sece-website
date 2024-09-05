import React from 'react';
import './Footer.css';
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Society of Electronics and Communications Engineering</h2>
          <p className="footer-email">sece.student@nitjsr.ac.in</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/Events">Events</a></li>
            <li><a href="/Nexus">Nexus</a></li>
            <li><a href="/Calendar">Calendar</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="social-footer">
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
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SECE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
