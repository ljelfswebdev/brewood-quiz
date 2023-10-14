import React, { useState } from 'react';

const Question = ({ item }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(prevShowAnswer => !prevShowAnswer);
    };

    return (
        <div className="page__slide">
            <h2 className="page__slide-title">Question {item.id} - {item.question}</h2>
            <span className="page__slide-reveal" onClick={toggleAnswer}>
                {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </span>
            <p className={`page__slide-answer ${showAnswer ? 'page__slide-answer-show' : ''}`}>
                {item.answer}
            </p>
        </div>
    );
};

export default Question;
