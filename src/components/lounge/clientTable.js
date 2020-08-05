import React, { useState } from "react";
import { Button } from "../Button";
import { ContainerSection, StyleForm } from "../StyleComponents.js";
import { InputComponent } from "../Input";

export const ClientTable = (props) => {
  const [nameClient, setNameClient] = useState(""),
    [tableNum, setTableNum] = useState("");

  const width = true;

  const setElements = (event, callbackSet) => {
    event.preventDefault();
    callbackSet(event.target.value);
  };

  return (
    <ContainerSection>
      <StyleForm>
        <InputComponent
          width={width ? 1 : 0}
          type="text"
          placeholder="Nome do Cliente"
          onBlur={(e) => {
            setElements(e, setNameClient);
          }}
        />
        <InputComponent
          width={width ? 1 : 0}
          type="number"
          min="1"
          placeholder="Número da Mesa"
          onBlur={(e) => {
            setElements(e, setTableNum);
          }}
        />
        <Button
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
