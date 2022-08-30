const Card = (props) => {
  const { cardName, imageUrl, clickHandler } = props;
  return (
    <div className="Card" onClick={() => clickHandler(cardName)}>
      <img src={imageUrl} alt={cardName}/>
    </div>
  );
}

export default Card;
