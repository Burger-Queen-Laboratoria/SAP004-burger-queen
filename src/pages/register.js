import React from "react";
import { InputComponent } from "../components/Input.js";
import { BtnBackgroundBlackComponent } from "../components/Button.js";
import { Form } from "../components/form.js";
import {
  // StyleInput,
  // StyleForm,
  BtnsRegisterContainer,
  // StyleBtnRegister,
  TitleLogo,
} from "../components/StyleComponents.js";

export const Register = () => {
  return (
    // <StyleForm>
    <Form>
      <TitleLogo>Preencha os campos abaixo:</TitleLogo>
      <InputComponent type="text" text="Nome e sobrenome" />
      <InputComponent type="email" text="exemplo@exemplo.com" />
      <InputComponent type="password" text="senha" />
      <BtnsRegisterContainer>
        <BtnBackgroundBlackComponent type="submit">
          Registrar
        </BtnBackgroundBlackComponent>
        <BtnBackgroundBlackComponent type="button">
          Voltar
        </BtnBackgroundBlackComponent>
      </BtnsRegisterContainer>
    </Form>
    // </StyleForm>
  );
};
