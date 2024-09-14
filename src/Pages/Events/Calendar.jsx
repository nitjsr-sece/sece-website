import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Calendar.css";

const months = [
  { name: "January", events: ["New Year Party"] },
  {
    name: "February",
    events: ["Valentine's Day Celebration", "Winter Carnival"],
  },
  { name: "March", events: ["Spring Festival", "Coding Bootcamp"] },
  { name: "April", events: ["Branch Fest", "Annual Meeting"] },
  { name: "May", events: ["Career Fair", "Summer Kickoff"] },
  { name: "June", events: ["Internship Program", "Alumni Meet"] },
  { name: "July", events: ["Hackathon", "Workshop Series"] },
  { name: "August", events: ["Welcome Week", "Research Symposium"] },
  { name: "September", events: ["Tech Conference", "Fall Gala"] },
  { name: "October", events: ["Halloween Party", "Code Jam"] },
  { name: "November", events: ["Thanksgiving Dinner", "Networking Event"] },
  { name: "December", events: ["Holiday Party", "End-of-Year Celebration"] },
];

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  const springProps = useSpring({
    opacity: selectedMonth ? 1 : 0,
    transform: selectedMonth ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 250, friction: 25 },
  });

  return (
    <div className="calendar-container">
      <h1 className="calendar-heading">Events Calendar</h1>
      <div className="calendar">
        {months.map((month, index) => (
          <div
            key={index}
            className="month"
            onClick={() => handleMonthClick(month)}
          >
            {month.name}
          </div>
        ))}
      </div>
      {selectedMonth && (
        <animated.div className="events" style={springProps}>
          <h2>{selectedMonth.name}</h2>
          {selectedMonth.events.length > 0 ? (
            <ul>
              {selectedMonth.events.map((event, index) => (
                <li key={index} className="event-item">
                  {event}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              No events. Here's a funny quote: "Why did the scarecrow win an
              award? Because he was outstanding in his field!"
            </p>
          )}
        </animated.div>
      )}
    </div>
  );
};

export default Calendar;
