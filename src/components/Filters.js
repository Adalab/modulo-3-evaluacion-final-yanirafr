const Filters = (props) => {
  const handleFilter = (ev) => {
    props.sendFilter(ev.target.value);
  };
  const stopSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="main__form" onSubmit={stopSubmit}>
      <input
        type="text"
        name="userInput"
        id="userInput"
        className="main__form__input"
        onChange={handleFilter}
        value={props.userInput}
      />
    </form>
  );
};

export default Filters;
