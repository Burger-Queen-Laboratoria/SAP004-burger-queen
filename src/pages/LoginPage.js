import React, { useState } from "react";
import { ErrorArea } from "../components/Errors.js";
import { Button } from "../components/Button.js";
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
          fireFuncs.getCurrentUser(e.user.uid).then((doc) => {
            if (doc.data().sector === "Hall") {
              history.push("/lounge");
            } else {
              history.push("/kitchen");
            }
          });
        }
      })
      .catch((err) => {
        setErrorLogin(err.message);
      });
  };

  return (
    <StyleSection>
      <ImgLogo src={logoImg} alt="logo-burger-queen"></ImgLogo>
      <TitleLogo size="true">Burger Queen</TitleLogo>
      <StyleForm>
        <InputComponent
          data-testid="useremail"
          required
          type="email"
          placeholder="exemplo@exemplo.com"
          onBlur={handleInputEmail}
        />
        <InputComponent
          data-testid="userpassword"
          required
          type="password"
          placeholder="senha"
          onBlur={handleInputPassword}
        />
        <Button
          type="submit"
          name="Entrar"
          onClick={handleClick}
        />
      </StyleForm>
      <ErrorArea err={errorLogin} />
      <NewMember>Funcionário novo?</NewMember>
      <Link to="/register">
        <RegisterMember>Registre-se</RegisterMember>
      </Link>
    </StyleSection>
  );
};
