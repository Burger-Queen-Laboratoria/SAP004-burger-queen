import React from "react";
import { useHistory } from "react-router-dom";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
// import { getOrder } from "../firebase/firebaseKitchen.js";
import logoImg from "../img-documents/logo-burger.png";
import { NavigationKitchen } from "../components/NavKitchen.js";
import { Title } from "../components/TitleKitchen.js";
import { OrderArea, TitleOrderArea } from "../components/OrderKitchen.js";
import { StyleTagUl, StyleTagSection } from "../components/StyleKitchen.js"

export const KitchenScreen = () => {
  let history = useHistory();

  const handleClick = () => {
    fireFuncs.authSignOut().then(() => history.push("/"));
  };

  return (
    <>
      <NavigationKitchen alt="burger-queen" logo={logoImg} onClick={handleClick}/>
      <section>
        <Title name="Pedidos"/>
        <StyleTagSection>
          <TitleOrderArea />
          <StyleTagUl>
            <OrderArea identification="mesa 1"/>
            {/* {getOrder().then((order) => order.forEach(item => {
              return <OrderArea name={item.data().nome} hour={item.data().hora} table={item.data().mesa}/>
            }))} */}
          </StyleTagUl>
        </StyleTagSection>
      </section>
    </>
  );
};
