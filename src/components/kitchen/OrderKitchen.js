import React, { useState } from "react";
import { 
  StyleHeader, 
  StyleTagDiv, 
  StyleTagUl, 
  StyleSectionOrder, 
  StyleButtonOrder 
} from "./StyleKitchen.js";
import { 
  concludeOrder, 
  // addHourWhenConcludeOrder, 
  // calcBetweenInicialAndFinalTimeOrder 
} from "../../firebase/firebaseKitchen.js";
import moment from "moment";

const TagPArea = (props) => {
  return (
    <p>{props.item}</p>
  );
}

export const OrderArea = (props, key) => {
  const [display, setDisplay] = useState(false);
  const orderList = props.order.itens;

  const handleClickOrder = () => {
    display ? setDisplay(false) : setDisplay(true);
  }

  const handleClickStatusOrder = () => {
    concludeOrder(props.order);
  }

  return (
    <li key={key} onClick={handleClickOrder}>
      <StyleTagDiv>
        <TagPArea item={props.order.name} />
        <TagPArea item={props.order.table} />
        <TagPArea item={moment(props.order.initialHour).format("HH:mm:ss")} />
        <TagPArea item={props.order.status} />
      </StyleTagDiv>
      {display &&
        <StyleSectionOrder >
          <div>{orderList.map(i=><p key={key+i.item}>{i.item}</p>)}</div>
          <StyleButtonOrder onClick={handleClickStatusOrder}>Concluído</StyleButtonOrder>
        </StyleSectionOrder>
      }
    </li>
  );
};

export const TitleOrderArea = () => {
  return (
    <StyleHeader>
      <TagPArea item="Nome" />
      <TagPArea item="Mesa" />
      <TagPArea item="Hora" />
      <TagPArea item="Status" />
    </StyleHeader>
  );
}

export const UlOrder = (props) => {
  return (
    <StyleTagUl>
      {props.orders.map(o => <OrderArea key={o.id} order={o}/>)}
    </StyleTagUl>
  );
}