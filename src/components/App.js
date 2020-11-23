import React from "react";
import "../stylesheet/App.scss";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getDataFromApi } from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";

const App = () => {
  // State
  const [characters, setCharacters] = useState([]);

  // Life cicle
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
      console.log(data);
    });
  }, []);

  // Return
  return (
    <>
      <Header />
      <main className="main">
        <CharacterList characters={characters} />
      </main>
    </>
  );
};

export default App;
