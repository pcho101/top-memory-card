import React, { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/App.css'

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const [level, setLevel] = useState(0);

  const addToMemory = (newValue) => {
    if (memory.includes(newValue)) {
      setMemory([]);
    } else {
      setMemory([...memory, newValue]);
    }
    console.log('added to memory')
  }

  const numCards = [4, 8, 16, 25];

  useEffect(() => {
    if (highScore === numCards[level]) {
      setMemory([]);
      setLevel(level + 1);
    }
  }, [highScore])

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
      <Header/>
      <Scoreboard
        level={level}
        score={score}
        highScore={highScore}
      />
      <Gameboard
        addToMemory={addToMemory}
        score={score}
        level={level}
        numCards={numCards}
      />
      <Footer/>
    </div>
  );
}

export default App;
