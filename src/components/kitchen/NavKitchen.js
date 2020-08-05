import React, { useState } from "react";
import iconChef from "../../img-documents/bakerIcon.svg";
import iconLogOut from "../../img-documents/logoutIconKitchen.png";
import iconOrder from "../../img-documents/orderIcon.svg";
import iconHistoric from "../../img-documents/historicIcon.svg";
import { 
  StyledNavKitchen, 
  StyledNavImg, 
  StyleNavDiv, 
  StyleNavP 
} from "./StyleKitchen.js";
import logoImg from "../../img-documents/logo-red.png";
import { useHistory } from "react-router-dom";
import { fireFuncs } from "../../firebase/firebaseFunctions.js";

const NavJobKitchen = (props) => {
  return (
    <StyleNavDiv {...props}>
      <StyledNavImg src={props.icon} alt={props.alt} ></StyledNavImg>
      <StyleNavP queen={props.queen}>{props.word}</StyleNavP>
    </StyleNavDiv>
  );
}

export const NavigationKitchen = () => {
  let history = useHistory();
  const [name, setName] = useState("");

  fireFuncs.getLoggedUser((user) => {
    setName(user.displayName);
  });
  
  const handleClickOut = () => {
    fireFuncs
      .authSignOut()
      .then(() => history.push("/"));
  };

  const handleClickHistoric = () => {
    history.push("/historic");
  }

  const handleClickOrder = () => {
    history.push("/kitchen");
  }

  return (
    <StyledNavKitchen>
      <NavJobKitchen queen={true} icon={logoImg} alt="logo" word="BurgerQueen" />
      <NavJobKitchen icon={iconChef} alt="kitchen-icon" word={name} />
      <NavJobKitchen icon={iconOrder} alt="orders" word="Pedidos" onClick={handleClickOrder} />
      <NavJobKitchen icon={iconHistoric} alt="historic-order" word="Histórico" onClick={handleClickHistoric}/>
      <NavJobKitchen icon={iconLogOut} alt="signout-icon" word="Sair" onClick={handleClickOut}/>
    </StyledNavKitchen>
  );
}