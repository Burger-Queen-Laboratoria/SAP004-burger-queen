import React from "react";
import { InputEmail, InputPassword } from "../Components.js";
import { StyleInput } from "../StyleComponents.js";

export const Register = () => {
  return (
    <form>
      <h1>Preencha</h1>
      <StyleInput type="text" name="name" placeholder="Digite o seu nome" />
      <InputEmail />
      <InputPassword />
      <button type="submit">Registrar</button>
      <button type="button">Voltar</button>
    </form>
  );
};
