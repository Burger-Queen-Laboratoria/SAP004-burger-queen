import React, { useState } from "react";
import { InputEmail, InputPassword, BtnLogin } from "../components/Components.js";
import { authSignIn } from "../firebaseFunctions.js";
import { useHistory, Link } from "react-router-dom";
import logoImg from "../img-documents/logo-burger.png";
import { TitleLogo, ImgLogo, StyleSection, StyleForm, RegisterMember, NewMember } from "../components/StyleComponents.js";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
 
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value)
  }

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    authSignIn(email, password).then((e) => {
      if (e.user.uid !== null) {
        history.push('/lounge');
      }
    })
  }

  return (
    <StyleSection>
      <ImgLogo src={logoImg} alt="logo-burger-queen"></ImgLogo>
      <TitleLogo>Burger Queen</TitleLogo>
      <StyleForm>
        <InputEmail func={handleInputEmail} />
        <InputPassword func={handleInputPassword}/>
        <BtnLogin func={handleClick}/>
      </StyleForm>
      <NewMember>Funcionário novo?</NewMember>
      <Link to="/sobre">
        <RegisterMember>Registre-se</RegisterMember>
      </Link>
    </StyleSection>
  )
};
