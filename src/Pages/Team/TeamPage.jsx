import React from "react";
import "./TeamPage.css"; // Assuming you will add the corresponding styles here
import Footer from "../../components/Footer/Footer";
import Members from "./Members";

const TeamPage = () => {
  return (
    <div className="team-page">
      {/* First Section with background image and links */}
      <section className="team-page__hero">
        <div className="team-page__links">
          <a href="#section1">Link 1</a>
          <a href="#section2">Link 2</a>
          <a href="#section3">Link 3</a>
        </div>
      </section>

      {/* Middle Section */}
      <section className="team-page__content">
        <h2>Who Are We ?</h2>
        <Members />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default TeamPage;
