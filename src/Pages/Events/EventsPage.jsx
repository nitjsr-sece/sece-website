import React, {useState} from "react";
import Footer from "../../components/Footer/Footer.jsx";
import NavDrawer from "../../components/Navbar/NavDrawer.jsx";
import MenuButton from "../../components/MenuButton/MenuButton";


import "./EventsPage.css"; // Import the CSS file for styling

const EventsPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };
  return (
    <div className="events-page">
      {/* Drawer */}
      <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
      <MenuButton onClick={() => toggleDrawer(true)} />

      {/* First Section */}
      <div className="hero-section">
        <div className="links-container">
          <a href="#events" className="nav-link">
            Events
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>

      {/* Second Section: Events List */}
      <div className="content-section">
        <h2>Upcoming Events</h2>
        <ul className="events-list">
          <li>Event 1 - Date</li>
          <li>Event 2 - Date</li>
          <li>Event 3 - Date</li>
          {/* Add more events here */}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default EventsPage;
