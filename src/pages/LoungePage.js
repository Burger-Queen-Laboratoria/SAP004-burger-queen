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

  // const handleNewTable = () => {
  //   fireFuncs.collectionUser().then((userName) => {
  //     return userName;
  //   });
  // };

  return (
    <section>
      <Navibar>
        <Figure
          src={logoBurger}
          text="Burger Queen"
          fonte="Burger Queen"
          size="1.4rem"
        />
        <Figure src={garcom} text="Garçom" size="1.3em" />
        <Figure
          src={tableIcon}
          text="Nova Mesa"
          size="1.3em"
          onClick={handleNewTable}
        />
        <Figure
          src={signoutIcon}
          text="sair"
          size="1.3em"
          onClick={handleClick}
        />
      </Navibar>
      <div></div>
    </section>
  );
};
