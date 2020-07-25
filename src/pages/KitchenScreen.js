import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button.js";
import { fireFuncs } from "../firebase/firebaseFunctions.js";

export const KitchenScreen = () => {
  let history = useHistory();

  const handleClick = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  return (
    <>
      <h1>Tela da Cozinha</h1>
      <Button name="Sair" onClick={handleClick} />
    </>
  );
};
