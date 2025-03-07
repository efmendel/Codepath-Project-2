import React from 'react';

function Flashcard(props) {
    return(
        <div className={`flashcard ${props.flip ? 'flipped' : ''}`} onClick={props.onClick}>
        <div className="flashcard-inner">
            <div className="flashcard-front">
                <p>{props.content.question}</p>
            </div>
            <div className="flashcard-back">
                <p>{props.content.answer}</p>
            </div>
        </div>
    </div>
    )
}

export default Flashcard;