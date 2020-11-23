import CharacterCard from "./CharacterCard";

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
        <p className="character__error">No encontrado</p>
      )}
    </section>
  );
};

export default CharacterList;
