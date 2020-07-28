import React from "react";
import { useHistory } from "react-router-dom";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import logoImg from "../img-documents/logo-burger.png";
import iconJob from "../img-documents/kitchenIcon.svg";
import iconSignOut from "../img-documents/signoutIcon.svg";
import iconOrder from "../img-documents/orderIcon.svg";
import iconHistoric from "../img-documents/historicIcon.svg";
import styled from "styled-components";


//ir para o styleComponents
const FixedNavKitchen = styled.nav`
  display: flex;
  width: calc(100% - 10px);
  height: 90px;
  background-color: white;
  position: fixed;
  padding: 10px;
  justify-content: space-around;
  font-family: Helvética;
`;

const ImgNavKitchen = styled.img`
  width: 35%;

  @media(max-width: 400px) {
    width: 80%;
  }
`;

const ImgIcon = styled.img`
  height: 60%;
  cursor: pointer;
`;

const SpanNavKitchen = styled.span`
  display: flex;
  width: 80%;
  justify-content: flex-end;

  @media(max-width: 400px) {
    height: 70%;
  }
`;

const DivNavKitchen = styled.div`
  text-align: center;
  margin-right: 10px;
  width: 50%;
`;

const SpanNavKitchenFirst = styled.span`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
`;

const TagP = styled.p`
  font-family: "helvetica";

  @media(max-width: 400px) {
    font-size: 13px;
  }
`;

const TagH6 = styled.h6`
  margin: 0px;
  font-family: "Burger Queen";
  font-size: 25px;

  @media(max-width: 400px) {
    font-size: 15px;
  }
`;

const TagDiv = styled.div`
  width: 100%;
`;

const TagSpam = styled.span`
  display: flex;
  width: 40%;
`;

//ir para o arquivo de components

const NavJobKitchen = (props) => {
  return (
    <DivNavKitchen {...props}>
      <ImgIcon src={props.icon} alt={props.alt} ></ImgIcon>
      <TagP>{props.word}</TagP>
    </DivNavKitchen>
  )
}

const NavigationKitchen = (props) => {
  return (
    <FixedNavKitchen>
      <SpanNavKitchenFirst>
        <TagDiv>
          <ImgNavKitchen src={props.logo} alt={props.alt} ></ImgNavKitchen>
          <TagH6>BurgerQueen</TagH6>
        </TagDiv>
      </SpanNavKitchenFirst>
      <SpanNavKitchen>
        <NavJobKitchen icon={iconOrder} alt="orders" word="Pedidos"/>
        <NavJobKitchen icon={iconHistoric} alt="historic-order" word="Histórico"/>
        <TagSpam>
          <NavJobKitchen icon={iconJob} alt="kitchen-icon" word="Fulano"/>
          <NavJobKitchen icon={iconSignOut} alt="signout-icon" word="Sair" {...props}/>
        </TagSpam>
      </SpanNavKitchen>
    </FixedNavKitchen>
  )
}

//manter aqui - tela construida
export const KitchenScreen = () => {
  let history = useHistory();

  const handleClick = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  return (
    <>
      <NavigationKitchen alt="burger-queen" logo={logoImg} onClick={handleClick}/>
    </>
  );
};
