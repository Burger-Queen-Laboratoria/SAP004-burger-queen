import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.js";
import { Register } from "./pages/Register.js";
import { LoungePage } from "./pages/LoungePage.js";
import { KitchenPage } from "./pages/KitchenPage.js";
import { HistoricArea } from "./pages/HistoricPage.js"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/register" component={Register} />
        <Route path="/lounge" component={LoungePage} />
        <Route path="/kitchen" component={KitchenPage} />
        <Route path="/historic" component={HistoricArea} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
