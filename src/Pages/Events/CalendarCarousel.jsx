import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./CalendarCarousel.css";

const months = [
  {
    name: "January",
    days: 31,
    startDay: 0, // Sunday
    events: [
      { startDate: 10, endDate: 10, name: "New Year's Party" },
      { startDate: 26, endDate: 26, name: "Republic Day" },
    ],
  },
  {
    name: "June",
    days: 30,
    startDay: 3, // Wednesday
    events: [
      { startDate: 5, endDate: 5, name: "World Environment Day" },
      { startDate: 21, endDate: 21, name: "Yoga Day" },
    ],
  },
  {
    name: "October",
    days: 31,
    startDay: 1, // Tuesday
    events: [
      { startDate: 18, endDate: 20, name: "Nexus Fest" }, // Multi-day event
    ],
  },
  // Add other months similarly
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarCarousel = () => {
  const sliderRef = React.useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [clickedDate, setClickedDate] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrevClick = () => {
    setClickedDate(null);
    setSelectedEvent(null);
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    setClickedDate(null);
    setSelectedEvent(null);
    sliderRef.current.slickNext();
  };

  const handleDateClick = (event, date) => {
    setSelectedEvent(event);
    setClickedDate(date);
  };

  return (
    <div className="calendar-carousel">
      <h1 className="calendar-heading">Events Calendar 2024</h1>
      <Slider {...settings} ref={sliderRef}>
        {months.map((month, index) => (
          <div key={index} className="month-card">
            <h2 className="month-name">{month.name}</h2>
            <div className="days-of-week">
              {daysOfWeek.map((day, index) => (
                <div key={index} className="day-name">
                  {day}
                </div>
              ))}
            </div>
            <div className="calendar-grid">
              {/* Empty spaces for days before the first day of the month */}
              {[...Array(month.startDay)].map((_, idx) => (
                <div key={`empty-${idx}`} className="calendar-day empty"></div>
              ))}
              {[...Array(month.days)].map((_, day) => {
                const currentDay = day + 1;
                const eventsToday = month.events.filter(
                  (e) => currentDay >= e.startDate && currentDay <= e.endDate
                );
                const isSelected = clickedDate === currentDay;
                return (
                  <div
                    key={day}
                    className={`calendar-day ${
                      eventsToday.length > 0 ? "highlight" : ""
                    } ${isSelected ? "selected" : ""}`}
                    onClick={() =>
                      eventsToday.length > 0 &&
                      handleDateClick(eventsToday[0], currentDay)
                    }
                  >
                    {currentDay}
                  </div>
                );
              })}
            </div>
            {selectedEvent &&
              selectedEvent.startDate <= clickedDate &&
              selectedEvent.endDate >= clickedDate && (
                <div className="event-details">
                  <p>
                    <strong>Date:</strong> {month.name} {clickedDate}
                  </p>
                  <p>
                    <strong>Event:</strong> {selectedEvent.name}
                  </p>
                </div>
              )}
          </div>
        ))}
      </Slider>

      {/* Custom Arrows */}
      <div className="custom-arrow custom-prev" onClick={handlePrevClick}>
        <ArrowBackIosIcon style={{ fontSize: 20 }} />
      </div>
      <div className="custom-arrow custom-next" onClick={handleNextClick}>
        <ArrowForwardIosIcon style={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

export default CalendarCarousel;
