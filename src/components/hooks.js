import React, { useState } from 'react'
import usePrevious from '../hooks/usePrevious';

function Hooks() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
  return (
    <>
    <div>count = {count}</div>
    <div>Prev count = {prevCount}</div>
    <button onClick={setCount.bind(this, (count+2))}>Click Me</button>
    </>
  )
}

export default Hooks