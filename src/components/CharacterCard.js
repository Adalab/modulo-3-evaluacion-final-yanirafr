import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character-dertail/${props.id}`}>
      <li className="character__list__item" id={props.id} title={props.name}>
        <img
          src={props.image}
          alt={props.name}
          className="character__list__img"
        />
        <h3 className="character__name">{props.name}</h3>
        <p className="character__list__species">{props.species}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;
