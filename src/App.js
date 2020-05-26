import React, { useState } from 'react';
import './App.css';
import { QuestionsProvider } from './context/questionsContext';
import Test from './components/Test';

function App() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <QuestionsProvider>
      <div className="App">
        { isRunning 
          ? <Test />
          : <button className="start" onClick={startTest}>Start Test</button>
        }
      </div>
    </QuestionsProvider>
  );

  function startTest() {
    setIsRunning(true);
  }
}

export default App;
