import React from "react";
import "../stylesheet/App.scss";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getDataFromApi } from "../services/api";

const App = () => {
  // Life cicle
  useEffect(() => {
    getDataFromApi().then((data) => {
      console.log(data);
    });
  }, []);

  // Return
  return <div className="">Holi</div>;
};

export default App;
