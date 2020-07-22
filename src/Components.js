import React from "react";

export const InputEmail = (props) => {
  return (
    <input type="e-mail" onBlur={props.func}></input>
  )
};

export const InputPassword = (props) => {
  return (
    <input type="password" onBlur={props.func}></input>
  )
};

export const BtnLogin = (props) => {
  return (
    <button type="submit" onClick={props.func}>Entrar</button>
  )
};

export const BtnLogout = (props) => {
  return (
    <button type="submit" onClick={props.func}>Sair</button>
  )
};