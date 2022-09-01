const Toggle = () => {
  return (
    <div className="toggle-container">
      <input
        id="clowCard"
        className="toggle toggle-left"
        name="toggle"
        value="false"
        type="radio"
        checked
      />
      <label htmlFor="clowCard" className="btn">ClowCard</label>
      <input
        id="sakuraCard"
        className="toggle toggle-right"
        name="toggle"
        value="true"
        type="radio"
      />
      <label htmlFor="sakuraCard" className="btn">SakuraCard</label>
    </div>
  )
}

export default Toggle;
