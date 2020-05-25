import React, { useState, useEffect } from 'react';

function Timer() {
    const [startTime] = useState(Date.now());
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
        return () => clearInterval(timerId);
    }, [startTime]);

    return (
        <p>{elapsed}</p>
    );
}

export default Timer;
