const Card = (props) => {
  const { cardName, imageUrl } = props;
  return (
    <div className="Card">
      <img src={imageUrl} alt={cardName} style={{width: "210px"}}/>
    </div>
  );
}

export default Card;
