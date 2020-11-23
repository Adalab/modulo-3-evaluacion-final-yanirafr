import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/">Volver</Link>
      <article className="character-detail" id={props.id}>
        <img
          src={props.image}
          alt={props.name}
          title={props.name}
          className="character-detail__image"
        />
        <h2 className="character-detail__name">{props.name}</h2>
        <ul className="character-detail__details">
          <li className="character-detail__details__item">{props.status}</li>
          <li className="character-detail__details__item">{props.species}</li>
          <li className="character-detail__details__item"></li>
          <li className="character-detail__details__item"></li>
        </ul>
      </article>
    </>
  );
};

export default CharacterDetail;
