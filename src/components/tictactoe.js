import React, { useEffect, useState } from 'react';
const horizontalRow0 = ['0-0', '0-1', '0-2'];
const horizontalRow1 = ['1-0', '1-1', '1-2'];
const horizontalRow2 = ['2-0', '2-1', '2-2'];
const verticalcolumn0 = ['0-0', '1-0', '2-0'];
const verticalcolumn1 = ['0-1', '1-1', '2-1'];
const verticalcolumn2 = ['0-2', '1-2', '2-2'];
const diagonalColumn0 = ['0-0', '1-1', '2-2'];
const diagonalColumn1 = ['0-2', '1-1', '2-0'];

function Tictactoe() {
    const [parentArr, setParentArr] = useState([[0,0,0],[0,0,0],[0,0,0]]);
    const [currentClickValue, setCurrentClickValue] = useState('X');
    const [filledCell, setFilledCell] = useState([]);
    const [activePlayer, setActivePlayer] = useState('Player 1');

    const handleCellClick = (event) => {

        if(event.target.innerText){
            return;
        }

        

        console.log("cell clicked", event.target, event.target.id, event.target.innerText)
        if(!event.target.innerText){
            event.target.innerText = currentClickValue;
            setFilledCell([...filledCell, event.target.id]);
        }

        

        setCurrentClickValue(currentClickValue === 'X' ? 'O' : 'X');
        if(checkWinner()){

        }
        setActivePlayer(activePlayer === 'Player 1' ? 'Player 2' : 'Player 1');


    }

    const drawBoard = () => {
        return parentArr.map((rows, rowIndex) => {
            return(
                <div className='row'>
                {rows.map((cells, cellIndex) => {
                    return (
                        <div className='cell' id={rowIndex + '-' + cellIndex} onClick={handleCellClick}></div>

                    )
                })}
                </div>
            )
        })
    }

    const checkWinner = (filledArr) => {

        // if(horizontalRow0)

        return false;
    }

    useEffect(() => {
        console.log("winner check =>", filledCell)
        checkWinner(filledCell);

    }, [filledCell])


  return (
    <div>
        <p>Tic-Tac-Toe</p>
        <p>{activePlayer} Turn</p>
        <div className='board'>
        {drawBoard()}
        </div>



    </div>
  )
}

export default Tictactoe