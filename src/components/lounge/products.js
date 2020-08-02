import React from "react";
import { Button } from "../Button";
import { MenusContainer, ItensContainer } from "../StyleComponents";

export const Products = ({ options, valueItem, setValue }) => {
  const handleClick = (object) => {
    setValue((valueItem) => [...valueItem, object]);
  };

  return (
    <MenusContainer>
      {options.map((option) => {
        return (
          <ItensContainer key={option.id}>
            <span>{option.item}</span>
            <p>R$ {option.price}</p>
            <Button
              name="+"
              onClick={() => {
                handleClick(option);
              }}
            />
          </ItensContainer>
        );
      })}
    </MenusContainer>
  );
};
