import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventCardCarousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./EventCard.css";
import events from "./Events";

const EventCardCarousel = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="event-card-carousel">
      <Slider {...settings} ref={sliderRef}>
        {events.map((event, index) => (
          <div key={index}>
          
      <div className="event-card">
      <div className="event-card__left">
     
        <img src={event.image} alt={event.name} className="event-card__image" />
      </div>
      <div className="event-card__right">
        <div className="event-card-header">
      <div className="custom-arrow custom-prev" onClick={handlePrevClick}>
        <ArrowBackIosIcon style={{ fontSize:"1.5rem" }} />
      </div>
        <h3 className="event-card__heading">{event.name}</h3>
        <div className="custom-arrow custom-next" onClick={handleNextClick}>
        <ArrowForwardIosIcon style={{ fontSize:"1.5rem" }} />
      </div>
      </div>
      <p className="event-card__content text-white font-sans font-normal" style={{paddingTop:"2rem",textAlign:"left"}}>{event.description}</p>
      </div>
    </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventCardCarousel;
