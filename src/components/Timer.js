import React, { useState, useEffect } from 'react';

function Timer() {
  const [startTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setElapsed(Math.floor((Date.now() - startTime) / 1000)),
      1000
    );
    return () => clearInterval(timerId);
  }, [startTime]);

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  return (
    <p className="timer">
      {minutes}:{('' + seconds).padStart(2, '0')}
    </p>
  );
}

export default Timer;
