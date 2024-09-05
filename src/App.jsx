import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import CalendarPage from "./Pages/Calendar/CalendarPage.jsx";
import EventsPage from "./Pages/Events/EventsPage.jsx";
import NexusPage from "./Pages/Nexus/NexusPage.jsx";
import TeamPage from "./Pages/Team/TeamPage.jsx";

import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/nexus" element={<NexusPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
