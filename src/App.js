import React from "react";
import firebase from "./init-firebase.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./login/LoginPage.js";
import { LoungePage } from "./lounge/LoungePage.js";
import { Register } from "./register.js";

console.log(firebase);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/lounge" component={LoungePage} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
