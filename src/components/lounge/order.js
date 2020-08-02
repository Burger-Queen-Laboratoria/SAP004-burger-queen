import React from "react";
import { ButtonMenu } from "../Button";
import { MenusContainer, StyleForm } from "../StyleComponents.js";
import { InputComponent } from "../Input";

export const Order = (props) => {
  return (
    <MenusContainer>
      <StyleForm>
        <InputComponent type="text" placeholder="Nome do Cliente" />
        <InputComponent type="number" min="1" placeholder="Numero da Mesa" />
      </StyleForm>
      <ButtonMenu id="menu" name="Menu" onClick={props.callback} />
    </MenusContainer>
  );
};
