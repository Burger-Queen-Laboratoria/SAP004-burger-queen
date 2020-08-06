import React, { useState } from "react";
import { fireFuncs } from "../../firebase/firebaseFunctions";
import { TagPArea } from "../kitchen/OrderKitchen";
import {
  StyleTagDiv,
  StyleSectionOrder,
  StyleButtonOrder,
} from "../StyleComponents";

export const OrderSection = ({ id, ...props }) => {
  const [display, setDisplay] = useState(false);

  const handleClickOrder = () => {
    display ? setDisplay(false) : setDisplay(true);
  };

  const handleClickStatusOrder = () => {
    fireFuncs.updateOrder(id, "Entregue");
  };

  return (
    <li key={id} onClick={handleClickOrder}>
      <StyleTagDiv>
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
          <StyleButtonOrder onClick={handleClickStatusOrder}>
            Entregue
          </StyleButtonOrder>
        </StyleSectionOrder>
      )}
    </li>
  );
};
