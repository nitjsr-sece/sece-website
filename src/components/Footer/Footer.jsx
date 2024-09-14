import React from 'react';
import './Footer.css';
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="footer cursor-pointer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Society of Electronics and Communications Engineering</h2>
          <p className="footer-email">sece.student@nitjsr.ac.in</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className='transition-all duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>Home</a></li>
            <li><a href="/Events" className='transition-all duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>Events</a></li>
            <li><a href="/Nexus" className='transition-all duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>Nexus</a></li>
            <li><a href="/team" className='transition-all duration-500 ease-in-out hover:scale-110 hover:text-gray-400'>Team</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="social-footer">
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
        </div>
      </div>

      <div className="footer-bottom bg-grey bottom-0 flex justify-center items-center h-10 w-1/2 md:w-full text-sm">
        <p className='footer-content-sece'>&copy; {new Date().getFullYear()} SECE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
