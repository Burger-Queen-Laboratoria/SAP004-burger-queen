import React, { useState } from "react";
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
import { Button } from "../components/Button";

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
        <Button name="Adicionar Pedido" onClick={props.callback} />
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

  const handleNewTable = () => {
    setScreen("mesa");
  };
  const handleAddPedido = () => {
    setScreen("menus");
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
          onClick={handleSingOut}
        />
      </Navibar>
      <ManagerScreen screen={screen} func={handleAddPedido} />
    </LoungeSection>
  );
};
