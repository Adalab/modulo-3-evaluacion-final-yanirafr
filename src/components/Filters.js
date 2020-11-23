const Filters = (props) => {
  const handleFilter = (ev) => {
    props.sendFilter(ev.target.value);
  };

  return (
    <form className="main__form">
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
