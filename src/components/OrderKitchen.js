import React from "react";
import { StyleHeader, StyleTagDiv, StyleTagUl } from "./StyleKitchen.js"

const TagPArea = (props) => {
  return (
    <p>{props.item}</p>
  )
}

export const OrderArea = (props, key) => {
  return (
    <li key={key}>
      <StyleTagDiv>
        <TagPArea item={props.order.name} />
        <TagPArea item={props.order.table} />
        <TagPArea item={props.order.hour} />
        <TagPArea item="Status" />
      </StyleTagDiv>
      <section></section>
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
      {props.orders.map(o => <OrderArea key={o.item} order={o}/>)}
    </StyleTagUl>
  )
}