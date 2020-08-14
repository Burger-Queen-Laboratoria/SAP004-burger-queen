import React, { useState, useEffect } from "react";
import iconChef from "../../img-documents/bakerIcon.svg";
import iconLogOut from "../../img-documents/logoutIconKitchen.png";
import iconOrder from "../../img-documents/orderIcon.svg";
import iconHistoric from "../../img-documents/historicIcon.svg";
import { 
  StyledNavKitchen, 
  StyledNavImg, 
  StyleNavDiv, 
  StyleNavP 
} from "../StyleComponents.js";
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
  const user = fireFuncs.getAuthUser();

  useEffect(() => {
    user ? setName(user.displayName) : setName();
  }, [user]);
  
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
      <NavJobKitchen queen={true} icon={logoImg} alt="logo" word="Burger Queen" />
      <NavJobKitchen icon={iconChef} alt="kitchen-icon" word={name} />
      <NavJobKitchen 
        data-testid="orders"
        icon={iconOrder} 
        alt="orders" 
        word="Pedidos"
        onClick={handleClickOrder} 
      />
      <NavJobKitchen 
        data-testid="historic-order" 
        icon={iconHistoric} 
        alt="historic-order" 
        word="Histórico" 
        onClick={handleClickHistoric}
      />
      <NavJobKitchen 
        data-testid="signout-icon"
        icon={iconLogOut} 
        alt="signout-icon" 
        word="Sair" 
        onClick={handleClickOut}
      />
    </StyledNavKitchen>
  );
}