const Toggle = (props) => {
  const { mode, changeMode } = props;
  return (
    <div className="toggle-container">
      <input
        id="clowCard"
        className="toggle toggle-left"
        name="toggle"
        type="radio"
        checked={mode===0}
        onChange={changeMode}
      />
      <label htmlFor="clowCard" className="btn">Clow Card</label>
      <input
        id="sakuraCard"
        className="toggle toggle-right"
        name="toggle"
        type="radio"
        checked={mode===1}
        onChange={changeMode}
      />
      <label htmlFor="sakuraCard" className="btn">Sakura Card</label>
    </div>
  )
}

export default Toggle;
