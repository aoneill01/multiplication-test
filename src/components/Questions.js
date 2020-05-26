import React, { useContext } from 'react';
import Question from './Question';
import styles from './Questions.module.css';
import { QuestionsContext } from '../context/questionsContext';

function Questions({showAnswers}) {
    const [questions] = useContext(QuestionsContext);

    return (
        <div className={styles.questions}>
            {questions.map(question =>
                <Question {...question} showAnswers={showAnswers} />
            )}
        </div>
    );
}

export default Questions;