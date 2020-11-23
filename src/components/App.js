import React from "react";
import "../stylesheet/App.scss";
import { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { getDataFromApi } from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";

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

  const handleFilter = (userInput) => {
    setUserInput(userInput);
    localStorage.setItem("name", userInput);
  };

  const browsedCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(userInput.toUpperCase());
  });

  console.log(browsedCharacters);

  // Return
  return (
    <>
      <Header />

      <main className="main">
        <Switch>
          <Route exact path="/">
            <Link to="/CharacterDetail">Go</Link>
            <Filters
              characters={characters}
              sendFilter={handleFilter}
              userInput={userInput}
            />
            <CharacterList characters={browsedCharacters} />
          </Route>
          <Route path="/CharacterDetail">
            <CharacterDetail characters={characters} />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
