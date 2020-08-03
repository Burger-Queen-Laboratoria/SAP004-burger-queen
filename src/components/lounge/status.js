import React, { useState, useEffect } from "react";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import {
  LoungeSection,
  UlStyle,
  Container,
  ContainerTh,
  ContainerSection,
} from "../StyleComponents";

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
    <ContainerSection>
      <Container>
        <ContainerTh>Cliente</ContainerTh>
        <ContainerTh>Mesa</ContainerTh>
        <ContainerTh>Hora</ContainerTh>
        <ContainerTh>Status</ContainerTh>
      </Container>
      {orders.map((order) => {
        return (
          <UlStyle key={order.id}>
            <UlStyle>{order.cliente}</UlStyle>

            <UlStyle>{order.mesa}</UlStyle>

            <UlStyle>{order.hora}</UlStyle>

            <UlStyle>{order.status}</UlStyle>
          </UlStyle>
        );
      })}
    </ContainerSection>
  );
};
