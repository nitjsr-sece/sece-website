import React, { useState } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const monthsData = [
  {
    name: "August",
    year: 2026,
    days: 31,
    startDay: 6,
    events: [{ startDate: 29, endDate: 30, name: "SECE Inductions (2025 Batch)" }],
  },
  {
    name: "September",
    year: 2026,
    days: 30,
    startDay: 2,
    events: [{ startDate: 5, endDate: 5, name: "CP Contest (Problem Solving)" }],
  },
  {
    name: "October",
    year: 2026,
    days: 31,
    startDay: 4,
    events: [{ startDate: 3, endDate: 3, name: "SECE-Photoshoot" }],
  },
  {
    name: "November",
    year: 2026,
    days: 30,
    startDay: 0,
    events: [{ startDate: 20, endDate: 22, name: "Nexus Fest - Flagship Fest of ECE" }],
  },
  {
    name: "December",
    year: 2026,
    days: 31,
    startDay: 2,
    events: [],
  },
  {
    name: "January",
    year: 2027,
    days: 31,
    startDay: 5,
    events: [
      { startDate: 9, endDate: 9, name: "Intern Diaries" },
      { startDate: 16, endDate: 16, name: "Core & Non-Core Workshop" },
    ],
  },
  {
    name: "February",
    year: 2027,
    days: 28,
    startDay: 1,
    events: [
      { startDate: 6, endDate: 6, name: "Fun Event" },
      { startDate: 13, endDate: 13, name: "CP Team Induction" },
    ],
  },
  {
    name: "March",
    year: 2027,
    days: 31,
    startDay: 1,
    events: [
      { startDate: 20, endDate: 20, name: "Sports Fun Event (SECE Members Only)" },
      { startDate: 27, endDate: 27, name: "CP Workshop - 1 (STL, Binary Search)" },
    ],
  },
  {
    name: "April",
    year: 2027,
    days: 30,
    startDay: 4,
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
    startDay: 6,
    events: [{ startDate: 1, endDate: 29, name: "Placement Master Class Series" }],
  },
  {
    name: "June",
    year: 2027,
    days: 30,
    startDay: 2,
    events: [{ startDate: 19, endDate: 20, name: "CP Workshop - 2 (Advance Topics)" }],
  },
];

const CalendarPage = () => {
  const [monthIdx, setMonthIdx] = useState(3); // Defaults to November 2026
  const currentMonth = monthsData[monthIdx];
  const [selectedDay, setSelectedDay] = useState(20);

  const handlePrevMonth = () => {
    setMonthIdx((prev) => (prev === 0 ? monthsData.length - 1 : prev - 1));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setMonthIdx((prev) => (prev === monthsData.length - 1 ? 0 : prev + 1));
    setSelectedDay(null);
  };

  const calendarDays = [];
  for (let i = 0; i < currentMonth.startDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= currentMonth.days; day++) {
    calendarDays.push(day);
  }

  // Find active event for current or selected day
  const getEventForDay = (day) => {
    if (!day) return null;
    return currentMonth.events.find(
      (ev) => day >= ev.startDate && day <= ev.endDate
    );
  };

  const selectedEvent =
    getEventForDay(selectedDay) ||
    (currentMonth.events.length > 0 ? currentMonth.events[0] : null);

  return (
    <PirateLayout activeNav="Events">
      <div className="max-w-2xl mx-auto py-4 animate-fade-in-up">
        <ParchmentScroll>
          <div className="text-center mb-3">
            <h1 className="font-fondamento italic text-2xl sm:text-3xl font-bold text-[#2a1708]">
              Events Calendar 2026-27
            </h1>

            {/* Month Navigator */}
            <div className="flex items-center justify-center gap-5 mt-2.5 text-xs sm:text-sm font-cinzel font-bold text-[#1e1005]">
              <button
                onClick={handlePrevMonth}
                className="hover:text-[#9c7333] transition-transform hover:scale-125 active:scale-95 p-1.5 cursor-pointer"
                title="Previous month"
                aria-label="Previous month"
              >
                <FaChevronLeft size={13} />
              </button>

              <span className="tracking-wide min-w-[140px] text-center">
                {currentMonth.name} {currentMonth.year}
              </span>

              <button
                onClick={handleNextMonth}
                className="hover:text-[#9c7333] transition-transform hover:scale-125 active:scale-95 p-1.5 cursor-pointer"
                title="Next month"
                aria-label="Next month"
              >
                <FaChevronRight size={13} />
              </button>
            </div>
          </div>

          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 text-center font-cinzel text-xs font-semibold text-[#543b22] py-1 border-b border-[#ab854a]/30">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>

          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs sm:text-sm font-sans pt-2">
            {calendarDays.map((day, idx) => {
              if (day === null) {
                return <div key={`empty-${idx}`} className="h-9" />;
              }

              const eventOnDay = getEventForDay(day);
              const isSelected = selectedDay === day;

              return (
                <div key={`day-${day}`} className="h-9 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedDay(day)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-2 border-[#8a602a] bg-[#e8be70] text-[#1a0f05] font-bold shadow-md scale-105"
                        : eventOnDay
                        ? "border border-[#b88c3a] bg-[#f0d191]/80 text-[#1a1005] font-semibold hover:scale-105 shadow-sm"
                        : "text-[#2e1f13] hover:bg-[#ebd5a7]/50"
                    }`}
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Event description */}
          <div className="mt-4 pt-3 border-t border-[#ab854a]/20 text-center text-xs font-serif text-[#54381e]">
            {selectedEvent ? (
              <span className="font-semibold italic">
                {selectedEvent.startDate === selectedEvent.endDate
                  ? `${currentMonth.name} ${selectedEvent.startDate}: ${selectedEvent.name}`
                  : `${currentMonth.name} ${selectedEvent.startDate}-${selectedEvent.endDate}: ${selectedEvent.name}`}
              </span>
            ) : (
              <span className="italic text-[#785938]">
                No society events scheduled for this date.
              </span>
            )}
          </div>
        </ParchmentScroll>
      </div>
    </PirateLayout>
  );
};

export default CalendarPage;
