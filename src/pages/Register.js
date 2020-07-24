import React, { useState } from "react";
import { InputComponent } from "../components/Input.js";
import { BtnRegister } from "../components/Button.js";
import Checkbox from "../components/Checkbox.js";
import {
  BtnsRegisterContainer,
  TitleLogo,
  StyleForm,
  CheckboxContainer,
  CheckboxRegister,
} from "../components/StyleComponents.js";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const createUser = (event) => {
    event.preventDefault();
    console.log(name, email);
  };

  const setElements = (event, callbackSet) => {
    event.preventDefault();
    callbackSet(event.target.value);
  };

  return (
    <StyleForm>
      <TitleLogo>Preencha os campos abaixo:</TitleLogo>
      <InputComponent
        type="text"
        text="Nome e sobrenome"
        func={(e) => {
          setElements(e, setName);
        }}
      />
      <InputComponent
        type="email"
        text="exemplo@exemplo.com"
        func={(e) => {
          setElements(e, setEmail);
        }}
      />
      <TitleLogo>Selecione o setor:</TitleLogo>
      <CheckboxContainer>
        <Checkbox id="Salão" label="Salão"></Checkbox>
        <Checkbox id="Cozinha" label="Cozinha"></Checkbox>
      </CheckboxContainer>
      <InputComponent type="password" text="senha" />
      <BtnsRegisterContainer>
        <BtnRegister
          type="submit"
          name="Registrar"
          func={createUser}
        ></BtnRegister>
        <BtnRegister type="button" name="Voltar"></BtnRegister>
      </BtnsRegisterContainer>
    </StyleForm>
  );
};
