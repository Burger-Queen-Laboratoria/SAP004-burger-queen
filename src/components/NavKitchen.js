import React from "react";
import iconJob from "../img-documents/kitchenIcon.svg";
import iconSignOut from "../img-documents/signoutIcon.svg";
import iconOrder from "../img-documents/orderIcon.svg";
import iconHistoric from "../img-documents/historicIcon.svg";
// import {
//   // DivNavKitchen,
//   ImgIcon,
//   // TagP,
//   FixedNavKitchen,
// } from "../components/StyleKitchen.js"
import { StyledNavKitchen, StyledNavImg, StyleNavDiv } from "./StyleKitchen.js"
import logoImg from "../img-documents/logo-burger.png";

const NavJobKitchen = (props) => {
  return (
    <StyleNavDiv {...props}>
      <StyledNavImg src={props.icon} alt={props.alt} ></StyledNavImg>
      <p>{props.word}</p>
    </StyleNavDiv>
  )
}

export const NavigationKitchen = (props) => {
  return (
    <StyledNavKitchen>
      <NavJobKitchen icon={logoImg} alt="logo" word="BurgerQueen" />
      <NavJobKitchen icon={iconOrder} alt="orders" word="Pedidos" />
      <NavJobKitchen icon={iconHistoric} alt="historic-order" word="Histórico" />
      <NavJobKitchen icon={iconJob} alt="kitchen-icon" word="Fulano" />
      <NavJobKitchen icon={iconSignOut} alt="signout-icon" word="Sair" {...props} />
    </StyledNavKitchen>
  )
}