import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';
import './Ensance.css'

const Timeforensance = ({ targetDate }) => {
   
    

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
        
          

          <div className='time-div'>
<div className='hours'>
<p id='num'>{timeLeft.hours || '0'}</p>
<p id='day'>Hours</p>
</div>
<div className='days'>
<p id='num'>{timeLeft.days || '0'}</p>
<p id='day'>Days</p>
</div>
<div className='mints'>
<p id='num'>{timeLeft.minutes || '0'}</p>
<p id='day'>Minutes</p>
</div>
<div className='second'>
<p id='num'>{timeLeft.seconds || '0'}</p>
<p id='day'>second</p>
</div>
        </div>
        </div>
      );
    };

export default Timeforensance
