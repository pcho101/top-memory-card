import Card from "./Card";
import useHttp from "./http";

const Gameboard = (props) => {
  const { addToMemory, resetHighScore } = props;

  const [isLoading, apiData] = useHttp('https://protected-taiga-89091.herokuapp.com/api/card', []);

  const processData = (response) => {
    return response.data.filter((element) => element.clowCard).map((element) => {
      return {
        name: element.englishName,
        imageUrl: element.clowCard,
      }
    })
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let cardList = (<p>Loading cards...</p>)

  if (!isLoading && apiData) {
    cardList = shuffle(processData(apiData)).map((element, index) => {
      return (
        <div key={index} onClick={() => addToMemory(element.name)}>
          <Card cardName={element.name} imageUrl={element.imageUrl}/>
        </div>
      )
    })
  } else if (!isLoading && !apiData) {
    cardList = (<p>Could not fetch any data.</p>)
  }

  console.log('gameboard render')
  console.log(apiData);
  if (apiData) console.log(processData(apiData))

  return (
    <div className="Gameboard" style={{display: "flex", flexWrap: "wrap"}}>
      {cardList}
      <button onClick={resetHighScore}>Reset high score</button>
    </div>
  );
}

export default Gameboard;
