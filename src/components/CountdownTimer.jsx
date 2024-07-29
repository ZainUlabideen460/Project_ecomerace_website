
import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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
    <div className="countdown-timer">
      <div className="countdown-heading">
        <span id='days'>Days </span>
        <span id='hours'>Hours </span>
        <span>Minutes </span>
        <span>Seconds </span>
      </div>
      <div className="countdown-values">
        <div>{timeLeft.days || '0'} <span id='dot-id'>:</span></div>
        <div>{timeLeft.hours || '0'}<span id='dot-id'>:</span> </div>
        <div>{timeLeft.minutes || '0'}<span id='dot-id'>:</span> </div>
        <div>{timeLeft.seconds || '0'}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
