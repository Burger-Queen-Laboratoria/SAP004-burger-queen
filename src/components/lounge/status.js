import React, { useState, useEffect } from "react";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import { ItensContainer } from "../StyleComponents";

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
    <div>
      {orders.map((order) => {
        return (
          <ItensContainer key={order.id}>
            <span>{order.cliente}</span>
            <span>{order.mesa}</span>
            <span>{order.hora}</span>
            <span>{order.status}</span>
          </ItensContainer>
        );
      })}
    </div>
  );
};
