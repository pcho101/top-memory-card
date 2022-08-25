import React from "react";

const Scoreboard = (props) => {
  return (
    <div className="Scoreboard">
      <h3>Score: {props.score}</h3>
      <h3>High Score: {props.highScore}</h3>
    </div>
  );
}

export default Scoreboard;
