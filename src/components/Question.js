import React, { memo } from 'react';
import styles from './Questions.module.css';
import NumberInput from './NumberInput';

function Question({lhs, rhs, answer, onAnswerChanged, showAnswers}) {
    const isCorrect = lhs * rhs === +answer;
    
    return (
        <div className={`${styles.question} ${showAnswers && (isCorrect ? styles.correct : styles.incorrect)}`}>
            {lhs} × {rhs} = 
            <NumberInput value={answer} onChange={onAnswerChanged} className="foo" />
        </div>
    );
}

export default memo(Question);