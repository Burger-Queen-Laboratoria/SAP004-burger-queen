import React from "react";
import { InputEmail, InputPassword } from "../Components.js";
import { StyleInput, StyleForm } from "../StyleComponents.js";

export const Register = () => {
  return (
    <StyleForm>
      <h1>Preencha</h1>
      <StyleInput type="text" name="name" placeholder="Nome e sobrenome" />
      <InputEmail />
      <InputPassword />
      <input type="checkbox" id="hall" name="hall"></input>
      <label htmlFor="hall">Salão</label>
      <input type="checkbox" id="kitchen" name="kitchen"></input>
      <label htmlFor="kitchen">Cozinha</label>
      <button type="submit">Registrar</button>
      <button type="button">Voltar</button>
    </StyleForm>
  );
};
