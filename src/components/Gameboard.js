import { useEffect, useState } from "react";
import Card from "./Card";
import useHttp from "./http";

const Gameboard = (props) => {
  const { addToMemory, score, level, numCards, mode } = props;

  const [isLoading, fetchedData] = useHttp('https://protected-taiga-89091.herokuapp.com/api/card', []);
  const [loadedCards, setLoadedCards] = useState(null);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log('shuffled')
    return array;
  }

  const setupCards = (cards) => {
    const filteredData = fetchedData.data.filter((element) => element.clowCard);
    const shuffledData = shuffle(filteredData);
    const slicedData = shuffledData.slice(0, cards);
    const mappedData = slicedData.map((element) => {
      return {
        name: element.englishName,
        imageUrl: mode ? element.sakuraCard : element.clowCard,
      }
    })
    setLoadedCards(mappedData);
  }

  const clickToShuffle = () => {
    setLoadedCards(shuffle([...loadedCards]));
    console.log('clicktoshuffle')
  }

  useEffect(() => {
    console.log('useEffect Mode Change')
    if (fetchedData) setLoadedCards(null);
  }, [mode])

  useEffect(() => {
    console.log('useEffect Level Change')
    if (fetchedData) setLoadedCards(null);
  }, [level])

  useEffect(() => {
    console.log('useEffect Score Change')
    if (loadedCards) clickToShuffle();
  }, [score])

  console.log('gamebaord render start')

  if (fetchedData && !loadedCards) {
    setupCards(numCards[level]);
    console.log('setup cards');
  }

  let cardList = (<p>Loading cards...</p>)

  if (!isLoading && loadedCards) {
    console.log('cardlist')
    cardList = loadedCards.map((element, index) => {
      return (
        <Card
          key={index}
          cardName={element.name}
          imageUrl={element.imageUrl}
          clickHandler={addToMemory}
        />
      )
    })
  } else if (!isLoading && !loadedCards) {
    cardList = (<p>Could not fetch any data.</p>)
  }

  console.log('gameboard render')

  return (
    <div className="Gameboard">
      {cardList}
    </div>
  );
}

export default Gameboard;
