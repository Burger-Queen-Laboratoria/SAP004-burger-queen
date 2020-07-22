import React from "react";
import { StyleInput, StyleButton, StyleError } from "./StyleComponents.js";

export const InputEmail = (props) => {
  return (
    <StyleInput type="e-mail" placeholder="exemplo@exemplo.com" onBlur={props.func}></StyleInput>
  )
};

export const InputPassword = (props) => {
  return (
    <StyleInput type="password" placeholder="senha" onBlur={props.func}></StyleInput>
  )
};

export const BtnLogin = (props) => {
  return (
    <StyleButton type="submit" onClick={props.func}>Entrar</StyleButton>
  )
};

export const BtnLogout = (props) => {
  return (
    <button type="submit" onClick={props.func}>Sair</button>
  )
};

export const ErrorArea = (props) => {
  return (
    <StyleError>{props.err}</StyleError>
  )
};