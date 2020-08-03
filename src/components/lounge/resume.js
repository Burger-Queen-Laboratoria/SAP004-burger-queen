import React from "react";
import { MenusContainer, ItensContainer } from "../StyleComponents";
import { Button } from "../Button";

export const Resume = (props) => {
  const sumPrice = (arrayProducts) => {
    return arrayProducts.reduce((acc, nextProduct) => {
      return (acc += nextProduct.price * nextProduct.count);
    }, 0);
  };
  const handleClick = (option) => {
    if (option.count > 1) {
      props.setValue((options) => {
        return props.options.map((item) => {
          return item.id === option.id
            ? { ...item, count: item.count - 1 }
            : item;
        });
      });
    } else {
      props.setValue(
        props.options.filter((element) => {
          return element.id !== option.id;
        })
      );
    }
  };
  if (props.resume) {
    return (
      <MenusContainer>
        <h1>TOTAL:R$ {sumPrice(props.options)}</h1>
        {props.options.map((option) => {
          return (
            <ItensContainer key={option.id}>
              <span>
                <h3>{option.item}</h3>
                <h3>Quantidade</h3>
                <h3>{option.count}</h3>
              </span>
              <h3>Preço Unidade R$ {option.price}</h3>
              <Button
                name="-"
                onClick={() => {
                  handleClick(option);
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
