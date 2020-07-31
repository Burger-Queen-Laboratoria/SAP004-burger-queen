import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { getOrder } from "../firebase/firebaseKitchen.js";
import { NavigationKitchen } from "../components/NavKitchen.js";
import { Title } from "../components/TitleKitchen.js";
import { TitleOrderArea, OrderArea } from "../components/OrderKitchen.js";
import { StyleTagUl, StyleTagSection } from "../components/StyleKitchen.js";

export const KitchenScreen = () => {
  let history = useHistory();
  const [order, setOrder] = useState(null)

  const handleClick = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  const teste = () => {
    getOrder().then((eachOption) => eachOption.forEach((order) => {
      let key = order.id
      let name = order.data().nome;
      let hour = order.data().hora;
      let table = order.data().mesa;
      setOrder(<OrderArea key={key} name={name} hour={hour} table={table}/>)
    }));
  }

  useEffect(() => {
    teste();
  }, []);

  console.log(order)

  return (
    <>
      <NavigationKitchen onClick={handleClick}/>
      <section>
        <Title name="Pedidos"/>
        <StyleTagSection>
          <TitleOrderArea />
          <StyleTagUl>
            {order}
          </StyleTagUl>
        </StyleTagSection>
      </section>
    </>
  );
};
