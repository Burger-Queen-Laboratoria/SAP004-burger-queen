import React, { useState, useEffect } from "react";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import { Title } from "../kitchen/TitleKitchen.js";
import { TitleOrderArea, TagPArea } from "../kitchen/OrderKitchen.js";
import {
  StyleTagUl,
  StyleTagSection,
  StyleTagDiv,
} from "../StyleComponents.js";

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
};

export const Status = () => {
  const [orders, setOrders] = useState([]);
  const [limitOrders, setLimitOrders] = useState(1);

  const showOrders = (result) => {
    result.forEach((element) => {
      let order = element.data();
      order.id = element.id;
      setOrders((orders) => [...orders, order]);
    });
  };

  useEffect(() => {
    let unsubscribe = fireFuncs
      .getCurrentOrders(showOrders, limitOrders)
      .then((result) => {
        showOrders(result);
      });
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   fireFuncs.getCurrentOrders(showOrders, limitOrders).then((result) => {
  //     showOrders(result);
  //   });
  // }, [limitOrders]);

  const handleLimitOrders = () => {
    setOrders([]);
    console.log(limitOrders);
    setLimitOrders(limitOrders + 1);
  };

  return (
    <section>
      <Title name="Status" />
      <StyleTagSection>
        <TitleOrderArea time="Hora" />
        <StyleTagUl>
          {orders.map((order) => {
            return (
              <OrderSection
                key={order.id}
                cliente={order.cliente}
                status={order.status}
                hora={order.hora}
                mesa={order.mesa}
              />
            );
          })}
        </StyleTagUl>
        <Button name="ver mais" onClick={handleLimitOrders} />
      </StyleTagSection>
    </section>
  );
};
