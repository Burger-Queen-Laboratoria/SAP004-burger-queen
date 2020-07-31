import React from "react";
import { ButtonMenu } from "../Button";
import { MenusContainer, MenusSpan } from "../StyleComponents.js";

export const Order = (props) => {
  return (
    <MenusContainer>
      <MenusSpan>
        <h1>Nome do Cliente:</h1>
      </MenusSpan>
      <MenusSpan>
        <h1>Numero da Mesa</h1>
      </MenusSpan>
      <ButtonMenu id="menu" name="Menu" onClick={props.callback} />
    </MenusContainer>
  );
};
