import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  StyleImgDeleteIcon,
  StylePResume,
  StyleDivResume,
  StyleItensResume,
} from "../StyleComponents";
import { Button } from "../Button";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import deleteIcon from "../../img-documents/delete.svg";
import { Checkbox } from "../Checkbox";

export const Resume = (props) => {
  let history = useHistory();
  const width = true;

  const handleExtraItens = (item) => {
    return item.startsWith("Hambúrguer");
  };

  const sumPrice = (arrayProducts) => {
    return arrayProducts.reduce((acc, nextProduct) => {
      return (acc += nextProduct.price * nextProduct.count);
    }, 0);
  };
  const handleClick = (option) => {
    if (option.count > 1) {
      props.setValue(() => {
        return props.options.map((item) => {
          return item.id === option.id && item.ext === option.ext
            ? { ...item, count: item.count - 1 }
            : item;
        });
      });
    } else {
      props.setValue(
        props.options.filter((element) => {
          return element.id + element.ext !== option.id + option.ext;
        })
      );
    }
  };

  const handleSendOrder = () => {
    const pedidos = {
      garcom: props.name,
      cozinheiro: null,
      cliente: props.nameClient,
      mesa: props.tableNUm,
      pedido: props.options,
      status: "Em andamento",
      hora: new Date().toLocaleTimeString(),
      data: new Date().toLocaleDateString(),
      horaInicial: new Date(Date.now()),
      horaFinal: null,
      tempoPreparo: null,
      total: sumPrice(props.options),
      flagDelivered: false,
    };
    fireFuncs.collectionAdd("pedidos", pedidos).then((doc) => {
      history.push("/");
    });
  };

  if (props.resume) {
    return (
      <StyleDivResume>
        <h1>TOTAL: R$ {sumPrice(props.options)}</h1>
        {props.options.map((option) => {
          return (
            <StyleItensResume key={option.id + option.ext}>
              <div>{option.item}</div>
              <StylePResume>
                <span>Qtd:</span>
                <span>{option.count}</span>
                <span>
                  <StyleImgDeleteIcon
                    src={deleteIcon}
                    alt="delete-icon"
                    onClick={() => {
                      handleClick(option);
                    }}
                  ></StyleImgDeleteIcon>
                </span>
              </StylePResume>
              <div>Preço Unidade R$ {option.price}</div>
              {handleExtraItens(option.item) && (
                <Checkbox
                  direction="column;"
                  options={[
                    { name: "Bovino", key: "carne" },
                    { name: "Frango", key: "frango" },
                    { name: "Vegan", key: "vegano" },
                  ]}
                  value={option.ext ? option.ext : []}
                  setValue={(value) => {
                    props.setValue(
                      props.options.map((item) =>
                        item.id === option.id && item.ext === option.ext
                          ? { ...item, ext: value }
                          : item
                      )
                    );
                  }}
                />
              )}
            </StyleItensResume>
          );
        })}

        <Button width={width ? 1 : 0} name="Enviar" onClick={handleSendOrder} />
      </StyleDivResume>
    );
  } else {
    return <div></div>;
  }
};
