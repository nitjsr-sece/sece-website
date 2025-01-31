import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import NavDrawer from "../../components/Navbar/NavDrawer.jsx";
import MenuButton from "../../components/MenuButton/MenuButton";
import { SparklesCore } from "../Home/meteors.jsx"
import "./EventsPage.css"; // Import the CSS file for styling
import EventCardCarousel from "./EventCardCarousel.jsx";
import Calendar from "./Calendar.jsx";
import CalendarCarousel from "./CalendarCarousel.jsx";
import Navbar2 from "../../components/Navbar2.jsx";
import EventsMenu from "./EventsMenu.jsx";
const EventsPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return ( 
    
    <>
    <Navbar2/>
      <div className="events-page">
      <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
      <EventsMenu onClick={() => toggleDrawer(true)} />

      {/* First Section */}
      <div className="events-page__hero-section">
        <div className="events-page__hero-content">
       
          <div>
          <h1 className="events-page__hero-heading">
            Join the Excitement: SECE Events
          </h1>
          <p className="events-para-content">The Society of Electronics and Communication Engineering (ECE) is dedicated to fostering technical innovation, creativity, and hands-on learning among students. Every year, the ECE Society organizes a diverse range of events that cater to the technical and creative interests of its members. From coding challenges to exciting electronics-based activities, the society's events are designed to engage students in real-world problem solving while promoting teamwork, innovation, and fun.</p>
          </div>
          {/* <div className="events-page__links-container">
            <a href="#events" className="events-page__nav-link">
              Events
            </a>
          </div> */}
        </div>
      </div>

      {/* Second Section: Events List */}
      <div className="events-page__content-section" id="events">
        <h2 className="events-page__section-heading">Events</h2>
        <EventCardCarousel />
        <CalendarCarousel />
      </div>

      {/* Footer Section */}
      <div className="events-page__footer-section" id="footer">
        <Footer />
      </div>
    </div>
    </>
  );
};

export default EventsPage;
