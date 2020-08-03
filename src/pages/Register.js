import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { InputComponent } from "../components/Input.js";
import { Button } from "../components/Button.js";
import { Checkbox } from "../components/Checkbox.js";
import { ErrorDictionary } from "../firebase/error.js";
import { ErrorArea } from "../components/Errors.js";
import logoImg from "../img-documents/logo-burger.png";
import {
  BtnsRegisterContainer,
  TitleLogo,
  StyleForm,
  Title,
  RegisterTitleFlex,
  ImgLogoRegister,
} from "../components/StyleComponents.js";

export const Register = () => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [sectorJob, setSectorJob] = useState([]),
    [errorMessage, setErrorMessage] = useState("");
  let history = useHistory();

  const setElements = (event, callbackSet) => {
    event.preventDefault();
    callbackSet(event.target.value);
  };

  const createUser = (event) => {
    event.preventDefault();
    fireFuncs
      .authCreateUser(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: name });
        fireFuncs
          .collectionUser(result.user, name, email, sectorJob[0])
          .then(() => {
            if (sectorJob[0] === "Kitchen") {
              history.push("/kitchen");
            } else {
              history.push("/lounge");
            }
          });
      })
      .catch((error) => {
        const firebaseError = new ErrorDictionary(error);
        setErrorMessage(firebaseError.translate());
      });
  };

  const btnBack = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <StyleForm>
      <RegisterTitleFlex>
        <ImgLogoRegister
          src={logoImg}
          alt="logo-burger-queen"
        ></ImgLogoRegister>
        <TitleLogo>Burger Queen</TitleLogo>
      </RegisterTitleFlex>
      <InputComponent
        type="text"
        placeholder="Nome e sobrenome"
        onBlur={(e) => {
          setElements(e, setName);
        }}
      />
      <InputComponent
        require
        type="email"
        placeholder="exemplo@exemplo.com"
        onBlur={(e) => {
          setElements(e, setEmail);
        }}
      />
      <Title>Selecione o setor:</Title>

      <Checkbox
        options={[
          { name: "Salão", key: "Hall" },
          { name: "Cozinha", key: "Kitchen" },
        ]}
        value={sectorJob}
        setValue={setSectorJob}
      />

      <InputComponent
        require
        type="password"
        placeholder="senha"
        onBlur={(e) => {
          setElements(e, setPassword);
        }}
      />

      <BtnsRegisterContainer>
        <Button type="submit" name="Registrar" onClick={createUser}></Button>
        <Button type="button" name="Voltar" onClick={btnBack}></Button>
      </BtnsRegisterContainer>

      <ErrorArea err={errorMessage} />
    </StyleForm>
  );
};
