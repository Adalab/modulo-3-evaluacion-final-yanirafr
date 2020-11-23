import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/" className="home-link">
        Home
      </Link>
      <article className="character-detail" id={props.id}>
        <img
          src={props.image}
          alt={props.name}
          title={props.name}
          className="character-detail__image"
        />
        <h2 className="character-detail__name">{props.name}</h2>
        <ul className="character-detail__details">
          <li className="character-detail__details__item">
            Status: {props.status}
          </li>
          <li className="character-detail__details__item">
            Species: {props.species}
          </li>
          <li className="character-detail__details__item">
            Origin: {props.origin}
          </li>
          <li className="character-detail__details__item">
            Episodes: {props.episodes}
          </li>
        </ul>
      </article>
    </>
  );
};

export default CharacterDetail;
