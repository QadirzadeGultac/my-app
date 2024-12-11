import React from 'react'
import { useState, useEffect } from 'react'
import './Watch.css' 
const Watch = () => {
    const [currentTime, setCurrentTime] = useState({
        hours: new Date().getHours(), 
        minutes: new Date().getMinutes(), 
        seconds: new Date().getSeconds(),
    });
    useEffect(() => { 
        const interval = setInterval(() => { 
            const now = new Date(); 
            setCurrentTime({ 
                hours: now.getHours(), 
                minutes: now.getMinutes(), 
                seconds: now.getSeconds(), 
            }); 
        }, 1000); 
        return () => clearInterval(interval); 
    }, []);
  return (
    <div className='watch'> 
        <h1>{currentTime.hours}:</h1> 
        <h1>{currentTime.minutes.toString().padStart(2, '0')}:</h1>
        <h1>{currentTime.seconds.toString().padStart(2, '0')}</h1>
        </div>
  )
}

export default Watch;
