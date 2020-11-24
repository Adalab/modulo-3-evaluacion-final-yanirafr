import { Link } from "react-router-dom";
import alien from "../../images/alien.png";
import human from "../../images/human.png";
import "./CharacterCard.scss";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <Link
      to={`/character-dertail/${props.id}`}
      className="character__list__link"
    >
      <li className="character__list__item" id={props.id} title={props.name}>
        <h3 className="character__list__name">{props.name}</h3>
        <img
          src={props.image}
          alt={props.name}
          className="character__list__img"
        />
        <div className="character__list__species">
          <p className="character__list__species--name">{props.species}</p>
          <img
            className="character__list__species--icon"
            src={props.species === "Human" ? human : alien}
            alt={props.species}
          />
        </div>
      </li>
    </Link>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
