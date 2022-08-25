import Card from "./Card";

const Gameboard = (props) => {
  const { addToMemory, resetHighScore } = props;
  const data = [0,1,2,3,4,5,6,7,8,9,10,11];

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const cardList = shuffle(data).map((element, index) => {
    return (
      <li key={index} onClick={() => addToMemory(element)}>
        <Card cardName={element}/>
      </li>
    )
  })

  return (
    <div className="Gameboard">
      <ul>
        {cardList}
      </ul>
      <button onClick={resetHighScore}>Reset high score</button>
    </div>
  );
}

export default Gameboard;
