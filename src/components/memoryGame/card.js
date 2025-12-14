import React, { useState } from 'react'

function Card(props) {
    const { data = '', order = '', handleClick, cardsFlipped = [], firstCard, secondCard } = props;
    // const [flip, setFlip] = useState();

    const handleCardClick = () => {
        // setFlip(order);
        handleClick(order);
    }

    return (
        <div className='memory-cell' onClick={handleCardClick}>
            <div className={'card-front ' + ((firstCard === order || secondCard === order) || (cardsFlipped.includes(order)) ? 'flipped' : '')}>
                {data}
            </div>
            <div className={'card-back ' + ((firstCard === order || secondCard === order) || (cardsFlipped.includes(order)) ? 'hidden' : '')}>
            </div>
        </div>
    )
}

export default Card