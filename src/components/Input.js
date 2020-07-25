import React from "react";
import { StyleInput } from "./StyleComponents.js";

export const InputComponent = (props) => {
  return (
    <StyleInput
      type={props.type}
      placeholder={props.text}
      id={props.id}
      onBlur={props.func}
      {...props.require}
    ></StyleInput>
  );
};
