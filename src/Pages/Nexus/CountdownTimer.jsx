import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';
import nexus_logo from '../../assets/nexus-funky-logo.png';
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('October 18, 2024 00:00:00 GMT+0530'); // 18th Oct 12:00 AM IST
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)), // Convert total milliseconds to hours
        minutes: Math.floor((difference / (1000 * 60)) % 60), // Remaining minutes
        seconds: Math.floor((difference / 1000) % 60), // Remaining seconds
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
    {timeLeft.hours !== undefined ?
   ( <>
    
     
    <img src={nexus_logo} className="nexus-funky-logo"></img>
      <div className="time-display drop-shadow-[0_4px_10px_#9375c6]">
        {timeLeft.hours !== undefined
          ? `${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`
          : <></>}
      </div>
      
      </>)
       :(<></>) }
       </>
  );
};

export default CountdownTimer;
