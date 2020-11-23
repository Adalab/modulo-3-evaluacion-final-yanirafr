import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/">Volver</Link>
      <article className="character-detail">
        <img
          src={props.characters.image}
          alt={props.characters.name}
          className="character-detail__img"
        />
        <h3 className="character-detail__name">{props.characters.name}</h3>
        <ul className="character-detail__details">
          <li className="character-detail__details__status">
            {props.characters.status}
          </li>
          <li className="character-detail__details__species">
            {props.characters.species}
          </li>
          <li className="character-detail__details__origin">
            {props.characters.origin}
          </li>
          <li className="character-detail__details__episodes">
            {props.characters.episodes}
          </li>
        </ul>
      </article>
    </>
  );
};

export default CharacterDetail;
