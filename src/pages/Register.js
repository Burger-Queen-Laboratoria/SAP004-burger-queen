import React, { useState } from "react";
import { InputComponent } from "../components/Input.js";
import { Button } from "../components/Button.js";
import { Checkbox } from "../components/Checkbox.js";
import {
  BtnsRegisterContainer,
  TitleLogo,
  StyleForm,
  Title,
} from "../components/StyleComponents.js";

export const Register = () => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [sectorJob, setSectorJob] = useState([]);

  const setElements = (event, callbackSet) => {
    event.preventDefault();
    callbackSet(event.target.value);
  };

  const createUser = (event) => {
    event.preventDefault();
    console.log(name, email, password, sectorJob);
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
        require
        func={(e) => {
          setElements(e, setEmail);
        }}
      />
      <Title>Selecione o setor:</Title>

      <Checkbox
        options={["Salão", "Cozinha"]}
        value={sectorJob}
        setValue={setSectorJob}
      />

      <InputComponent
        type="password"
        text="senha"
        func={(e) => {
          setElements(e, setPassword);
        }}
      />

      <BtnsRegisterContainer>
        <Button type="submit" name="Registrar" onClick={createUser}></Button>
        <Button type="button" name="Voltar"></Button>
      </BtnsRegisterContainer>
    </StyleForm>
  );
};
