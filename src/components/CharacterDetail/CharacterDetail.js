import { Link } from "react-router-dom";
import "./CharacterDetail.scss";
import PropTypes from "prop-types";
import portal from "../../images/home-portal.png";
import human from "../../images/human.png";
import alien from "../../images/alien.png";
import alive from "../../images/alive.png";
import dead from "../../images/dead.png";
import unknown from "../../images/unknown.png";
import placeholder from "../../images/placeholder.jpeg";
import earth from "../../images/earth.png";
import planets from "../../images/planets.jpg";

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/" className="home-link" title="Home portal">
        <img src={portal} alt="Home-portal" className="home-link__icon" />
        <p className="home-link__text">Home portal</p>
      </Link>
      <article className="character-detail" id={props.id}>
        <img
          src={props.image || placeholder}
          alt={props.name}
          title={props.name}
          className="character-detail__image"
        />
        <div className="character-detail__name">
          <h2 className="character-detail__name__text">{props.name}</h2>
          <div className="character__detail__icons">
            <img
              src={props.species === "Human" ? human : alien}
              alt={props.species}
              className="character-detail__icon"
              title={"Species: " + props.species}
            />
            <img
              src={
                props.status === "Alive"
                  ? alive
                  : props.status === "Dead"
                  ? dead
                  : unknown
              }
              alt={props.status}
              className="character-detail__icon"
              title={"Status: " + props.status}
            />
          </div>
        </div>
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

CharacterDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
};

export default CharacterDetail;
