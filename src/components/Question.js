import React, { memo } from 'react';
import styles from './Questions.module.css';
import NumberInput from './NumberInput';

function Question({lhs, rhs, answer, onAnswerChanged}) {
    const isCorrect = lhs * rhs === +answer;
    return (
        <div className={`${styles.question} ${isCorrect ? styles.correct : ''}`}>
            {lhs} × {rhs} = 
            <NumberInput value={answer} onChange={onAnswerChanged} className="foo" />
        </div>
    );
}

export default memo(Question);