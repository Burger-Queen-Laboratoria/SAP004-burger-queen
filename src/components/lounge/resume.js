import React from "react";
import { MenusContainer, ItensContainer } from "../StyleComponents";
import { Button } from "../Button";

export const Resume = (props) => {
  const sumPrice = (arrayProducts) => {
    return arrayProducts.reduce((acc, nextProduct) => {
      return (acc += nextProduct.price * nextProduct.count);
    }, 0);
  };
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
        <h1>TOTAL:R$ {sumPrice(props.options)}</h1>
        {props.options.map((option) => {
          return (
            <ItensContainer key={option.id}>
              <span>
                {option.item}
                <h3>Quantidade</h3>
                {option.count}
              </span>
              <h3>R$ {option.price}</h3>
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
