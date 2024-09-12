import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./EventCard.css"; // Import the CSS for styling

const EventCard = ({ event, position }) => {
  return (
    <div className={`event-card ${position === "right" ? "reverse" : ""}`}>
      <div className="event-card-carousel">
        <ImageCarousel images={event.photos} />
      </div>
      <div className="event-card-content">
        <h2 className="event-heading">{event.name}</h2>
        <p className="event-description">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
