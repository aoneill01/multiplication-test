import React, { useState } from 'react';
import './App.css';
import Questions from './components/Questions';
import Timer from './components/Timer';

function App() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="App">
      { isRunning 
        ? <> <Timer /> <Questions /> </>
        : <button className="start" onClick={startTest}>Start Test</button>
      }
    </div>
  );

  function startTest() {
    setIsRunning(true);
  }
}

export default App;
