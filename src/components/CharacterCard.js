import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link
      to={`/character-dertail/${props.id}`}
      className="character__list__link"
    >
      <li className="character__list__item" id={props.id} title={props.name}>
        <img
          src={props.image}
          alt={props.name}
          className="character__list__img"
        />
        <h3 className="character__list__name">{props.name}</h3>
        <p className="character__list__species">{props.species}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;
