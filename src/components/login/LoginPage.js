import React, { useState } from "react";
import {
  InputEmail,
  InputPassword,
  BtnLogin,
  ErrorArea,
} from "../Components.js";
import { authSignIn } from "../../firebase/firebaseFunctions.js";
import { useHistory, Link } from "react-router-dom";
import logoImg from "../../img-documents/logo-burger.png";
import {
  TitleLogo,
  ImgLogo,
  StyleSection,
  StyleForm,
  RegisterMember,
  NewMember,
} from "../StyleComponents.js";

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
    authSignIn(email, password)
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
        <InputEmail func={handleInputEmail} />
        <InputPassword func={handleInputPassword} />
        <BtnLogin func={handleClick} />
      </StyleForm>
      <ErrorArea err={errorLogin} />
      <NewMember>Funcionário novo?</NewMember>
      <Link to="/register">
        <RegisterMember>Registre-se</RegisterMember>
      </Link>
    </StyleSection>
  );
};
