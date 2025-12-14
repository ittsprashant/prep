import React, { useEffect, useRef, useState } from 'react';
import './style/transferList.css';

function TransferList() {
    const DATA = [
        { id: 1, label: "HTML", isChecked: false, layout: "left" },
        { id: 2, label: "CSS", isChecked: false, layout: "left" },
        { id: 3, label: "JAVASCRIPT", isChecked: false, layout: "left" },
        { id: 4, label: "TYPESCRIPT", isChecked: false, layout: "left" },
        { id: 5, label: "REACT", isChecked: false, layout: "right" },
        { id: 6, label: "ANGULAR", isChecked: false, layout: "right" },
        { id: 7, label: "VUE", isChecked: false, layout: "right" },
        { id: 8, label: "SVELTE", isChecked: false, layout: "right" },
      ];

      const [leftCol, setLeftCol] = useState([]);
      const [rightCol, setRightCol] = useState([]);
      const leftRef = useRef();
      const rightRef = useRef();

      const handleLeftColInput = (e) => {
        // console.log("value", e.target.value)

      };

      const handleRightColInput = () => {

      };

      const handleCheckbox = (e, item, column) => {

        console.log("item", item, column, e.target.checked)
        if(column === 'leftCol'){
            if(e.target.checked){
                leftRef.current = [...leftRef.current, item]
            }

        }

        console.log("reff", leftRef.current)

      };

      const handleMoveToLeft = () => {

      }

      const handleMoveToRight = () => {

      }
    
      useEffect(() => {

        setLeftCol(DATA.filter(item => item.layout === 'left'))
        setRightCol(DATA.filter(item => item.layout === 'right'))
        // leftRef.current.data = [];

      }, [])
  return (
    <div className='main-container'>
        <p>Transfer Lists</p>

        <div className='section'>
            <div className='left-col'>
                <input type='text' onChange={(e)=>handleLeftColInput(e)}/>
                {leftCol.map((item, index) => {
                    return (
                        <div key={item.id} className='item'>
                        <input type='checkbox' onChange={(e)=>handleCheckbox(e, item, 'leftCol')}/>
                        <p>{item.label}</p>
                        </div>
                    )
                })}

            </div>

            <div className='separator'>
                <button onClick={handleMoveToLeft}>Move To Left</button>
                <button onClick={handleMoveToRight}>Move To Right</button>
            </div>


            <div className='right-col'>
            <input type='text' onChange={()=>handleRightColInput()}/>
                {rightCol.map((item, index) => {
                    return (
                        <div key={item.id} className='item'>
                        <input type='checkbox' onChange={()=>handleCheckbox(item, 'rightCol')}/>
                        <p>{item.label}</p>
                        </div>
                    )
                })}
            </div>
        </div>


    </div>
  )
}

export default TransferList