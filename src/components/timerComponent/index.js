import React, { useEffect, useState } from 'react'

function TimerComponent() {

    const [time, setTime] = useState(0);

    const pad = (value) => {
        return String(value).padStart(2, "0");
    }

    const createTime = (value) => {

        const milliSecond = value;
        const second = Math.floor(milliSecond/1000);
        const minutes = Math.floor(second/60);

        return `${pad(minutes)}:${pad(second)}:${pad(milliSecond)}`
    }

    useEffect(() => {

        const start = performance.now();

        setInterval(() => {

            setTime(performance.now() - start);
            
        }, 10);
        // we have used 10ms here because it is not possible for browser to reliably execute a callback after every 1ms and since we are using performance.now(), 
        // the drift is avoided

    }, [])

  return (
    <div>
        <p>Timer</p>
        <p>{createTime(time)}</p>

    </div>
  )
}   

export default TimerComponent