import React, { useState, useEffect } from "react";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import { Title } from "../kitchen/TitleKitchen.js";
import { TitleOrderArea, TagPArea } from "../kitchen/OrderKitchen.js";
import { StyleTagSection, StyleTagDiv, StyleTagUl } from "../kitchen/StyleKitchen.js";

const OrderSection = (props, key) => {
  return (
    <li key={key}>
    <StyleTagDiv>
      <TagPArea item={props.cliente} />
      <TagPArea item={props.mesa} />
      <TagPArea item={props.hora} />
      <TagPArea item={props.status} />
    </StyleTagDiv>
  </li>
  );
}

export const Status = () => {
  const [orders, setOrders] = useState([]);

  const showOrders = (result) => {
    result.forEach((element) => {
      let order = element.data();
      order.id = element.id;
      setOrders((orders) => [...orders, order]);
    });
  };

  useEffect(() => {
    let unsubscribe = fireFuncs.getCurrentOrders(showOrders);
    return () => unsubscribe();
  }, []);

  return (
    <section>
      <Title name="Status"/>
      <StyleTagSection>
        <TitleOrderArea time="Hora"/>
        <StyleTagUl>
          {orders.map((order) =>{
            return <OrderSection 
              key={order.id} 
              cliente={order.cliente} 
              status={order.status} 
              hora={order.hora} 
              mesa={order.mesa}/>
          })}
        </StyleTagUl>
      </StyleTagSection>
    </section>
  );
};
