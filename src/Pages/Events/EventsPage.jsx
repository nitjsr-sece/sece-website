import React, { useState } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";
import events from "./Events";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";

const monthsData = [
  {
    name: "August",
    year: 2026,
    days: 31,
    startDay: 6, // Saturday
    events: [
      { startDate: 29, endDate: 30, name: "SECE Inductions (2025 Batch)" },
    ],
  },
  {
    name: "September",
    year: 2026,
    days: 30,
    startDay: 2, // Tuesday
    events: [
      { startDate: 5, endDate: 5, name: "CP Contest (Problem Solving)" },
    ],
  },
  {
    name: "October",
    year: 2026,
    days: 31,
    startDay: 4, // Thursday
    events: [
      { startDate: 3, endDate: 3, name: "SECE-Photoshoot" },
    ],
  },
  {
    name: "November",
    year: 2026,
    days: 30,
    startDay: 0, // Sunday
    events: [
      { startDate: 20, endDate: 22, name: "Nexus" },
    ],
  },
  {
    name: "December",
    year: 2026,
    days: 31,
    startDay: 2, // Tuesday
    events: [],
  },
  {
    name: "January",
    year: 2027,
    days: 31,
    startDay: 5, // Friday
    events: [
      { startDate: 9, endDate: 9, name: "Intern Diaries" },
      { startDate: 16, endDate: 16, name: "Core & Non-Core Workshop" },
    ],
  },
  {
    name: "February",
    year: 2027,
    days: 28,
    startDay: 1, // Monday
    events: [
      { startDate: 6, endDate: 6, name: "Fun Event" },
      { startDate: 13, endDate: 13, name: "CP Team Induction" },
    ],
  },
  {
    name: "March",
    year: 2027,
    days: 31,
    startDay: 1, // Monday
    events: [
      { startDate: 20, endDate: 20, name: "Sports Fun Event (SECE Members Only)" },
      { startDate: 27, endDate: 27, name: "CP Workshop - 1 (STL, Binary Search)" },
    ],
  },
  {
    name: "April",
    year: 2027,
    days: 30,
    startDay: 4, // Thursday
    events: [
      { startDate: 3, endDate: 3, name: "Cricket Tournament" },
      { startDate: 10, endDate: 10, name: "VLSI Workshop" },
      { startDate: 17, endDate: 17, name: "CP Contest (Problem Solving)" },
    ],
  },
  {
    name: "May",
    year: 2027,
    days: 31,
    startDay: 6, // Saturday
    events: [
      { startDate: 1, endDate: 1, name: "Placement Master Class" },
      { startDate: 8, endDate: 8, name: "Placement Master Class" },
      { startDate: 15, endDate: 15, name: "Placement Master Class" },
      { startDate: 22, endDate: 22, name: "Placement Master Class" },
      { startDate: 29, endDate: 29, name: "Placement Master Class" },
    ],
  },
  {
    name: "June",
    year: 2027,
    days: 30,
    startDay: 2, // Tuesday
    events: [
      { startDate: 19, endDate: 20, name: "CP Workshop - 2 (Advance Topics)" },
    ],
  },
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EventsPage = () => {
  // 1. Event Showcase Carousel State
  const [currentEventIdx, setCurrentEventIdx] = useState(0);
  const activeEvent = events[currentEventIdx] || events[0];

  const handlePrevEvent = () => {
    setCurrentEventIdx((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNextEvent = () => {
    setCurrentEventIdx((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  // 2. Full Horizontal Calendar State (defaults to November 2026, index 3)
  const [monthIdx, setMonthIdx] = useState(3);
  const currentMonth = monthsData[monthIdx];
  const [selectedEvent, setSelectedEvent] = useState(
    currentMonth.events.length > 0 ? currentMonth.events[0] : null
  );
  const [clickedDate, setClickedDate] = useState(
    currentMonth.events.length > 0 ? currentMonth.events[0].startDate : null
  );

  const handlePrevMonth = () => {
    const nextIdx = monthIdx === 0 ? monthsData.length - 1 : monthIdx - 1;
    setMonthIdx(nextIdx);
    const newMonth = monthsData[nextIdx];
    if (newMonth.events.length > 0) {
      setSelectedEvent(newMonth.events[0]);
      setClickedDate(newMonth.events[0].startDate);
    } else {
      setSelectedEvent(null);
      setClickedDate(null);
    }
  };

  const handleNextMonth = () => {
    const nextIdx = monthIdx === monthsData.length - 1 ? 0 : monthIdx + 1;
    setMonthIdx(nextIdx);
    const newMonth = monthsData[nextIdx];
    if (newMonth.events.length > 0) {
      setSelectedEvent(newMonth.events[0]);
      setClickedDate(newMonth.events[0].startDate);
    } else {
      setSelectedEvent(null);
      setClickedDate(null);
    }
  };

  const handleDateClick = (event, date) => {
    setSelectedEvent(event);
    setClickedDate(date);
  };

  return (
    <PirateLayout activeNav="Events">
      <div className="max-w-6xl mx-auto py-3 px-2 sm:px-4 flex flex-col space-y-6 sm:space-y-10">
        {/* ============================================================== */}
        {/* 1. TOP ROW: ABOUT SOCIETY (Authentic Parchment Scroll)          */}
        {/* ============================================================== */}
        <section className="w-full">
          <ParchmentScroll className="w-full">
            <div className="text-center px-2 sm:px-6">
              <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1a0f05] tracking-wider mb-3 drop-shadow-sm">
                About ECE Society
              </h2>

              <p className="text-[#2c1a0d] text-sm sm:text-base leading-relaxed text-center sm:text-justify max-w-5xl mx-auto font-sans font-medium">
                The Society of Electronics and Communication Engineering (ECE) is dedicated to
                fostering technical innovation, creativity, and hands-on learning among
                students. Every year, the ECE Society organizes a diverse range of events that
                cater to the technical and creative interests of its members. From coding challenges
                to exciting electronics-based activities, the society's events are designed to engage
                students in real-world problem solving while promoting teamwork, innovation, and fun.
              </p>
            </div>
          </ParchmentScroll>
        </section>

        {/* ============================================================== */}
        {/* 2. MIDDLE ROW: EVENT SHOWCASE (Authentic Parchment Scroll)       */}
        {/* ============================================================== */}
        <section className="w-full">
          <ParchmentScroll className="w-full">
            <div className="flex flex-col md:flex-row items-center gap-6 w-full py-1">
              {/* Left Column: Event Photo */}
              <div className="group w-full md:w-1/2 h-[260px] sm:h-[320px] rounded-xl overflow-hidden border-2 border-[#7a5423] shadow-md relative flex-shrink-0 bg-[#160f08]">
                <img
                  src={activeEvent.image}
                  alt={activeEvent.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>

              {/* Right Column: Title with < > Arrows + Underline + Description */}
              <div className="w-full md:w-1/2 flex flex-col justify-between self-stretch">
                <div>
                  {/* Header with Previous arrow, Event Title with underline, Next arrow */}
                  <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-[#8a602a]/40">
                    <button
                      onClick={handlePrevEvent}
                      className="text-[#4a2e12] hover:text-[#966d31] hover:scale-125 active:scale-95 transition-all p-2 cursor-pointer focus:outline-none"
                      title="Previous Event"
                      aria-label="Previous Event"
                    >
                      <FaChevronLeft size={20} />
                    </button>

                    <div className="text-center flex-1">
                      <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-[#1a0f05] tracking-wide relative inline-block pb-1">
                        {activeEvent.name}
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#7a5423] rounded-full" />
                      </h3>
                    </div>

                    <button
                      onClick={handleNextEvent}
                      className="text-[#4a2e12] hover:text-[#966d31] hover:scale-125 active:scale-95 transition-all p-2 cursor-pointer focus:outline-none"
                      title="Next Event"
                      aria-label="Next Event"
                    >
                      <FaChevronRight size={20} />
                    </button>
                  </div>

                  {/* Event Description */}
                  <p className="mt-4 text-[#2b1a0e] text-sm sm:text-[15px] leading-relaxed font-sans text-left font-medium">
                    {activeEvent.description}
                  </p>
                </div>

                {/* Event Counter & Indicator Dots */}
                <div className="mt-6 pt-3 border-t border-[#8a602a]/30 flex items-center justify-between text-xs text-[#5c3e1c]">
                  <span className="font-cinzel font-bold">
                    Event {currentEventIdx + 1} of {events.length}
                  </span>

                  <div className="flex gap-1.5">
                    {events.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentEventIdx(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          idx === currentEventIdx
                            ? "w-6 bg-[#634017]"
                            : "w-2 bg-[#b89562] hover:bg-[#8a602a]"
                        }`}
                        aria-label={`Jump to event ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ParchmentScroll>
        </section>

        {/* ============================================================== */}
        {/* 3. BOTTOM ROW: CALENDAR (Authentic Parchment Scroll Full Width)  */}
        {/* ============================================================== */}
        <section className="w-full">
          <ParchmentScroll className="w-full">
            <div className="w-full py-1">
              {/* Calendar Header: Title + Month Navigator */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#8a602a]/35">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-[#634017] text-2xl" />
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#1a0f05] tracking-wide">
                    Events Calendar 2026-27
                  </h2>
                </div>

                {/* Month Navigator Controls */}
                <div className="flex items-center gap-4 bg-[#ecd49d] px-5 py-1.5 rounded-full border border-[#8a602a] shadow-inner">
                  <button
                    onClick={handlePrevMonth}
                    className="text-[#4a2e12] hover:text-black hover:scale-125 transition-transform p-1 cursor-pointer focus:outline-none"
                    title="Previous Month"
                    aria-label="Previous Month"
                  >
                    <FaChevronLeft size={16} />
                  </button>

                  <span className="font-cinzel text-base sm:text-lg font-bold text-[#1b0e04] min-w-[160px] text-center">
                    {currentMonth.name} {currentMonth.year}
                  </span>

                  <button
                    onClick={handleNextMonth}
                    className="text-[#4a2e12] hover:text-black hover:scale-125 transition-transform p-1 cursor-pointer focus:outline-none"
                    title="Next Month"
                    aria-label="Next Month"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Days of Week Header across full width */}
              <div className="grid grid-cols-7 gap-2 sm:gap-3 text-center font-cinzel font-bold text-xs sm:text-sm text-[#4a2e12] pt-4 pb-2 border-b border-[#8a602a]/30">
                {daysOfWeek.map((day) => (
                  <div key={day} className="py-1">
                    {day}
                  </div>
                ))}
              </div>

              {/* Day Cells across 7 full-width columns */}
              <div className="grid grid-cols-7 gap-2 sm:gap-3 pt-3">
                {/* Empty padding days before start day */}
                {[...Array(currentMonth.startDay)].map((_, idx) => (
                  <div key={`empty-${idx}`} className="h-10 sm:h-14 rounded-lg bg-transparent" />
                ))}

                {/* Days of the month */}
                {[...Array(currentMonth.days)].map((_, day) => {
                  const currentDay = day + 1;
                  const eventsToday = currentMonth.events.filter(
                    (e) => currentDay >= e.startDate && currentDay <= e.endDate
                  );
                  const hasEvent = eventsToday.length > 0;
                  const isSelected = clickedDate === currentDay;

                  return (
                    <button
                      key={day}
                      onClick={() => {
                        if (hasEvent) {
                          handleDateClick(eventsToday[0], currentDay);
                        }
                      }}
                      className={`h-10 sm:h-14 rounded-lg flex flex-col items-center justify-center p-1 text-xs sm:text-sm font-semibold transition-all duration-150 ${
                        hasEvent
                          ? "bg-[#633f15] text-[#fff0c8] font-bold shadow-[0_4px_10px_rgba(99,63,21,0.5)] hover:scale-105 cursor-pointer ring-2 ring-[#a37233]"
                          : "bg-[#f5e3ba]/70 text-[#2c1a0c] hover:bg-[#ebd39d] cursor-default border border-[#caa165]/50"
                      } ${
                        isSelected && hasEvent
                          ? "ring-4 ring-[#1b0e04] scale-105 z-10"
                          : ""
                      }`}
                    >
                      <span className="leading-tight">{currentDay}</span>
                      {hasEvent && (
                        <span className="hidden sm:inline-block text-[10px] text-[#fde4aa] font-bold truncate max-w-full font-sans px-1 mt-0.5">
                          {eventsToday[0].name.split("(")[0]}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </ParchmentScroll>
        </section>
      </div>
    </PirateLayout>
  );
};

export default EventsPage;
