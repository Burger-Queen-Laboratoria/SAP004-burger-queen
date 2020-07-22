import React from "react";
import firebase from "./init-firebase.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./login/LoginPage.js";
import { LoungePage } from "./lounge/LoungePage.js";
import { About } from "./sobre.js";

console.log(firebase);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/lounge" component={LoungePage} />
        <Route path="/sobre" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
