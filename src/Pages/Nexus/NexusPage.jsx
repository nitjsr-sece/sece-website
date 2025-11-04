import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavDrawer from "../../components/Navbar/NavDrawer";
import MenuButton from "../../components/MenuButton/MenuButton";
import "./NexusPage.css";
import nexus_logo from '../../assets/NEXUS_magic.png';
import PhotoCarousel from "./PhotoCarousel";
import EventCard from "./EventCard";
import Navbar2 from "../../components/Navbar2.jsx";
import sponsorLogo1 from "../../assets/NexusPage/sponsor1logo.png";
import sponsorLogo2 from "../../assets/NexusPage/sponsor2.png";
import sponsorLogo3 from "../../assets/NexusPage/sponsor3.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import events from "./Events";
import nexusVideo from "../../assets/NexusPage/nexus-recap copy.mp4"; // Import your video file
import CountdownTimer from "./CountdownTimer.jsx";
const NexusPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return (
    <div className="nexus-container ">
      <Navbar2 />
      <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
      <MenuButton onClick={() => toggleDrawer(true)} />
     
      {/* Hero Section */}
      <section className="nexus-hero">
        <nav className="nexus-nav">
          <a href="#description">Nexus</a>
          <a href="#gallery">Gallery</a>
          <a href="#events">Events</a>
          <a href="#sponsors">Sponsors</a>
        </nav>
        
        <div className="nexus-scroll" style={{ color: "white" }}>
          <a href="#nexus-section" className="scroll-btn">
            <ArrowDropDownIcon />
          </a>
        </div>
      </section>

      {/* Description Section */}
      <section className="nexus-description bg-black text-white drop-shadow-[0_4px_10px_#8f7e32]" id="description">
        <div className="description-content">
          <div className="description-text">
          <img src={nexus_logo} className="nexus-funky-logo w-80 sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto"></img>
          <CountdownTimer/>
            <h1 className="funky-heading font-harry text-[#F2CC65] text-5xl">
              Nexus –  Where Fun Meets Brilliance!
            </h1>
            <p className="nexus-desc">
              <strong>Nexus</strong> is the signature fest of the Electronics
              and Communication Engineering department at NIT Jamshedpur,
              celebrated with unmatched enthusiasm every October or November.
              This exhilarating three-day extravaganza brings the campus to life
              with a perfect blend of technical brilliance and vibrant
              entertainment .From coding challenges and robotics competitions to
              quirky fun games, Nexus offers something for everyone. Signature
              events like Talent Hunt, Perfect Pixel, Film Nexus, Digimon, and
              Codexus further amplify the excitement, ensuring every participant
              finds a platform to shine. The fest culminates in an electrifying
              cultural night filled with music, dance, and captivating
              performances.It’s not just an event – it’s an experience that
              unites students, ignites talent, and creates memories that last a
              lifetime. Be part of the magic. Be part of Nexus!
            </p>
          </div>

          <div className="nexus-video">
            <video
              autoPlay
              loop
              className="nexus-video-player"
              controls={true}
            >
              <source src={nexusVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Nexus Sections */}
      <section className="nexus-section" id="nexus-section">
        <div className="nexus-content">
          {/* Gallery Section */}
          <div className="nexus-content-item" id="gallery">
            <h2>Gallery</h2>
            <PhotoCarousel />
          </div>

          {/* Events Section */}
          <div className="nexus-content-item" id="events">
          <h2 className="uppercase font-bold">EVENTS</h2>
            {events.map((event, index) => (
              <EventCard
                key={index}
                position={index % 2 === 0 ? "left" : "right"}
                event={event}
              />
            ))}
          </div>

          {/* Sponsors Section */}
          <div className="nexus-content-item" id="sponsors">
            <h2>Sponsors</h2>
            <div className="sponsor-logos">
              <div className="sponsor-logo-item">
                <img src={sponsorLogo1} alt="Sponsor 1" id="sponsorlogo1" />
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
