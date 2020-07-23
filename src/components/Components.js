import React from "react";
import { StyleInput, StyleButton, StyleError } from "./StyleComponents.js";

export const InputComponent = (props) => {
  return (
    <StyleInput type={props.type} placeholder={props.text} onBlur={props.func}></StyleInput>
  )
};

export const BtnBackgroundBlackComponent = (props) => {
  return (
    <StyleButton type={props.type} onClick={props.func}>{props.name}</StyleButton>
  )
};

export const ErrorArea = (props) => {
  return (
    <StyleError>{props.err}</StyleError>
  )
};