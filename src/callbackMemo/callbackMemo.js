import React, { useState, useCallback } from 'react'
import useBoolean from '../hooks/useBoolean';
import IncrementButton from './incrementButton';

function CallbackMemo() {
    const [count, setCount] = useState(0);
    const {value, setTrue, setFalse} = useBoolean();

    const increment = useCallback(
      () => {
        console.log("increment clicked")
        setCount(count+1);
      },
      [count],
    )

    const incrementHandler = useCallback(() => {

        setCount(count+5)

    }, [count])

    // const incrementHandler = () => {
    //     setCount(count+5)
    // }
    

    // const increment = () => {
    //     console.log("increment clicked")
    //     setCount(count+1);
    // }

    const decrement = () => {
        console.log("decrement clicked")
        setCount(count-1);
    }

    
  return (
    <div>
        <p>Count = {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <IncrementButton incrementHandler={incrementHandler}/>

        <button onClick={setTrue}>True</button>
        {console.log("value===>", value)}
        <p>{value}</p>
        <button onClick={setFalse}>False</button>

    </div>
  )
}

export default CallbackMemo