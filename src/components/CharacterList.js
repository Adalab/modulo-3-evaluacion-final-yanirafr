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
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return <ul className="character__list">{listCharacters}</ul>;
};

export default CharacterList;
