import React from "react";
import "../stylesheet/App.scss";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getDataFromApi } from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  // State
  const [characters, setCharacters] = useState([]);
  const [userInput, setUserInput] = useState(
    localStorage.getItem("name") || ""
  );

  // Life cicle
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
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
    const characterId = props.match.params.id;

    const clickedCharacter = characters.find((character) => {
      console.log("id", character.id);
      console.log("find", characterId);
      if (characterId === character.id) {
        console.log("if", characterId, character.id);
        return true;
      } else {
        return false;
      }
    });

    if (clickedCharacter === true) {
      return (
        <CharacterDetail
          id={clickedCharacter.id}
          name={clickedCharacter.name}
          status={clickedCharacter.status}
          species={clickedCharacter.species}
          // origin={clickedCharacter.origin.name}
          // episodes={clickedCharacter.espisode.length}
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
