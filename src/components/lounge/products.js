import React from "react";
import { Button } from "../Button";
import { StyleDivProducts, StyleDivItensMenu } from "../StyleComponents";

export const Products = ({ options, valueItem, setValue }) => {
  const width = true;

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
    <StyleDivProducts>
      {options.map((option) => {
        return (
          <StyleDivItensMenu key={option.id}>
            <span>{option.item}</span>
            <h3>R$ {option.price}</h3>
            <Button
              width={width ? 1 : 0}
              name="+"
              onClick={() => {
                handleClick(option);
              }}
            />
          </StyleDivItensMenu>
        );
      })}
    </StyleDivProducts>
  );
};
