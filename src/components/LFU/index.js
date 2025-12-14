import React, { useEffect, useRef, useState } from 'react'

function LeastFrequentlyUsed() {
    const[first, setFirst] = useState();
    const[second, setSecond] = useState();
    const[sum, setSum] = useState();
    const[cache, setCache] = useState(new Map());
    const maxSize = useRef(3);


    const handleFirstNumber = (e) => {
        setFirst(e.target.value);
    };

    const handleSecondNumber = (e) => {
        setSecond(e.target.value);
    };

    const handleSum = () => {

        const cacheKey = `${first} + ${second}`;
        const newCache = new Map(cache);
        let result;

        if(newCache.has(cacheKey)){
            let obj = newCache.get(cacheKey);
            result = obj.value;
            obj.frequency = obj.frequency + 1;
            newCache.set(cacheKey, obj)
            setSum(result);
        }
        else{
            const value = Number(first) + Number(second);
            if(maxSize.current <= cache.size){
                // delete lfu
                let lfuKey;
                let frequency = Infinity;

                for(const [key, value] of newCache.entries()){
                    console.log("key", key, value);
                    if(value.frequency < frequency){
                        frequency = value.frequency;
                        lfuKey = key;
                    }
                }

                if(lfuKey){
                    newCache.delete(lfuKey);
                }
            }
            newCache.set(cacheKey, {value: value, frequency: 1});
            result = value;
        }

        setSum(result);
        setCache(newCache);
    };

    // useEffect(() => {

    //     console.log("cache", cache)

    // }, [cache])


    return (
        <div>
            <p>LFU</p>
            <input type='number' onChange={handleFirstNumber} />
            <input type='number' onChange={handleSecondNumber} />
            <button onClick={handleSum}>Add</button>

            <p>Result: {sum}</p>
        </div>
    )
}

export default LeastFrequentlyUsed