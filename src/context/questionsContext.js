import React, { createContext, useState } from 'react';

const QuestionsContext = createContext();

const QuestionsProvider = ({children}) => {
    function updateResponse (key, answer) {
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
                    answer: 0,
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

    const [questions, setQuestions] = useState(randomQuestions());
    const newQuestions = () => setQuestions(randomQuestions());

    return (
        <QuestionsContext.Provider value={[questions, newQuestions]}>
            {children}
        </QuestionsContext.Provider>
    );
};

export {
    QuestionsContext,
    QuestionsProvider
};
