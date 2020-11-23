const CharacterCard = (props) => {
  return (
    <li className="character__list__item" id={props.id}>
      <img
        src={props.image}
        alt={props.name}
        title={props.name}
        className="character__list__img"
      />
      <h3 className="character__name">{props.name}</h3>
      <p className="character__list__species">{props.species}</p>
    </li>
  );
};

export default CharacterCard;
