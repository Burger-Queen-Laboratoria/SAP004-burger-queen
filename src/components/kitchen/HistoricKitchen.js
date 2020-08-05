import React, {useState, useEffect} from "react";
import { Title } from "../kitchen/TitleKitchen.js";
import { 
  StyleTagUl, 
  StyleSectionOrder,
  StyleTagDiv,
  StyleTagSection,
} from "./StyleKitchen.js";
import { TitleOrderArea, TagPArea } from "./OrderKitchen.js";
import { snapshotConcludeOrders } from "../../firebase/firebaseKitchen.js";
import moment from "moment";

const HistoricList = (props, key) => {
  const [display, setDisplay] = useState(false);
  const orderList = props.order.itens;

  const handleClickOrder = () => {
    display ? setDisplay(false) : setDisplay(true);
  }

  return (
    <li key={key} onClick={handleClickOrder}>
      <StyleTagDiv>
        <TagPArea item={props.order.name} />
        <TagPArea item={props.order.table} />
        <TagPArea item={props.order.prepareTime} />
        <TagPArea item={props.order.status} />
      </StyleTagDiv>
      {display &&
        <StyleSectionOrder >
          <div>
            <p>pedido:</p>
            {orderList.map(i=><p key={key+i.item}>{i.item}</p>)}
            <p>Valor total: {props.order.totalPrice} reais</p>
          </div>
          <div>
            <p>Hora inicial: {moment(props.order.initialHour).format("DD/MM/YYYY, HH:mm:ss")}</p>
            <p>Hora final: {moment(props.order.finalHour.toDate()).format("DD/MM/YYYY, HH:mm:ss")}</p>
            <p>Garçom: {props.order.waiter}</p>
            <p>Cozinheiro: {props.order.chef}</p>
          </div>
        </StyleSectionOrder>
      }
    </li>
  );
};

const UlHistoric = (props) => {
  return (
    <StyleTagUl>
      {props.orders.map(o => <HistoricList key={o.id} order={o}/>)}
    </StyleTagUl>
  );
}

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
      <UlHistoric orders={orders}/>
    </StyleTagSection>
  </section>        
  )
}