import React, { useState, useEffect } from "react";
import { 
  StyleHeader, 
  StyleTagDiv, 
  StyleTagUl, 
  StyleSectionOrder, 
  StyleButtonOrder 
} from "./StyleKitchen.js";
import { concludeOrder } from "../../firebase/firebaseKitchen.js";
import moment from "moment";
import { snapshotOrders } from "../../firebase/firebaseKitchen.js";
import { Title } from "../kitchen/TitleKitchen.js";
import { StyleTagSection } from "../kitchen/StyleKitchen.js";
import { NavigationKitchen } from "../kitchen/NavKitchen.js";

const TagPArea = (props) => {
  return (
    <p>{props.item}</p>
  );
}

const OrderArea = (props, key) => {
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

export const TitleOrderArea = (props) => {
  return (
    <StyleHeader>
      <TagPArea item="Nome" />
      <TagPArea item="Mesa" />
      <TagPArea item={props.time} />
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

const OrderAreaComplete = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    snapshotOrders(setOrders);
  }, []);

  return (
    <section>
      <Title name="Pedidos"/>
      <StyleTagSection>
        <TitleOrderArea time="Hora"/>
        <UlOrder orders={orders}/>
      </StyleTagSection>
    </section>
  )
}

export const OrderPage = () => {
 
  return (
    <>
      <NavigationKitchen />
      <OrderAreaComplete />
    </>
  );
};