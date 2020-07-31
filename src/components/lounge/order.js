import React from "react";
import { Button } from "../components/Button";
import { MenusContainer, MenusSpan } from "../components/StyleComponents.js";

export const Order = (props) => {
  return (
    <MenusContainer>
      <MenusSpan>
        <h1>Nome do Cliente:</h1>
      </MenusSpan>
      <MenusSpan>
        <h1>Numero da Mesa</h1>
        <Button id="menus" name="Menu" onClick={props.callback} />
      </MenusSpan>
    </MenusContainer>
  );
};
