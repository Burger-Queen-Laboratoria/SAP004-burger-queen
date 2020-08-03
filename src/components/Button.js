import React from "react";
import { StyleButton, StyleButtonM } from "./StyleComponents.js";

export const Button = (props) => {
  return <StyleButton {...props}>{props.name}</StyleButton>;
};

export const ButtonMenu = (props) => {
  return <StyleButtonM {...props}>{props.name}</StyleButtonM>;
};
