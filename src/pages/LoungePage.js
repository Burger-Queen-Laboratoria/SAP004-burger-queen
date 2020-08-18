import React, { useState, useEffect } from "react";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { useHistory } from "react-router-dom";
import { Figure } from "../components/Figure";
import {
  StyledNavKitchen,
  StyleDivMainHeight,
} from "../components/StyleComponents.js";
import { ClientTable } from "../components/lounge/clientTable.js";
import { Menu } from "../components/lounge/menu.js";
import { Status } from "../components/lounge/status.js";
import garcom from "../img-documents/garcom.png";
import logoBurger from "../img-documents/logo-red.png";
import tableIcon from "../img-documents/tableIcon.svg";
import signoutIcon from "../img-documents/logoutIcon.png";
import status from "../img-documents/statusIcon.svg";
import { Footer } from "../components/Footer.js";

const ManagerScreen = (props) => {
  const screen = props.screen;
  switch (screen) {
    case "table":
      props.ariaCurrent("mesas");
      return <ClientTable callback={props.func} />;
    case "menu":
      props.ariaCurrent("menus");
      return (
        <Menu
          setScreen={props.setScreen}
          name={props.nameClient}
          table={props.tableNum}
          garcom={props.garcom}
        />
      );
    default:
      props.ariaCurrent("pedidos");
      return <Status />;
  }
};

export const LoungePage = () => {
  let history = useHistory();
  const user = fireFuncs.getAuthUser(),
    [name, setName] = useState(""),
    [screen, setScreen] = useState(""),
    [clientName, setClientName] = useState(""),
    [tableNum, setTableNum] = useState(""),
    [ariaC, setAriaCurrent] = useState();

  useEffect(() => {
    user ? setName(user.displayName) : setName();
  }, [user]);

  const handleSingOut = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  const handleChangeScreens = (event, nameClient, tableNum) => {
    const page = event.currentTarget.id;
    setScreen(page);
    setClientName(nameClient);
    setTableNum(tableNum);
  };

  return (
    <>
      <StyleDivMainHeight>
        <StyledNavKitchen>
          <Figure queen={true} src={logoBurger} text="Burger Queen" />
          <Figure src={garcom} text={name} size="1.3em" />
          <Figure
            id="home"
            src={status}
            text={"Pedidos"}
            onClick={handleChangeScreens}
            ariaCurrent={ariaC === "pedidos" ? "page" : null}
          />
          <Figure
            id="table"
            src={tableIcon}
            text="Nova Mesa"
            onClick={handleChangeScreens}
            ariaCurrent={ariaC === "mesas" ? "page" : null}
          />
          <Figure src={signoutIcon} text="Sair" onClick={handleSingOut} />
        </StyledNavKitchen>
        <ManagerScreen
          setScreen={setScreen}
          screen={screen}
          nameClient={clientName}
          tableNum={tableNum}
          garcom={name}
          func={handleChangeScreens}
          ariaCurrent={setAriaCurrent}
        />
      </StyleDivMainHeight>
      <Footer />
    </>
  );
};
