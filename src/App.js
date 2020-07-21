import "./App.css";
import React from "react";
import firebase from "./init-firebase.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Teste } from "./teste.js";
import { About } from "./sobre.js";

console.log(firebase);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Teste} />
        <Route path="/sobre" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
