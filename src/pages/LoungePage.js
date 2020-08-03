import React, { useState } from "react";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { useHistory } from "react-router-dom";
import { Figure } from "../components/Figure";
import { Navibar, LoungeSection } from "../components/StyleComponents.js";
import { ClientTable } from "../components/lounge/clientTable.js";
import { Menu } from "../components/lounge/menu.js";
import { Status } from "../components/lounge/status.js";
import garcom from "../img-documents/garcom.png";
import logoBurger from "../img-documents/logo-red.png";
import tableIcon from "../img-documents/tableIcon.svg";
import signoutIcon from "../img-documents/logoutIcon.png";
import status from "../img-documents/statusIcon.svg";

const ManagerScreen = (props) => {
  const screen = props.screen;
  switch (screen) {
    case "table":
      return <ClientTable callback={props.func} />;
    case "menu":
      return (
        <Menu
          name={props.nameClient}
          table={props.tableNum}
          garcom={props.garcom}
        />
      );
    default:
      return <Status />;
  }
};

export const LoungePage = () => {
  let history = useHistory();
  const [name, setName] = useState(""),
    [screen, setScreen] = useState(""),
    [clientName, setClientName] = useState(""),
    [tableNum, setTableNum] = useState("");

  fireFuncs.getLoggedUser((user) => {
    setName(user.displayName);
  });

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
    <LoungeSection>
      <Navibar>
        <Figure
          src={logoBurger}
          text="Burger Queen"
          fonte="Burger Queen"
          size="1.3rem"
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
          id="table"
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
      <ManagerScreen
        screen={screen}
        nameClient={clientName}
        tableNum={tableNum}
        garcom={name}
        func={handleChangeScreens}
      />
    </LoungeSection>
  );
};
