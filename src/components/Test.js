import React from 'react';
import Question from './Question';
import './Question.css';

function Test({ questions, onAnswered, onSubmitted }) {
  return (
    <>
      <div className="questions">
        {questions.map((question) => (
          <Question {...question} key={question.id} onAnswered={onAnswered} />
        ))}
      </div>
    </>
  );
}

export default Test;
