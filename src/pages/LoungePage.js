import React, { useState, useEffect } from "react";
import garcom from "../img-documents/garcom.png";
import logoBurger from "../img-documents/logo-burger.png";
import tableIcon from "../img-documents/tableIcon.svg";
import signoutIcon from "../img-documents/logoutIcon.png";
import menuUm from "../img-documents/menuex1.png";
import menuDois from "../img-documents/menuex2.png";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { useHistory } from "react-router-dom";
import {
  Navibar,
  LoungeSection,
  MenusContainer,
  MenusSpan,
  MenusImg,
} from "../components/StyleComponents.js";
import { Figure } from "../components/Figure";

export const LoungePage = () => {
  let history = useHistory();
  const [name, setName] = useState("");

  fireFuncs.getLoggedUser((user) => {
    setName(user.displayName);
  });

  const handleClick = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  const handleNewTable = () => {
    console.log("Nova Mesa");
  };

  return (
    <LoungeSection>
      <Navibar>
        <Figure
          src={logoBurger}
          text="Burger Queen"
          fonte="Burger Queen"
          size="1.4rem"
        />
        <Figure src={garcom} text={name} size="1.3em" />
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
      <MenusContainer>
        <MenusSpan>
          <MenusImg src={menuUm} />
        </MenusSpan>
        <MenusSpan>
          <MenusImg src={menuDois} />
        </MenusSpan>
      </MenusContainer>
    </LoungeSection>
  );
};
