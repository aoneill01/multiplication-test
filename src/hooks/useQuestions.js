import { useState, useCallback } from 'react';

function randomQuestions() {
  const unsorted = [];
  for (let lhs = 1; lhs <= 10; lhs++) {
    for (let rhs = 1; rhs <= 10; rhs++) {
      unsorted.push({
        lhs,
        rhs,
        answer: 0,
      });
    }
  }

  const result = [];
  while (unsorted.length !== 0) {
    const index = Math.floor(Math.random() * unsorted.length);
    result.push(unsorted.splice(index, 1)[0]);
  }
  result.forEach((question, index) => (question.id = index + 1));
  return result;
}

export function useQuestions() {
  const [questions, setQuestions] = useState(randomQuestions());

  function answerQuestion(id, answer) {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== id) return q;
        return { ...q, answer };
      })
    );
  }

  function resetQuestions() {
    setQuestions(randomQuestions);
  }

  return [
    questions,
    useCallback(answerQuestion, [setQuestions]),
    resetQuestions,
  ];
}
