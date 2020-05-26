import React, { useContext, useMemo, useState } from 'react';
import { QuestionsContext } from '../context/questionsContext';
import Timer from './Timer';
import Questions from './Questions';

function Test() {
    const [questions] = useContext(QuestionsContext);
    const [showAnswers, setShowAnswers] = useState(false);
    const allAnswered = useMemo(() => questions.every(q => q.answer !== 0), [questions]);

    return (
        <>
            <Timer />
            <Questions showAnswers={showAnswers} />
            <button disabled={!allAnswered} onClick={() => setShowAnswers(true)}>Check Answers</button>
        </>
    );
}

export default Test;
