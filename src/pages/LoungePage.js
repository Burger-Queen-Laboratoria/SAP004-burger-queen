import React from "react";
import { BtnBackgroundBlackComponent } from "../components/Button.js";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { useHistory } from "react-router-dom";

export const LoungePage = () => {
  let history = useHistory();

  const handleClick = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  return (
    <>
      <h1>Lounge Screen</h1>
      <BtnBackgroundBlackComponent name="Sair" func={handleClick} />
    </>
  );
};
