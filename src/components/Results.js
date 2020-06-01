import React from 'react';

function Results({ questions }) {
  const isCorrect = (question) =>
    question.lhs * question.rhs === +question.answer;
  const average = Math.round(
    (100 *
      questions.reduce(
        (acc, question) => acc + (isCorrect(question) ? 1 : 0),
        0
      )) /
      questions.length
  );

  return (
    <>
      <p className="sticky">
        {average === 100 ? '🎉🎉🎉 ' : ''}
        {average}%{average === 100 ? ' 🎉🎉🎉' : ''}
      </p>
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
    </>
  );
}

export default Results;
