import React, { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [memory, setMemory] = useState([]);

  const resetHighScore = () => {
    setHighScore(0);
  }

  const resetMemory = () => {
    setMemory([]);
  }

  const addToMemory = (newValue) => {
    if (memory.includes(newValue)) {
      resetMemory();
    } else {
      setMemory([...memory, newValue]);
    }
    console.log('added to memory')
  }

  useEffect(() => {
    if (memory.length !== score) {
      setScore(memory.length);
    }
    if (memory.length > highScore) {
      setHighScore(memory.length);
    }
    console.log('app useeffect', memory)
  }, [memory.length]);

  console.log('app render')

  return (
    <div className="App">
      <Scoreboard score={score} highScore={highScore}/>
      <Gameboard
        addToMemory={addToMemory}
        score={score}
        resetHighScore={resetHighScore}
      />
    </div>
  );
}

export default App;
