import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { InputComponent } from "../components/Input.js";
import { Button } from "../components/Button.js";
import { Checkbox } from "../components/Checkbox.js";
import { ErrorDictionary } from "../firebase/error.js";
import { ErrorArea } from "../components/Errors.js";
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
        fireFuncs.collectionUser(result.user, name, sectorJob[0]).then(() => {
          if (sectorJob[0] === "kitchen") {
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
        require
        type="email"
        text="exemplo@exemplo.com"
        func={(e) => {
          setElements(e, setEmail);
        }}
      />
      <Title>Selecione o setor:</Title>

      <Checkbox
        options={[
          { name: "Salão", key: "Hall" },
          { name: "Cozinha", key: "kitchen" },
        ]}
        value={sectorJob}
        setValue={setSectorJob}
      />

      <InputComponent
        require
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

      <ErrorArea err={errorMessage} />
    </StyleForm>
  );
};
