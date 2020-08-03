import React, {useState, useEffect} from "react";
import { Title } from "../kitchen/TitleKitchen.js";
import { StyleTagSection } from "../kitchen/StyleKitchen.js";
import { UlOrder, TitleOrderArea } from "./OrderKitchen.js";
import { snapshotConcludeOrders } from "../../firebase/firebaseKitchen.js";

export const HistoricKitchen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    snapshotConcludeOrders(setOrders);
  }, []);

  return (
    <section>
    <Title name="Histórico"/>
    <StyleTagSection>
      <TitleOrderArea time="Tempo de Preparo"/>
      <UlOrder orders={orders}/>
    </StyleTagSection>
  </section>        
  )
}