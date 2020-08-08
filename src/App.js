import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.js";
import { Register } from "./pages/Register.js";
import { LoungePage } from "./pages/LoungePage.js";
import { KitchenPage } from "./pages/KitchenPage.js";
import { HistoricArea } from "./pages/HistoricPage.js";
import { fireFuncs } from "./firebase/firebaseFunctions.js";

function App() {
  const [userLogged, setUserLogged] = useState();

  useEffect(() => {
    fireFuncs.getLoggedUser((user) => {
      user
        ? fireFuncs
            .getCurrentUser(user.uid)
            .then((doc) => setUserLogged(doc.sector))
        : setUserLogged();
    });
  }, []);

  const redirect = (logged) => {
    if (logged === "Kitchen") {
      return (
        <BrowserRouter>
          <Redirect to="/kitchen" />
          <Switch>
            <Route path="/kitchen" component={KitchenPage} />
            <Route path="/historic" component={HistoricArea} />
          </Switch>
        </BrowserRouter>
      );
    } else if (logged === "Hall") {
      return (
        <BrowserRouter>
          <Redirect to="/lounge" />
          <Switch>
            <Route path="/lounge" component={LoungePage} />
          </Switch>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <Redirect to="/" />
          <Switch>
            <Route exact={true} path="/" component={LoginPage} />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      );
    }
  };

  return redirect(userLogged);
}

export default App;
