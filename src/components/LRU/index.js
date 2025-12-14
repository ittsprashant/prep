import React, { useEffect, useRef, useState } from 'react'

function LeastRecentlyUsed() {
    const [sum, setSum] = useState();
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    const [cache, setCache] = useState(new Map());

    const maxSize = useRef(3);

    const handleFirstNumber = (e) => {
        setFirstNumber(e.target.value)
    }

    const handleSecondNumber = (e) => {
        setSecondNumber(e.target.value)
    }

    const handleSum = () => {
        // implement LRU here
        const first = Number(firstNumber);
        const second = Number(secondNumber);

        const cacheKey = `${first} + ${second}`

        let newCache = new Map(cache);

        if(newCache.has(cacheKey)){
            let value = newCache.get(cacheKey);
            setSum(value);
            newCache.delete(cacheKey);
            newCache.set(cacheKey, value);
            setCache(newCache);
        }
        else {

            let value = first + second;

            if(maxSize.current < newCache.size){
                // delete least recently used entry
                // newCache.keys().next().value;
                const oldestkey = newCache.keys().next().value;
                newCache.delete(oldestkey);
            }


            newCache.set(cacheKey, value);
            setSum(value);
            setCache(newCache);
        }

    }

    useEffect(() => {

        console.log("cache", cache, maxSize.current, cache.size)

    }, [cache])

  return (
    <div>
        <input type='number' onChange={handleFirstNumber}/>
        <input type='number' onChange={handleSecondNumber}/>
        <button onClick={handleSum}>Add</button>

        <p>Result: {sum}</p>
    </div>
  )
}

export default LeastRecentlyUsed