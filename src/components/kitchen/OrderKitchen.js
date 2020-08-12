import React, { useState, useEffect } from "react";
import {
  StyleTagUl,
  StyleHeader,
  StyleTagSection,
  StyleTagDiv,
  StyleSectionOrder,
  StyleButtonOrder,
} from "../StyleComponents.js";
import moment from "moment";
import { fireFuncs } from "../../firebase/firebaseFunctions.js";
import { Title } from "../kitchen/TitleKitchen.js";
import { NavigationKitchen } from "../kitchen/NavKitchen.js";
import { changeSatusColor } from "../lounge/OrderSection.js";

export const TagPArea = (props) => {
  return <p>{props.item}</p>;
};

const OrderArea = (props, key) => {
  const [display, setDisplay] = useState(false);
  const orderList = props.order.itens;

  const handleClickOrder = () => {
    display ? setDisplay(false) : setDisplay(true);
  };

  const handleClickStatusOrder = () => {
    fireFuncs.concludeOrder(props.order);
  };

  return (
    <li key={key} onClick={handleClickOrder}>
      <StyleTagDiv color={changeSatusColor(props.order.status)}>
        <TagPArea item={props.order.name} />
        <TagPArea item={props.order.table} />
        <TagPArea item={moment(props.order.initialHour).format("HH:mm:ss")} />
        <TagPArea item={props.order.status} />
      </StyleTagDiv>
      {display && (
        <StyleSectionOrder>
          <div>
            {orderList.map((i) => (
              <p key={key + i.item}>{i.count} {i.item} {i.ext}</p>
            ))}
          </div>
          <StyleButtonOrder onClick={handleClickStatusOrder}>
            Concluído
          </StyleButtonOrder>
        </StyleSectionOrder>
      )}
    </li>
  );
};

export const TitleOrderArea = (props) => {
  return (
    <StyleHeader>
      <TagPArea item="Nome do Cliente" />
      <TagPArea item="Nº da Mesa" />
      <TagPArea item={props.time} />
      <TagPArea item="Status do Pedido" />
    </StyleHeader>
  );
};

const UlOrder = (props) => {
  return (
    <StyleTagUl>
      {props.orders.map((o) => (
        <OrderArea key={o.id} order={o} />
      ))}
    </StyleTagUl>
  );
};

const OrderAreaComplete = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fireFuncs.snapshotOrders(setOrders);
  }, []);

  return (
    <section>
      <Title name="Pedidos" />
      <StyleTagSection>
        <TitleOrderArea time="Hora do Pedido" />
        <UlOrder orders={orders} />
      </StyleTagSection>
    </section>
  );
};

export const OrderPage = () => {
  return (
    <>
      <NavigationKitchen />
      <OrderAreaComplete />
    </>
  );
};
