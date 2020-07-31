import React, { useState } from "react";
import garcom from "../img-documents/garcom.png";
import logoBurger from "../img-documents/logo-burger.png";
import tableIcon from "../img-documents/tableIcon.svg";
import signoutIcon from "../img-documents/logoutIcon.png";
import menuUm from "../img-documents/menuex1.png";
import menuDois from "../img-documents/menuex2.png";
import status from "../img-documents/statusIcon.svg";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { useHistory } from "react-router-dom";
import { Figure } from "../components/Figure";
import { Button } from "../components/Button";
import {
  Navibar,
  LoungeSection,
  MenusContainer,
  MenusSpan,
  MenusImg,
} from "../components/StyleComponents.js";

const HomeLounge = () => {
  return <h1>HOME</h1>;
};

const NovaMesa = (props) => {
  return (
    <MenusContainer>
      <MenusSpan>
        <h1>Nome do Cliente:</h1>
      </MenusSpan>
      <MenusSpan>
        <h1>Numero da Mesa</h1>
        <Button id="menus" name="Menu" onClick={props.callback} />
      </MenusSpan>
    </MenusContainer>
  );
};

const Menus = () => {
  return (
    <MenusContainer>
      <MenusSpan>
        <MenusImg src={menuUm} />
      </MenusSpan>
      <MenusSpan>
        <MenusImg src={menuDois} />
      </MenusSpan>
    </MenusContainer>
  );
};

const ManagerScreen = (props) => {
  const screen = props.screen;
  switch (screen) {
    case "mesa":
      return <NovaMesa callback={props.func} />;
    case "menus":
      return <Menus />;
    default:
      return <HomeLounge />;
  }
};

export const LoungePage = () => {
  let history = useHistory();
  const [name, setName] = useState(""),
    [screen, setScreen] = useState("");

  fireFuncs.getLoggedUser((user) => {
    setName(user.displayName);
  });

  const handleSingOut = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  const handleChangeScreens = (event) => {
    const page = event.currentTarget.id;
    setScreen(page);
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
          id="home"
          src={status}
          text={"Status"}
          size="1.3em"
          onClick={handleChangeScreens}
        />
        <Figure
          id="mesa"
          src={tableIcon}
          text="Nova Mesa"
          size="1.3em"
          onClick={handleChangeScreens}
        />
        <Figure
          src={signoutIcon}
          text="sair"
          size="1.3em"
          onClick={handleSingOut}
        />
      </Navibar>
      <ManagerScreen screen={screen} func={handleChangeScreens} />
    </LoungeSection>
  );
};
