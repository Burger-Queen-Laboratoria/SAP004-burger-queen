import React from "react";
import firebase from "./firebase/init-firebase.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.js";
import { Register } from "./pages/Register.js";
import { LoungePage } from "./pages/LoungePage.js";
import KitchenScreen from "./pages/KitchenScreen.js";

console.log(firebase);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/register" component={Register} />
        <Route path="/lounge" component={LoungePage} />
        <Route path="/kitchen" component={KitchenScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
