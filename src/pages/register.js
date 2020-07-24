import React from "react";
import { InputComponent } from "../components/Input.js";
import { BtnRegister } from "../components/Button.js";
import Label from "../components/label.js";
import {
  BtnsRegisterContainer,
  TitleLogo,
  StyleForm,
  CheckboxContainer,
  CheckboxRegister,
} from "../components/StyleComponents.js";

export const Register = () => {
  return (
    <StyleForm>
      <TitleLogo>Preencha os campos abaixo:</TitleLogo>
      <InputComponent type="text" text="Nome e sobrenome" />
      <InputComponent type="email" text="exemplo@exemplo.com" />
      <CheckboxContainer>
        <CheckboxRegister
          type="checkbox"
          id="hall"
          name="hall"
        ></CheckboxRegister>
        <Label htmlFor="hall" text="Salão" />
        <CheckboxRegister
          type="checkbox"
          id="kitchen"
          name="kitchen"
        ></CheckboxRegister>
        <Label htmlFor="kitchen" text="Cozinha" />
      </CheckboxContainer>
      <InputComponent type="password" text="senha" />
      <BtnsRegisterContainer>
        <BtnRegister type="submit" name="Registrar"></BtnRegister>
        <BtnRegister type="button" name="Voltar"></BtnRegister>
      </BtnsRegisterContainer>
    </StyleForm>
  );
};
