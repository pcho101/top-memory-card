const Card = (props) => {
  const { cardName } = props;
  return (
    <div className="Card">
      {cardName}
    </div>
  );
}

export default Card;
