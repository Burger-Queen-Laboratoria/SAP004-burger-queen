import React from "react";
import garcom from "../img-documents/garcom.png";
import logoBurger from "../img-documents/logo-burger.png";
import tableIcon from "../img-documents/tableIcon.svg";
import signoutIcon from "../img-documents/logoutIcon.png";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { useHistory } from "react-router-dom";
import { Navibar } from "../components/StyleComponents.js";
import { Figure } from "../components/Figure";

export const LoungePage = () => {
  let history = useHistory();

  const handleClick = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  const handleNewTable = () => {
    console.log("Nova Mesa");
  };

  return (
    <Navibar>
      <Figure
        src={logoBurger}
        text="Burger Queen"
        fonte="Burger Queen"
        size="1.4rem"
      />
      <Figure src={garcom} text="Garçom" />
      <Figure src={tableIcon} text="Nova Mesa" onClick={handleNewTable} />
      <Figure src={signoutIcon} text="sair" onClick={handleClick} />
    </Navibar>
  );
};
