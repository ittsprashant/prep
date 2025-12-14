import React, { useState, useRef } from 'react'

function Otp(props) {
    const {numberOfBoxes = 6, maskedCharacter = '*'} = props;
    const [data, setData] = useState(new Array(numberOfBoxes).fill(''));
    const inputRef = useRef([]);
    inputRef.current = data.map((_, i) => inputRef.current[i] ?? React.createRef());

    const updateChar = (value, position) => {
        setData(prev => {
            const newData = [...prev];
            newData[position] = value;

            return newData;
        });
    }

    const handleChange = (event, position) => {

        if(event.target.value){
            updateChar(event.target.value, position)

            if(position < data.length - 1){
                console.log("check==>", position, data.length)
                inputRef.current[position+1].current.focus();
            }
        }

    };

    const handleKeyDown = (event, position) => {

        console.log("key===>?", event.key, event.code)
        if(event.key === "Backspace"){
            if(data[position]){
                updateChar('', position)
            }
            else if(position > 0){
                inputRef.current[position-1].current.focus();

            }
        }

    }

  return (
    <div>
        {data.map((box, index) => {
            return <input className='otp-box' 
            ref={inputRef.current[index]} 
            key={index} 
            maxLength={1} 
            onChange={(e) => handleChange(e, index)} 
            onKeyDown={(e) => handleKeyDown(e, index)}
            value={data[index]}
            />;
        })}
        
    </div>
  )
}

export default Otp