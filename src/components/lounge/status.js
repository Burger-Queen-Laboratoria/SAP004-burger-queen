import React, { useState } from "react";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import { ItensContainer } from "../StyleComponents";

export const Status = () => {
  const showOrders = (result) => {
    result.forEach((element) => {
      const order = element.data();
      order.id = element.id;
      setOrders((orders) => [...orders, element]);
    });
  };

  const [orders, setOrders] = useState([]);
  fireFuncs.getCurrentOrders(showOrders);
  return (
    <div>
      {orders.map((order) => {
        return (
          <ItensContainer key={order.id}>
            <span>{order.cliente}</span>
            <span>{order.mesa}</span>
            <span>{order.hora}</span>
            <span>{order.Status}</span>
          </ItensContainer>
        );
      })}
    </div>
  );
};
