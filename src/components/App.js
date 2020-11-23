import React from "react";
import "../stylesheet/App.scss";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getDataFromApi } from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Load from "./Load";

const App = () => {
  // State
  const [characters, setCharacters] = useState([]);
  const [userInput, setUserInput] = useState(
    localStorage.getItem("name") || ""
  );
  const [load, setLoad] = useState(true);

  // Life cicle
  useEffect(() => {
    setLoad(true);
    getDataFromApi().then((data) => {
      setCharacters(data);
      setLoad(false);
    });
  }, []);

  // Filter
  const handleFilter = (userInput) => {
    setUserInput(userInput);
    localStorage.setItem("name", userInput);
  };

  const browsedCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(userInput.toUpperCase());
  });

  // Card click
  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);

    const clickedCharacter = characters.find((character) => {
      return characterId === parseInt(character.id);
    });

    if (clickedCharacter) {
      return (
        <CharacterDetail
          id={clickedCharacter.id}
          image={clickedCharacter.image}
          name={clickedCharacter.name}
          status={clickedCharacter.status}
          species={clickedCharacter.species}
          origin={clickedCharacter.origin.name}
          episodes={clickedCharacter.episode.length}
        />
      );
    } else {
      return (
        <p className="character-missing">No hemos encontrado el personaje</p>
      );
    }
  };

  // Return
  return (
    <>
      <Header />
      <main className="main">
        {load === true ? <Load /> : null}
        <Switch>
          <Route exact path="/">
            <Filters
              characters={characters}
              sendFilter={handleFilter}
              userInput={userInput}
            />
            <CharacterList characters={browsedCharacters} />
          </Route>
          <Route
            path="/character-dertail/:id"
            component={renderCharacterDetail}
          />
        </Switch>
      </main>
    </>
  );
};

export default App;
