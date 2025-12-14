import React, { useEffect, useState } from 'react';
import './style.css';

function TrafficLight() {

    const [activeColor, setActiveColor] = useState('green');
    const [count, setCount] = useState(10);
    const [startFrom, setStartFrom] = useState('green');

    useEffect(() => {

        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)

        if(count === 3 && (activeColor === 'green' || activeColor === 'red')){
            setActiveColor('orange');
        }

        if(count === 0 && activeColor === 'orange' && startFrom === 'green'){
            setActiveColor('red');
            setCount(20);
            setStartFrom('red')
            // clearInterval(timer);
        }

        if(count === 0 && activeColor === 'orange' && startFrom === 'red'){
            setActiveColor('green');
            setCount(10);
            setStartFrom('green')
        }

        return () => clearInterval(timer);

    }, [count])

    return (
        <div>
            <p>Traffic Light</p>

            <div className='tl-container'>
                <div className={`circular-light ${activeColor === 'green' ? 'green' : ''}`}></div>
                <div className={`circular-light ${activeColor === 'orange' ? 'orange' : ''}`}></div>
                <div className={`circular-light ${activeColor === 'red' ? 'red' : ''}`}></div>
            </div>

            <div>{count}</div>

        </div>
    )
}

export default TrafficLight