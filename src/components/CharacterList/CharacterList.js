import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterList.scss";
import mee from "../../images/mee.png";
import PropTypes from "prop-types";

const CharacterList = (props) => {
  // Map
  const listCharacters = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        name={character.name}
        species={character.species}
        image={character.image}
      />
    );
  });

  // Sort
  props.characters.sort((a, b) => {
    const characterNameA = a.name.toUpperCase();
    const characterNameB = b.name.toUpperCase();
    if (characterNameA < characterNameB) {
      return -1;
    }
    if (characterNameA > characterNameB) {
      return 1;
    }
    return 0;
  });

  // Return
  return (
    <section className="character">
      {listCharacters.length !== 0 ? (
        <ul className="character__list">{listCharacters}</ul>
      ) : (
        <div className="character-error">
          <p className="character-error__text">Character not found</p>
          <img
            src={mee}
            alt="Character not found"
            className="character-error__image"
          />
        </div>
      )}
    </section>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
