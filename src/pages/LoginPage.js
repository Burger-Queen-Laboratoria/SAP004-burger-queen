import React, { useState } from "react";
import { ErrorArea } from "../components/Errors.js";
import { Button } from "../components/Button.js";
import { InputComponent } from "../components/Input.js";
import { fireFuncs } from "../firebase/firebaseFunctions.js";
import { useHistory } from "react-router-dom";
import logoImg from "../img-documents/logo-burger.png";
import { Footer } from "../components/Footer.js";
import { ErrorDictionary } from "../firebase/error.js";
import {
  TitleLogo,
  ImgLogo,
  StyleSection,
  StyleForm,
  RegisterMember,
  NewMember,
  StyleLink,
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
      .then((doc) => {
        if (doc.sector === "Hall") {
          history.push("/lounge");
        } else {
          history.push("/kitchen");
        } 
      })
      .catch((err) => {
        const firebaseError = new ErrorDictionary(err);
        setErrorLogin(firebaseError.translate());
      });
  };

  return (
    <>
      <StyleSection>
        <ImgLogo src={logoImg} alt="logo-burger-queen"></ImgLogo>
        <TitleLogo size="true">Burger Queen</TitleLogo>
        <StyleForm>
          <InputComponent
            data-testid="email"
            required
            type="email"
            placeholder=" exemplo@exemplo.com"
            onBlur={handleInputEmail}
          />
          <InputComponent
            data-testid="password"
            required
            type="password"
            placeholder=" senha"
            onBlur={handleInputPassword}
          />
          <Button 
            data-testid="button-login"
            type="submit" 
            name="Entrar" 
            onClick={handleClick} />
        </StyleForm>
        <ErrorArea err={errorLogin} />
        <NewMember>Funcionário novo?</NewMember>
        <StyleLink to="/register">
          <RegisterMember>Registre-se</RegisterMember>
        </StyleLink>
      </StyleSection>
      <Footer />
    </>
  );
};
