import React from "react";
import { MenusContainer, ItensContainer } from "../StyleComponents";
import { Button } from "../Button";

export const Resume = (props) => {
  const handleClick = (id) => {
    props.setValue(
      props.options.filter((element) => {
        return element.id !== id;
      })
    );
  };
  if (props.resume) {
    return (
      <MenusContainer>
        <h1>TOTAL:R$ 00</h1>
        {props.options.map((option) => {
          return (
            <ItensContainer key={option.id}>
              <span>{option.item}</span>
              <p>R$ {option.price}</p>
              <Button
                name="-"
                onClick={() => {
                  handleClick(option.id);
                }}
              />
            </ItensContainer>
          );
        })}
        <Button name="Enviar para Cozinha" />
      </MenusContainer>
    );
  } else {
    return <MenusContainer></MenusContainer>;
  }
};
