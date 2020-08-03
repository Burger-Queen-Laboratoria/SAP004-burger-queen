import React from "react";
import { Button } from "../Button";
import { MenusContainer, ItensContainer } from "../StyleComponents";

export const Products = ({ options, valueItem, setValue }) => {
  const handleClick = (object) => {
    if (
      valueItem.some((item) => {
        return item.id === object.id;
      })
    ) {
      setValue((valueItem) => {
        return valueItem.map((item) => {
          return item.id === object.id
            ? { ...item, count: item.count + 1 }
            : item;
        });
      });
    } else {
      object.count = 1;
      setValue((valueItem) => [...valueItem, object]);
    }
  };

  return (
    <MenusContainer>
      {options.map((option) => {
        return (
          <ItensContainer key={option.id}>
            <span>{option.item}</span>
            <h3>R$ {option.price}</h3>
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
