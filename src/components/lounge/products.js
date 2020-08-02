import React from "react";
import { Button } from "../Button";
import { MenusContainer, ItensContainer } from "../StyleComponents";

export const Products = ({ options }) => {
  console.log(options);
  return (
    <MenusContainer>
      {options.map((option) => {
        return (
          <ItensContainer key={option.id}>
            <span>{option.item}</span>
            <p>R$ {option.price}</p>
            <Button name="+" />
          </ItensContainer>
        );
      })}
    </MenusContainer>
  );
};
