import React from "react";
import { StyleButton, StyleBtnRegister } from "./StyleComponents.js";

export const BtnBackgroundBlackComponent = (props) => {
  return (
    <StyleButton type={props.type} onClick={props.func}>
      {props.name}
    </StyleButton>
  );
};

export const BtnRegister = (props) => {
  return <StyleBtnRegister type={props.type}>{props.name}</StyleBtnRegister>;
};
