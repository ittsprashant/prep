import React, { useMemo, useState } from 'react'

function OptimizedMultiInput() {
    const [data, setData] = useState([{id: Date.now(), value: ""}]);

    const handleAddInput = () => {
        const prevData = [...data];
        prevData.push({id: Date.now(), value: ""});
        setData(prevData);
    };

    const handleRemoveInput = (position) => {
        const prevData = [...data];
        prevData.splice(position, 1);
        setData(prevData)
    };

    const isDuplicateItem = useMemo(() => {

        const duplicateSet = new Set();
        const dataSet = new Set(data);
        const tempSet = new Set();

        for(const item of dataSet){

            if(!item.value){
                continue;
            }


            if(tempSet.has(item.value)){
                duplicateSet.add(item.value);
            }
            else{
                tempSet.add(item.value)
            }
        }

        return duplicateSet;

    }, [data]);

    const handleChange = (e, position) => {
        const prevData = [...data];
        prevData[position] = {...prevData[position], value: e.target.value};
        setData(prevData)
    }

  return (
    <div>
        <p>optimizedIndex</p>
        {data.map((item, index) => {
            const duplicateSet = isDuplicateItem;
            const isDuplicate = duplicateSet.has(item.value);
            return (
                <div key={item.id}>
                    <input className={'input-box ' + (isDuplicate ? 'border-red' : '')} onChange={(e) => handleChange(e, index)} value={item.value}/>
                    {data.length < 5 && <button onClick={handleAddInput}>+</button>}
                    {data.length > 1 && <button onClick={() => handleRemoveInput(index)}>-</button>}
                </div>
            )
        })}
    </div>
  )
}

export default OptimizedMultiInput