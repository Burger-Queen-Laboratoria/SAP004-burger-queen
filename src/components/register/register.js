import React from "react";
import { InputEmail, InputPassword } from "../Components.js";
import {
  StyleInput,
  StyleForm,
  CheckboxRegister,
  BtnsRegisterContainer,
  StyleBtnRegister,
} from "../StyleComponents.js";

export const Register = () => {
  return (
    <StyleForm>
      <h1>Preencha os campos abaixo:</h1>
      <StyleInput type="text" name="name" placeholder="Nome e sobrenome" />
      <InputEmail />
      <InputPassword />
      <CheckboxRegister>
        <input type="checkbox" id="hall" name="hall"></input>
        <label htmlFor="hall">Salão</label>
        <input type="checkbox" id="kitchen" name="kitchen"></input>
        <label htmlFor="kitchen">Cozinha</label>
      </CheckboxRegister>
      <BtnsRegisterContainer>
        <StyleBtnRegister type="submit">Registrar</StyleBtnRegister>
        <StyleBtnRegister type="button">Voltar</StyleBtnRegister>
      </BtnsRegisterContainer>
    </StyleForm>
  );
};
