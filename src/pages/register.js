import React from "react";
import { InputComponent } from "../components/Input.js";
import { Form } from "../components/form.js";
import {
  BtnsRegisterContainer,
  TitleLogo,
  StyleBtnRegister,
} from "../components/StyleComponents.js";

export const Register = () => {
  return (
    <Form>
      <TitleLogo>Preencha os campos abaixo:</TitleLogo>
      <InputComponent type="text" text="Nome e sobrenome" />
      <InputComponent type="email" text="exemplo@exemplo.com" />
      <InputComponent type="password" text="senha" />
      <BtnsRegisterContainer>
        <StyleBtnRegister type="submit">Registrar</StyleBtnRegister>
        <StyleBtnRegister type="button">Voltar</StyleBtnRegister>
      </BtnsRegisterContainer>
    </Form>
  );
};
