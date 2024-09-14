import React from "react";
import Slider from "react-slick";
import EventCard from "./EventCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventCardCarousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
            <EventCard
              image={event.image}
              heading={event.name}
              content={event.description}
            />
          </div>
        ))}
      </Slider>

      {/* Custom Arrows */}
      <div className="custom-arrow custom-prev" onClick={handlePrevClick}>
        <ArrowBackIosIcon style={{ fontSize: 40 }} />
      </div>
      <div className="custom-arrow custom-next" onClick={handleNextClick}>
        <ArrowForwardIosIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};

export default EventCardCarousel;
