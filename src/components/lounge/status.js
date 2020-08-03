import React, { useState, useEffect } from "react";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import { LoungeSection, TableOrders, TH, TD } from "../StyleComponents";

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
    <LoungeSection>
      <TableOrders>
        <tbody>
          <tr>
            <TH>Cliente</TH>
            <TH>Mesa</TH>
            <TH>Hora</TH>
            <TH>Status</TH>
          </tr>
          {orders.map((order) => {
            return (
              <tr key={order.id}>
                <TD>{order.cliente}</TD>

                <TD>{order.mesa}</TD>

                {/* <TD>{order.hora}</TD> */}

                <TD>{order.status}</TD>
              </tr>
            );
          })}
        </tbody>
      </TableOrders>
    </LoungeSection>
  );
};
