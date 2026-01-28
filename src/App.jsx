import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import CalendarPage from "./Pages/Calendar/CalendarPage.jsx";
import EventsPage from "./Pages/Events/EventsPage.jsx";
import NexusPage from "./Pages/Nexus/NexusPage.jsx";
import TeamPage from "./Pages/Team/TeamPage.jsx";
import NavDrawer from "./components/Navbar/NavDrawer.jsx";
import MenuButton from "./components/MenuButton/MenuButton";
import Masterclass from "./Pages/Placement_masterclass/PMC.jsx";
import Alumni from "./Pages/Alumni/Alumni.jsx";
import "./index.css";

function App() {
  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const toggleDrawer = (isOpen) => {
  //   setDrawerOpen(isOpen);
  // };
  return (
    <>
    <Router>
    {/* <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} /> */}
    {/* <MenuButton onClick={() => toggleDrawer(true)} /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/nexus" element={<NexusPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/placement_masterclass" element={<Masterclass/>}/>
        <Route path="/alumni" element={<Alumni/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
