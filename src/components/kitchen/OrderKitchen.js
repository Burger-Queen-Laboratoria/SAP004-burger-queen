import React from "react";
import { StyleHeader, StyleTagDiv, StyleTagUl, StyleSectionOrder, StyleButtonOrder } from "./StyleKitchen.js"

const TagPArea = (props) => {
  return (
    <p>{props.item}</p>
  )
}

export const OrderArea = (props, key) => {

  const orderList = props.order.itens;

  return (
    <li key={key}>
      <StyleTagDiv>
        <TagPArea item={props.order.name} />
        <TagPArea item={props.order.table} />
        <TagPArea item={props.order.hour} />
        <TagPArea item={props.order.status} />
      </StyleTagDiv>
      <StyleSectionOrder>
        <div>{orderList.map(i=><p key={key+i}>{i}</p>)}</div>
        <StyleButtonOrder>Concluído</StyleButtonOrder>
      </StyleSectionOrder>
    </li>
  )
};

export const TitleOrderArea = () => {
  return (
    <StyleHeader>
      <TagPArea item="Nome" />
      <TagPArea item="Mesa" />
      <TagPArea item="Hora" />
      <TagPArea item="Status" />
    </StyleHeader>
  )
}

export const UlOrder = (props) => {
  return (
    <StyleTagUl>
      {props.orders.map(o => <OrderArea key={o.id} order={o}/>)}
    </StyleTagUl>
  )
}