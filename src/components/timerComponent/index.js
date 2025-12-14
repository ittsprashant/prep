import React, { useEffect, useState } from 'react'

function TimerComponent() {

    const [time, setTime] = useState(0);

    const pad = (value) => {
        return String(value).padStart(2, "0");
    }

    const createTime = (value) => {

        const milliSecond = Math.floor(value);
        const second = Math.floor(milliSecond/1000);
        const minutes = Math.floor(second/60);

        return `${pad(minutes)}:${pad(second)}:${pad(milliSecond)}`
    }

    useEffect(() => {

        const start = performance.now();

        setInterval(() => {

            setTime(performance.now() - start);
            
        }, 10);

    }, [])

  return (
    <div>
        <p>Timer</p>
        <p>{createTime(time)}</p>

    </div>
  )
}   

export default TimerComponent