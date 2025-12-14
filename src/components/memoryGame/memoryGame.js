import React, { useEffect, useState } from 'react';
import Card from './card';
import './style.css';

function MemoryGame() {
    const EMOJIS = ['🧠', '🚀', '⭐', '🤖', '🎉', '💡', '🏆', '🧩'];
    const [cardList, setCardList] = useState([]);
    const [cardsFlipped, setCardsFlipped] = useState([]);
    const [firstCard, setFirstcard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [flip, setFlip] = useState();

    const startGame = () => {
        const arr = EMOJIS.concat(EMOJIS).sort(() => Math.random() - 0.5);
        setCardList(arr);
        setCardsFlipped([]);
        setFirstcard(null);
        setSecondCard(null);
    }

    const cardClicked = (order) => {
        if(firstCard === null && secondCard === null) {
            setFirstcard(order)
        }
        else if(firstCard !== null && secondCard === null){
            setSecondCard(order)
        }
    }

    const reset = () => {
        startGame();
    }


    useEffect(() => {

        startGame()

    }, [])

    useEffect(() => {
        let timer;
        if(firstCard !== null && secondCard !== null){
            if(cardList[firstCard] === cardList[secondCard]){
                console.log("set flip cardsss ")
                setCardsFlipped([...cardsFlipped, firstCard, secondCard])
            }

            console.log("clear fc sc")
            timer = setTimeout(() => {

            console.log("clear fc sc in timer")

                setFirstcard(null);
                setSecondCard(null);
            }, 500)
            
        }

        return () => {
            clearTimeout(timer);
        }

    }, [secondCard])

    useEffect(() => {

        console.log("cardsflipped", cardsFlipped)

    }, [cardsFlipped])

    useEffect(() => {

        console.log("fc sc", firstCard, secondCard)

    }, [firstCard, secondCard])



    return (
        <div>
            <p>Memory Game</p>

            <div className='main-board'>
                {cardList.map((card, index) => {
                    return (
                        <Card key={index} data={card} order={index} handleClick={cardClicked} cardsFlipped={cardsFlipped}
                        flip={flip} setFlip={setFlip} firstCard={firstCard} secondCard={secondCard}/>
                    )
                })}
            </div>

            <button className='reset' onClick={reset}>Reset</button>
        </div>
    )
}

export default MemoryGame