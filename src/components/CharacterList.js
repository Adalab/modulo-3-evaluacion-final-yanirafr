import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
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
  return <ul className="character__list">{listCharacters}</ul>;
};

export default CharacterList;
