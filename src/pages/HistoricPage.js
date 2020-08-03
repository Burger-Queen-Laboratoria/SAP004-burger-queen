import React from "react";
import { NavigationKitchen } from "../components/kitchen/NavKitchen.js"
import { HistoricKitchen } from "../components/kitchen/HistoricKitchen.js"

export const HistoricArea = () => {
  return (
    <>
      <NavigationKitchen />
      <HistoricKitchen />
    </>
  )
}