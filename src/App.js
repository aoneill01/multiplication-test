import React, { useState } from 'react';
import './App.css';
import Test from './components/Test';
import { useQuestions } from './hooks/useQuestions';
import Results from './components/Results';
import Timer from './components/Timer';

const modes = {
  BEFORE_TEST: 'before_test',
  IN_TEST: 'in_test',
  RESULTS: 'results',
};

function App() {
  const [mode, setMode] = useState(modes.BEFORE_TEST);
  const [questions, answerQuestion, resetQuestions] = useQuestions();

  function startTest() {
    resetQuestions();
    setMode(modes.IN_TEST);
  }

  function finishTest() {
    if (questions.some((q) => q.answer === 0)) {
      if (
        !window.confirm(
          'Not all questions are answered. Are you sure you wish to see the results?'
        )
      ) {
        return;
      }
    }

    setMode(modes.RESULTS);
  }

  function reset() {
    setMode(modes.BEFORE_TEST);
  }

  function displayedContent() {
    switch (mode) {
      case modes.BEFORE_TEST:
        return (
          <button className="main" onClick={startTest}>
            Start Test
          </button>
        );
      case modes.IN_TEST:
        return (
          <>
            <Timer />
            <Test questions={questions} onAnswered={answerQuestion} />
            <button className="main" onClick={finishTest}>
              Check Answers
            </button>
          </>
        );
      case modes.RESULTS:
        return (
          <>
            <Results questions={questions} />
            <button className="main" onClick={reset}>
              Done
            </button>
          </>
        );
      default:
        return <p>Unexpected error</p>;
    }
  }

  return <div className="App">{displayedContent()}</div>;
}

export default App;
