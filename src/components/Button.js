import React from "react";
import { StyleButton } from "./StyleComponents.js";

export const BtnBackgroundBlackComponent = (props) => {
  return (
    <StyleButton type={props.type} onClick={props.func}>{props.name}</StyleButton>
  )
};
