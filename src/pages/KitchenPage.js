import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { snapshotOrders } from "../firebase/firebaseKitchen.js";
import { NavigationKitchen } from "../components/kitchen/NavKitchen.js";
import { Title } from "../components/kitchen/TitleKitchen.js";
import { TitleOrderArea, UlOrder } from "../components/kitchen/OrderKitchen.js";
import { StyleTagSection } from "../components/kitchen/StyleKitchen.js";

export const KitchenPage = () => {
  let history = useHistory();
  const [orders, setOrders] = useState([]);

  const handleClick = () => {
    fireFuncs
      .authSignOut()
      .then(() => history.push("/"));
  };

  useEffect(() => {
    snapshotOrders(setOrders);
  }, []);

  return (
    <>
      <NavigationKitchen onClick={handleClick}/>
      <section>
        <Title name="Pedidos"/>
        <StyleTagSection>
          <TitleOrderArea />
          <UlOrder orders={orders}/>
        </StyleTagSection>
      </section>
    </>
  );
};
