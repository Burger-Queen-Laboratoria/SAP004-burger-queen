import React, { useState } from "react";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import { TagPArea } from "../kitchen/OrderKitchen";
import {
  StyleTagDiv,
  StyleSectionOrder,
  StyleButtonOrder,
} from "../StyleComponents";

export const changeSatusColor = (status) => {
  switch (status) {
    case "Em andamento":
      return "#a04835";
    case "concluído":
      return "#faedcb";
    case "Entregue":
      return "#a1c181";
    default:
      return null;
  }
};

export const OrderSection = ({ id, ...props }) => {
  const [display, setDisplay] = useState(false),
    [displayBtn, setDisplayBtn] = useState(true);

  const handleClickOrder = () => {
    if (props.status === "Entregue" || props.status === "Em andamento") {
      setDisplayBtn(false);
    }
    display ? setDisplay(false) : setDisplay(true);
  };

  const handleClickStatusOrder = () => {
    fireFuncs.updateOrder(id, "Entregue");
    setDisplayBtn(false);
  };

  return (
    <li key={id} onClick={handleClickOrder}>
      <StyleTagDiv color={changeSatusColor(props.status)}>
        <TagPArea item={props.cliente} />
        <TagPArea item={props.mesa} />
        <TagPArea item={props.hora} />
        <TagPArea item={props.status} />
      </StyleTagDiv>
      {display && (
        <StyleSectionOrder>
          <div>
            {props.item.map((i) => (
              <p key={id + i.item}>{i.item}</p>
            ))}
          </div>
          {displayBtn && (
            <StyleButtonOrder onClick={handleClickStatusOrder}>
              Entregue
            </StyleButtonOrder>
          )}
        </StyleSectionOrder>
      )}
    </li>
  );
};
