import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavDrawer from "../../components/Navbar/NavDrawer";
import MenuButton from "../../components/MenuButton/MenuButton";

import "./NexusPage.css";
import PhotoCarousel from "./PhotoCarousel";
import EventCard from "./EventCard";

import sponsorLogo1 from "../../assets/NexusPage/sponsor1.png";
import sponsorLogo2 from "../../assets/NexusPage/sponsor2.png";
import sponsorLogo3 from "../../assets/NexusPage/sponsor3.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import events from "./Events";

const NexusPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };
  return (
    <div className="nexus-container">
      {/* Drawer */}
      <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
      <MenuButton onClick={() => toggleDrawer(true)} />
      <section className="nexus-hero">
        <nav className="nexus-nav">
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#sponsors">Sponsors</a>
        </nav>
   <div className="nexus-scroll" style={{color:"white"}}>
   <a href="#nexus-section" className="scroll-btn">
              <ArrowDropDownIcon/>
            </a>
   </div>
      </section>

      <section className="nexus-section" id="nexus-section">
        <div className="nexus-content">
          <div className="nexus-content-item" id="events">
            <h2>Events</h2>
            {events.map((event, index) => (
              <EventCard
                key={index}
                position={index % 2 === 0 ? "left" : "right"}
                event={event}
              />
            ))}
          </div>

          <div className="nexus-content-item" id="gallery">
            <h2>Gallery</h2>
            <PhotoCarousel />
          </div>

          <div className="nexus-content-item" id="sponsors">
            <h2>Sponsors</h2>

            <div className="sponsor-logos">
              <div className="sponsor-logo-item">
                <img src={sponsorLogo1} alt="Sponsor 1" />
              </div>
              <div className="sponsor-logo-item">
                <img src={sponsorLogo2} alt="Sponsor 2" />
              </div>
              <div className="sponsor-logo-item">
                <img src={sponsorLogo3} alt="Sponsor 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NexusPage;
