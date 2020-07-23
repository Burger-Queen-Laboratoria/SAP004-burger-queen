import React from "react";
import { BtnBackgroundBlackComponent } from "../components/Button.js";
import { authSignOut } from "../firebase/firebaseFunctions.js";
import { useHistory } from "react-router-dom";

export const LoungePage = () => {
  let history = useHistory();

  const handleClick = () => {
    authSignOut().then(() => history.push("/"));
  };

  return (
    <>
      <p>Lounge World!</p>
      <BtnBackgroundBlackComponent name="Sair" func={handleClick} />
    </>
  );
};
