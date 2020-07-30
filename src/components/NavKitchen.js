import React from "react";
import iconJob from "../img-documents/kitchenIcon.svg";
import iconSignOut from "../img-documents/signoutIcon.svg";
import iconOrder from "../img-documents/orderIcon.svg";
import iconHistoric from "../img-documents/historicIcon.svg";
import { 
  DivNavKitchen, 
  ImgIcon, 
  TagP, 
  FixedNavKitchen, 
  SpanNavKitchenFirst, 
  SpanNavKitchen, 
  TagDiv, 
  ImgNavKitchen, 
  TagH6,
  TagSpam, 
} from "../components/StyleKitchen.js"

const NavJobKitchen = (props) => {
  return (
    <DivNavKitchen {...props}>
      <ImgIcon src={props.icon} alt={props.alt} ></ImgIcon>
      <TagP>{props.word}</TagP>
    </DivNavKitchen>
  )
}

export const NavigationKitchen = (props) => {
  return (
    <FixedNavKitchen>
      <SpanNavKitchenFirst>
        <TagDiv>
          <ImgNavKitchen src={props.logo} alt={props.alt} ></ImgNavKitchen>
          <TagH6>BurgerQueen</TagH6>
        </TagDiv>
      </SpanNavKitchenFirst>
      <SpanNavKitchen>
        <NavJobKitchen icon={iconOrder} alt="orders" word="Pedidos" />
        <NavJobKitchen icon={iconHistoric} alt="historic-order" word="Histórico" />
        <TagSpam>
          <NavJobKitchen icon={iconJob} alt="kitchen-icon" word="Fulano" />
          <NavJobKitchen icon={iconSignOut} alt="signout-icon" word="Sair" {...props} />
        </TagSpam>
      </SpanNavKitchen>
    </FixedNavKitchen>
  )
}