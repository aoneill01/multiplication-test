import React, { useState } from 'react';
import Question from './Question';
import styles from './Questions.module.css';

function Questions() {
    const [questions, setQuestions] = useState(randomQuestions());

    return (
        <div className={styles.questions}>
            {questions.map(question =>
                <Question {...question} />
            )}
        </div>
    );

    function updateResponse(key, answer) {
        setQuestions(prev => prev.map(q => {
            if (q.key !== key) return q;
            return {...q, answer };
        }))
    }

    function randomQuestions() {
        const unsorted = [];
        for (let lhs = 1; lhs <= 10; lhs++) {
            for (let rhs = 1; rhs <= 10; rhs++) {
                const key = lhs * 10 + rhs;
                unsorted.push({
                    lhs,
                    rhs,
                    key,
                    answer: '',
                    onAnswerChanged: answer => updateResponse(key, answer)
                });
            }
        }

        const result = [];
        while (unsorted.length !== 0) {
            const index = Math.floor(Math.random() * unsorted.length);
            result.push(unsorted.splice(index, 1)[0]);
        }
        return result;
    } 
}

export default Questions;