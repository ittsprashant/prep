import React, { useEffect, useState } from 'react'

function MultiInput() {
    const [data, setData] = useState([{id: Date.now(), value: ''}]);
    const [duplicateData, setDuplicateData] = useState(new Set());

    const handleAddInput = () => {
        setData([...data, {id: Date.now(), value: ''}]);
    };

    const handleDeleteInput = (position) => {
        let copiedData = [...data];
        copiedData.splice(position, 1);
        setData(copiedData);
    };

    const handleChange = (e, index) => {
        let copiedData = [...data];
        copiedData[index] = {...copiedData[index], value: e.target.value};
        
        setData(copiedData);

    };

    const hasDuplicateValues = (object) => {

        console.log("find===>", duplicateData)

        if(duplicateData.has(object.value) && object.value !== ""){
            return true;
        }

        return false;
    }

    useEffect(() => {

        let originalSet = new Set(data);
        let duplicateSet = new Set();
        let tempSet = new Set();

        originalSet.forEach((item, index) => {

            if(tempSet.has(item.value)){
                duplicateSet.add(item.value)
            }
            else{
                tempSet.add(item.value)
            }
        })

        setDuplicateData(duplicateSet)

    }, [data])


  return (
    <div>
        <p>Multiple Input Question</p>
        {data.map((item, index) => {
            const isDuplicate = hasDuplicateValues(item);
            return (
                <div key={item.id}>
                    <input className={'input-box ' + (isDuplicate ? 'border-red' : "")} onChange={(e) => handleChange(e, index)}/>
                    {data.length < 5 && <button onClick={handleAddInput}>+</button>}
                    {data.length > 1 && <button onClick={() => handleDeleteInput(index)}>-</button>}
                </div>
            )
        })}
    </div>
  )
}

export default MultiInput