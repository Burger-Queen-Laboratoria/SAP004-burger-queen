import React, { useState } from "react";
import { ButtonMenu } from "../Button";
import { ContainerSection, StyleForm } from "../StyleComponents.js";
import { InputComponent } from "../Input";

export const ClientTable = (props) => {
  const [nameClient, setNameClient] = useState(""),
    [tableNum, setTableNum] = useState("");

  const setElements = (event, callbackSet) => {
    event.preventDefault();
    callbackSet(event.target.value);
  };

  return (
    <ContainerSection>
      <StyleForm>
        <InputComponent
          type="text"
          placeholder="Nome do Cliente"
          onBlur={(e) => {
            setElements(e, setNameClient);
          }}
        />
        <InputComponent
          type="number"
          min="1"
          placeholder="Numero da Mesa"
          onBlur={(e) => {
            setElements(e, setTableNum);
          }}
        />
        <ButtonMenu
          id="menu"
          name="Menu"
          onClick={(event) => {
            props.callback(event, nameClient, tableNum);
          }}
        />
      </StyleForm>
    </ContainerSection>
  );
};
