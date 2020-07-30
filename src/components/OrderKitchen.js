import React from "react";
import { StyleHeader, StyleTagDiv } from "./StyleKitchen.js"

const TagPArea = (props) => {
  return (
    <p>{props.item}</p>
  )
}

export const OrderArea = (props, key) => {
  return (
    <li key={key}>
      <StyleTagDiv>
        <TagPArea item={props.name} />
        <TagPArea item={props.table} />
        <TagPArea item={props.hour} />
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