import React from 'react'

function IncrementButton({incrementHandler}) {

    console.log("in increment button")
  return (
    <div>
        <button onClick={incrementHandler}>Increment</button>
    </div>
  )
}

export default React.memo(IncrementButton);