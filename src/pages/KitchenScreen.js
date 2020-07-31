import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { getOrder } from "../firebase/firebaseKitchen.js";
import { NavigationKitchen } from "../components/NavKitchen.js";
import { Title } from "../components/TitleKitchen.js";
import { TitleOrderArea, UlOrder } from "../components/OrderKitchen.js";
import { StyleTagSection } from "../components/StyleKitchen.js";

export const KitchenScreen = () => {
  let history = useHistory();
  const [orders, setOrders] = useState([]);


  const handleClick = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  useEffect(() => {
    getOrder().then(setOrders);
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
