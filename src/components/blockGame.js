import React, { useState } from 'react'

function BlockGame() {
    const [data, setData] = useState(Array(20).fill({clicked: false}));
  return (
    <div className='block-game-container'>

        {data.map((_, index)=>{
            return(
                <div className={`cell`} key = {index}></div>
            )
        })}

    </div>
  )
}

export default BlockGame