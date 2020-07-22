import React from "react";
import { BtnLogout } from "../components/Components.js";
import { authSignOut } from "../firebaseFunctions.js";
import { useHistory } from "react-router-dom";

export const LoungePage = () => {

  let history = useHistory();

  const handleClick = () => {
    authSignOut().then(()=>history.push('/'));
  }

  return (
    <>
      <p>Lounge World!</p>
      <BtnLogout func={handleClick}/>
    </>
  )
};
