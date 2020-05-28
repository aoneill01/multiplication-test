import React from 'react';

function Results({ questions }) {
  const isCorrect = (question) =>
    question.lhs * question.rhs === +question.answer;
  return (
    <div className="questions">
      {questions.map((question) => (
        <div
          key={question.id}
          className={`question ${
            isCorrect(question) ? 'correct' : 'incorrect'
          }`}
        >
          {question.lhs} × {question.rhs} = {question.answer}
        </div>
      ))}
    </div>
  );
}

export default Results;
