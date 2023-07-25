import React, { useState, useEffect } from 'react';
import './ExamTimer.css'; // Import custom styles for the component

const Timer = () => {
  const initialTime = 30 * 60; // 30 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getColor = () => {
    // Generate a random color in HEX format
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  };

  const timerColor = getColor();

  return (
    <div className="exam-timer">
      <div className="time-remaining" style={{ color: timerColor }}>
        {formatTime(timeRemaining)}
      </div>
    </div>
  );
};

export default Timer;
