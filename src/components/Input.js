import React from "react";
import { StyleInput } from "./StyleComponents.js";

export const InputComponent = (props) => {
  return (
    <StyleInput type={props.type} placeholder={props.text} onBlur={props.func}></StyleInput>
  )
};