import React, { useState } from "react";
import { Button } from "../Button";
import { StyleDivProducts, StyleDivItensMenu } from "../StyleComponents";
import { Checkbox } from "../Checkbox";

export const Products = ({ options, valueItem, setValue }) => {
  const [extraItens, setExtraItens] = useState(""),
    [displayExtras, setDisplayExtras] = useState(false),
    width = true;

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

  const handleExtraItens = (item) => {
    if (item.startsWith("Hambúrguer")) {
      setDisplayExtras(true);
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
      {displayExtras && (
        <Checkbox
          options={[
            { extra: "Bovino", key: "carne" },
            { extra: "Frango", key: "frango" },
            { extra: "Vegetariano", key: "veg" },
          ]}
          value={extraItens}
          setValue={setExtraItens}
        />
      )}
    </StyleDivProducts>
  );
};
