import React from "react";
import garcom from "../img-documents/garcom.png";
import logoBurger from "../img-documents/logo-burger.png";
import signoutIcon from "../img-documents/signoutIcon.svg";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { useHistory } from "react-router-dom";
import { Navibar, Title } from "../components/StyleComponents.js";
import { Figure } from "../components/Figure";

export const LoungePage = () => {
  let history = useHistory();

  const handleClick = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  return (
    <Navibar>
      <Figure src={logoBurger} text="Burger Queen" />
      <Title> Bem Vindo</Title>
      <Figure src={garcom} text="Garçom" />
      <Figure src={signoutIcon} text="sair" onClick={handleClick} />
    </Navibar>
  );
};
