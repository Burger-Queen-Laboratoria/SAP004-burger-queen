import React from "react";
import { useHistory } from "react-router-dom";
import { FlexUmContainer, ItensContainer } from "../StyleComponents";
import { Button, ButtonMenu } from "../Button";
import { fireFuncs } from "../../firebase/firebaseFunctions";

export const Resume = (props) => {
  let history = useHistory();
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

  const handleSendOrder = () => {
    const pedidos = {
      garcom: props.name,
      cliente: props.nameClient,
      mesa: props.tableNUm,
      pedido: props.options,
      status: "Pedido enviado para cozinha",
      hora: new Date().toLocaleTimeString(),
      data: new Date().toLocaleDateString(),
      horaInicial: new Date(Date.now()),
      horaFinal: null,
      tempoPreparo: null,
      total: sumPrice(props.options),
    };
    fireFuncs.collectionAdd("pedidos", pedidos).then((doc) => {
      history.push("/");
    });
  };

  if (props.resume) {
    return (
      <FlexUmContainer>
        <h1>TOTAL:R$ {sumPrice(props.options)}</h1>
        {props.options.map((option) => {
          return (
            <ItensContainer key={option.id}>
              <span>
                <p>{option.item}</p>
              </span>
              <p>
                <span>Qtd:</span>
                <span>{option.count}</span>
                <span>
                  <Button
                    name="-"
                    onClick={() => {
                      handleClick(option);
                    }}
                  />
                </span>
              </p>
              <h3>Preço Unidade R$ {option.price}</h3>
              
            </ItensContainer>
          );
        })}

        <ButtonMenu name="Enviar para Cozinha" onClick={handleSendOrder} />
      </FlexUmContainer>
    );
  } else {
    return <div></div>;
  }
};
