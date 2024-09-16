import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import NavDrawer from "../../components/Navbar/NavDrawer.jsx";
import MenuButton from "../../components/MenuButton/MenuButton";

import "./EventsPage.css"; // Import the CSS file for styling
import EventCardCarousel from "./EventCardCarousel.jsx";
import Calendar from "./Calendar.jsx";
import CalendarCarousel from "./CalendarCarousel.jsx";
import Navbar2 from "../../components/Navbar2.jsx";
const EventsPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return ( 
    <div className="events-page">
      <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
      <MenuButton onClick={() => toggleDrawer(true)} />

      {/* First Section */}
      <div className="events-page__hero-section">
        <div className="events-page__hero-content">
          <h1 className="events-page__hero-heading">
            Join the Excitement: SECE Society Events
          </h1>
          <div className="events-page__links-container">
            <a href="#events" className="events-page__nav-link">
              Events
            </a>
            <a href="#footer" className="events-page__nav-link">
              Contact
            </a>
          </div>
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
  );
};

export default EventsPage;
