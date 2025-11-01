import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./CalendarCarousel.css";
import { green, red, blue } from "@mui/material/colors";

const months = [
  {
    name: "July",
    days: 31,
    startDay: 1,
    events: [
      { startDate: 28, endDate: 28, name: "New Semester Begins" , color: blue[400]},
    ],
  },
  {
    name: "August",
    days: 31,
    startDay: 5, // Friday
    events: [
      { startDate: 30, endDate: 31, name: "SECE Inductions (2024 Batch)" ,}, // Multi-day event
      { startDate: 2, endDate: 3, name: "Holiday" , color: green[400]},
      { startDate: 9, endDate: 10, name: "Holiday" , color: green[400]},
      { startDate: 15, endDate: 15, name: "Independance Day/ Janmashtami " , color: green[400]},
      { startDate: 16, endDate: 17, name: "Holiday" , color: green[400]},
      { startDate: 23, endDate: 24, name: "Holiday" , color: green[400]},
    ],
  },
  {
    name: "September",
    days: 30,
    startDay: 1, // Monday
    events: [
      { startDate: 5, endDate: 5, name: "Birth Day of Prophet Mohammad (Id-e-Milad) " , color: green[400]},
      { startDate: 6, endDate: 6, name: "CP Contest (Problem Solving ) (2024 Batch) " },
      { startDate: 6, endDate: 7, name: "Holiday" , color: green[400]},
      { startDate: 13, endDate: 14, name: "Holiday" , color: green[400]},
      { startDate: 17, endDate: 27, name: "Mid Semester (Autumn, AY: 2025-2026) Examination for All Programs" , color: red[400]},
      { startDate: 28, endDate: 28, name: "Holiday" , color: green[400]},
    ],
  },
  {
    name: "October",
    days: 31,
    startDay: 3, // Wednesday
    events: [
      { startDate: 1, endDate:1, name: "Dussehra Holiday" , color: green[400]},
      { startDate: 2, endDate:2, name: "Mahatma Gandhi Jayanti / (Vijaya Dashmi)" , color: green[400]},
      { startDate: 3, endDate: 3, name: "SECE-Photoshoot" },
      { startDate: 4, endDate:5, name: "Holiday" , color: green[400]},//saturday and sunday
      { startDate: 11, endDate:12, name: "Holiday" , color: green[400]},//saturday and sunday
      { startDate: 18, endDate:19, name: "Holiday" , color: green[400]},//saturday and sunday
      { startDate: 20, endDate:29, name: "Mid Semester Break" , color: green[400]},
    ],
  },
  {
    name: "November",
    days: 30,
    startDay: 6, // Saturday
    events: [
      { startDate: 1, endDate:2, name: "Holiday" , color: green[400]},
      { startDate: 8, endDate:9, name: "Holiday" , color: green[400]},
      { startDate: 14, endDate:16, name: "Nexus" },
      { startDate: 18, endDate:30, name: "End Semester (Autumn, AY: 2025-2026) Examinations for All Programs" , color: red[300]},
      { startDate: 29, endDate:30, name: "Holiday" , color: green[400]},//saturday and sunday
    ],
  },
  {
    name: "December",
    days: 31,
    startDay: 1, // Monday
    events: [
      { startDate: 1, endDate:3, name: "End Semester (Autumn, AY: 2025-2026) Examinations for All Programs" , color: red[300]},
      { startDate: 4, endDate:30, name: "Winter Break for Students" , color: green[400]},
    ],
  },
  {
    name: "January",
    days: 31,
    startDay: 4, // Thursday
    events: [
      { startDate: 3, endDate: 3, name: "Intern Diaries" },
      { startDate: 4, endDate: 4, name: "Holiday" , color: green[400]},
      { startDate: 5, endDate: 5, name: "Commencement of Classes for Spring Semester (AY: 2025-2026) " , color: blue[400]},
      { startDate: 10, endDate: 10, name: "Holiday" , color: green[400]},
      { startDate: 17, endDate: 18, name: "Holiday" , color: green[400]},
      { startDate: 24, endDate: 25, name: "Holiday" , color: green[400]},
      { startDate: 31, endDate: 31, name: "Holiday" , color: green[400]},
      { startDate: 11, endDate: 11, name: "Core And Non-Core Workshop (2025 Batch) " },
      { startDate: 26, endDate: 26, name: "Republic Day" , color: green[400]},
    ],
  },
  {
    name: "February",
    days: 28,
    startDay: 0, // Sunday
    events: [
      { startDate: 1, endDate: 1, name: "Fun Event (2025 Batch)" },
      { startDate: 7, endDate: 7, name: "Holiday" , color: green[400]},
      { startDate: 8, endDate: 8, name: "CP Team Induction (2024 Batch)" },
      { startDate: 14, endDate: 15, name: "Holiday" , color: green[400]},
      { startDate: 21, endDate: 22, name: "Holiday" , color: green[400]},
      { startDate: 28, endDate: 29, name: "Holiday" , color: green[400]},
    ],
  },
  {
    name: "March",
    days: 31,
    startDay: 0, // Sunday
    events: [
      { startDate: 22, endDate: 22, name: "Sports Fun Event (SECE Members Only)" },
      { startDate: 29, endDate: 29, name: "CP Workshop -1 (STL , Binary Search) " },
      { startDate: 1, endDate: 1, name: "Holiday" , color: green[400]},
      { startDate: 7, endDate: 19, name: "Mid Semester (Spring, AY: 2025-2026)" , color: red[400]},
      { startDate: 21, endDate: 27, name: "Mid Semester Break" , color: green[400]},
      { startDate: 28, endDate: 29, name: "Holiday" , color: green[400]},
    ],
  },
  {
   name: "April",
   days:31,
   startDay:3,
   events:[
    {startDate: 4 , endDate:4, name:"Cricket Tournament "},
    {startDate:12 , endDate:12, name:"VLSI Workshop (2025 Batch)"},
    {startDate: 5 , endDate:5, name:"CP Contest (Problem Solving ) (2025 Batch)"},
    { startDate: 3, endDate: 3, name: "Holiday" , color: green[400]},
    { startDate: 11, endDate: 12, name: "Holiday" , color: green[400]},
    { startDate: 18, endDate: 19, name: "Holiday" , color: green[400]},
    { startDate: 25, endDate: 26, name: "Holiday" , color: green[400]},
    { startDate: 30, endDate: 31, name: "End Semester (Spring, AY: 2025-2026) " , color: red[400]},
   ]
  },
  {
    name: "May",
    days: 31,
    startDay: 5,
    events: [
      { startDate: 2, endDate: 2, name: "Placement Master Class" },
      { startDate: 9, endDate: 9, name: "Placement Master Class" },
      { startDate: 16, endDate: 16, name: "Placement Master Class" },
      { startDate: 23, endDate: 23, name: "Placement Master Class" },
      { startDate: 30, endDate: 30, name: "Placement Master Class" },
      { startDate: 1, endDate: 15, name: "End Semester (Spring, AY: 2025-2026) " , color: red[400]},
      { startDate: 16, endDate: 31, name: "End Semester Break " , color: green[400]},
    ],
  },
  {
    name: "June",
    days: 30,
    startDay: 1,
    events: [
      { startDate: 21, endDate: 22, name: "CP Workshop -2 (Advance Topics) " },
      { startDate: 1, endDate: 30, name: "End Semester Break " , color: green[400]},
    ],
  },
  {
    name: "July",
    days: 31,
    startDay: 1,
    events: [
      { startDate: 1, endDate: 12, name: "End Semester Break " , color: green[400]},
      { startDate: 15, endDate: 15, name: "New Semester Begins" , color: blue[400]},
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
    speed: 400,
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
      <h1 className="calendar-heading">Events Calendar 2025-26</h1>
      <Slider {...settings} ref={sliderRef}>
        {months.map((month, index) => (
          <div key={index} className="month-card">
            <div className="custom-arrow custom-prev" onClick={handlePrevClick} style={{marginRight:"3rem"}}>
        <ArrowBackIosIcon style={{ fontSize: "1.5rem" }} />
      </div>
            <h2 className="month-name">{month.name}</h2>
            <div className="custom-arrow custom-next" onClick={handleNextClick} style={{marginLeft:"3rem"}}>
        <ArrowForwardIosIcon style={{ fontSize: "1.5rem" }} />
      </div>
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
                    className={`calendar-day ${isSelected ? "selected" : ""}`}
                    style={{
                      backgroundColor:
                        eventsToday.length > 0
                          ? eventsToday[0].color || "#f5d784" // use color if defined, else default yellow
                          : "black",
                      color: eventsToday.length > 0 ? "white" : "white",
                      border: isSelected ? "2px solid #F2CC65" : "none",
                    }}
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

    
      
     
    </div>
  );
};

export default CalendarCarousel;