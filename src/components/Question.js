import React, { memo } from 'react';
import './Question.css';
import NumberInput from './NumberInput';

function Question({ lhs, rhs, answer, id, onAnswered }) {
  function handleAnswered(value) {
    onAnswered(id, value);
  }

  console.log('Question re-render');

  return (
    <div className="question">
      {lhs} × {rhs} =
      <NumberInput value={answer} onChange={handleAnswered} />
    </div>
  );
}

export default memo(Question);
