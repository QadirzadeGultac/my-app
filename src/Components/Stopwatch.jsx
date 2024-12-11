import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className='second'>
      <h1>{seconds}</h1>
      <div>
      <button className='second-button' onClick={handleStart}>Başlat</button>
      <button className='second-button' onClick={handleStop}>Dayandır</button>
      <button className='second-button' onClick={handleReset}>Sıfırla</button>
      </div>
    </div>
  );
};

export default Stopwatch;
