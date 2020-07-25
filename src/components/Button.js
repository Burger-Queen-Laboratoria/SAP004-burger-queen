import React from "react";
import { StyleButton, StyleBtnRegister } from "./StyleComponents.js";

export const BtnBackgroundBlackComponent = (props) => {
  return (
    <StyleButton type={props.type} onClick={props.func}>
      {props.name}
    </StyleButton>
  );
};

export const Button = (props) => {
  return <StyleBtnRegister {...props}>{props.name}</StyleBtnRegister>;
};