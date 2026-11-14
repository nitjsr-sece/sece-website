
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home/HomePage.jsx";
import HomeView from "./Pages/Home/HomeView.jsx";
import CalendarPage from "./Pages/Calendar/CalendarPage.jsx";
import EventsPage from "./Pages/Events/EventsPage.jsx";
import NexusPage from "./Pages/Nexus/NexusPage.jsx";
import TeamPage from "./Pages/Team/TeamPage.jsx";
import Masterclass from "./Pages/Placement_masterclass/PMC.jsx";
import Alumni from "./Pages/Alumni/Alumni.jsx";

import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<HomePage />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/nexus" element={<NexusPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/placement_masterclass" element={<Masterclass />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
