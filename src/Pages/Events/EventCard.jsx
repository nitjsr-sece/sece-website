import React from "react";
import "./EventCard.css";

const EventCard = ({ image, heading, content }) => {
  return (
    <div className="event-card">
      <div className="event-card__left">
        <img src={image} alt={heading} className="event-card__image" />
      </div>
      <div className="event-card__right">
        <h3 className="event-card__heading">{heading}</h3>
        <p className="event-card__content">{content}</p>
      </div>
    </div>
  );
};

export default EventCard;
