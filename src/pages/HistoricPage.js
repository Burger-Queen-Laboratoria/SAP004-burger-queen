import React from "react";
import { NavigationKitchen } from "../components/kitchen/NavKitchen.js"
import { HistoricKitchen } from "../components/kitchen/HistoricKitchen.js"
import { Footer } from "../components/Footer.js";
import { StyleDivMainHeight } from "../components/StyleComponents.js"

export const HistoricArea = () => {
  return (
    <>
      <StyleDivMainHeight>
        <NavigationKitchen />
        <HistoricKitchen />
      </StyleDivMainHeight>
      <Footer />
    </>
  )
}