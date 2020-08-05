import React from "react";
import { OrderPage } from "../components/kitchen/OrderKitchen.js";
import { Footer } from "../components/Footer.js";
import { StyleDivMainHeight } from "../components/StyleComponents.js"

export const KitchenPage = () => {
 
  return (
    <>
      <StyleDivMainHeight>
        <OrderPage />
      </StyleDivMainHeight>
    <Footer />
    </>
  );
};
