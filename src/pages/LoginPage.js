import React, { useState } from "react";
import { ErrorArea } from "../components/Errors.js";
import { BtnBackgroundBlackComponent } from "../components/Button.js";
import { InputComponent } from "../components/Input.js";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { useHistory, Link } from "react-router-dom";
import logoImg from "../img-documents/logo-burger.png";
import {
  TitleLogo,
  ImgLogo,
  StyleSection,
  StyleForm,
  RegisterMember,
  NewMember,
} from "../components/StyleComponents.js";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  let history = useHistory();

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fireFuncs
      .authSignIn(email, password)
      .then((e) => {
        if (e.user.uid !== null) {
          history.push("/lounge");
        }
      })
      .catch((err) => {
        setErrorLogin(err.message);
      });
  };

  return (
    <StyleSection>
      <ImgLogo src={logoImg} alt="logo-burger-queen"></ImgLogo>
      <TitleLogo>Burger Queen</TitleLogo>
      <StyleForm>
        <InputComponent
          type="email"
          text="exemplo@exemplo.com"
          func={handleInputEmail}
        />
        <InputComponent
          type="password"
          text="senha"
          func={handleInputPassword}
        />
        <BtnBackgroundBlackComponent
          type="submit"
          name="Entrar"
          func={handleClick}
        />
      </StyleForm>
      <ErrorArea err={errorLogin} />
      <NewMember>Funcionário novo?</NewMember>
      <Link to="/Register">
        <RegisterMember>Registre-se</RegisterMember>
      </Link>
    </StyleSection>
  );
};
