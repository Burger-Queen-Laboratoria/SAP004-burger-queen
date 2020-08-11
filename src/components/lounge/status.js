import React, { useState, useEffect } from "react";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import { Title } from "../kitchen/TitleKitchen.js";
import { TitleOrderArea } from "../kitchen/OrderKitchen.js";
import { Button } from "../Button.js";
import { StyleTagUl, StyleTagSection } from "../StyleComponents.js";
import { OrderSection } from "./OrderSection.js";

export const Status = () => {
  const [orders, setOrders] = useState([]);
  const [limitOrders, setLimitOrders] = useState(10);

  const showOrders = (result) => {
    setOrders([]);
    result.forEach((element) => {
      let order = element.data();
      order.id = element.id;
      setOrders((orders) => [...orders, order]);
    });
  };

  useEffect(() => {
    let unsubscribe = fireFuncs.getCurrentOrders(showOrders, limitOrders);
    return () => unsubscribe();
  }, []); // eslint-disable-line

  useEffect(() => {
    let unsubscribe = fireFuncs.getCurrentOrders(showOrders, limitOrders);
    return () => unsubscribe();
  }, [limitOrders]);

  const handleLimitOrders = () => {
    setOrders([]);
    setLimitOrders(limitOrders + 1);
  };

  return (
    <section>
      <Title name="Status" />
      <StyleTagSection>
        <TitleOrderArea time="Hora do Pedido" />
        <StyleTagUl>
          {orders.map((order) => {
            return (
              <OrderSection
                key={order.id}
                id={order.id}
                cliente={order.cliente}
                status={order.status}
                hora={order.hora}
                mesa={order.mesa}
                item={order.pedido}
              />
            );
          })}
        </StyleTagUl>
        <Button name="ver mais" onClick={handleLimitOrders} />
      </StyleTagSection>
    </section>
  );
};
