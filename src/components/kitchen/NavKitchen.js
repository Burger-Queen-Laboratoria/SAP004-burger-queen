import React from "react";
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

const NavJobKitchen = (props) => {
  return (
    <StyleNavDiv {...props}>
      <StyledNavImg src={props.icon} alt={props.alt} ></StyledNavImg>
      <StyleNavP queen={props.queen}>{props.word}</StyleNavP>
    </StyleNavDiv>
  );
}

export const NavigationKitchen = (props) => {
  return (
    <StyledNavKitchen>
      <NavJobKitchen queen={true} icon={logoImg} alt="logo" word="BurgerQueen" />
      <NavJobKitchen icon={iconChef} alt="kitchen-icon" word="Fulano" />
      <NavJobKitchen icon={iconOrder} alt="orders" word="Pedidos" />
      <NavJobKitchen icon={iconHistoric} alt="historic-order" word="Histórico" />
      <NavJobKitchen icon={iconLogOut} alt="signout-icon" word="Sair" {...props} />
    </StyledNavKitchen>
  );
}