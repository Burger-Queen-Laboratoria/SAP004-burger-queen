import React, { useState } from "react";
import { InputEmail, InputPassword, BtnLogin } from "../Components.js"
import { authSignIn } from "../firebaseFunctions.js"
import { useHistory, Link } from "react-router-dom";

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
    <>
    <form>
      <InputEmail func={handleInputEmail} />
      <InputPassword func={handleInputPassword}/>
      <BtnLogin func={handleClick}/>
    </form>
    <p>Funcionário novo?</p>
    <Link to="/sobre">
      <p>Registre-se</p>
    </Link>
    </>
  )
};
