import React, { useState, useEffect } from 'react';

const Question = ({ item, isActive, is_image_round, folder }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(prevShowAnswer => !prevShowAnswer);
    };

    // Reset the answer visibility when the slide is no longer active
    useEffect(() => {
        if (!isActive) {
            setShowAnswer(false);
        }
    }, [isActive]);

    return (
        <div className="page__slide">
            <h2 className="page__slide-title">Question {item.id}</h2>

            {is_image_round ? (
                // Display image-based question
                <img 
                    className="page__slide-image page__slide-image--flag" 
                    src={`${folder}/${item.question}`} 
                    alt={`Question ${item.id}`} 
                />
            ) : (
                // Display text-based question
                <p className="page__slide-text">{item.question}</p>
            )}

            <span className="page__slide-reveal" onClick={toggleAnswer}>
                {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </span>

            {isActive && (
                <p className={`page__slide-answer ${showAnswer ? 'page__slide-answer-show' : ''}`}>
                    {item.answer}
                </p>
            )}
        </div>
    );
};

export default Question;
