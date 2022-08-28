const Card = (props) => {
  const { cardName, imageUrl, clickHandler } = props;
  return (
    <div className="Card" onClick={() => clickHandler(cardName)}>
      <img src={imageUrl} alt={cardName} style={{width: "210px"}}/>
    </div>
  );
}

export default Card;
