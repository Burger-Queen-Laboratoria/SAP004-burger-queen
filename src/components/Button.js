import React from "react";
import { StyleButton } from "./StyleComponents.js";

export const Button = (props) => {
  return <StyleButton {...props}>{props.name}</StyleButton>;
};
