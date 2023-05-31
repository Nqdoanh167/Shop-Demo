import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const [time, setTime] = useState(10000);

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
        return () => clearInterval(timer);
    }, [time]);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = time - hours * 3600 - minutes * 60;

    return (
        <>
            {hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </>
    );
}

export default CountdownTimer;
