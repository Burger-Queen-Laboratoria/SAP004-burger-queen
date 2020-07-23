import React from "react";
import { StyleError } from "./StyleComponents.js";

export const ErrorArea = (props) => {
  return (
    <StyleError>{props.err}</StyleError>
  )
};