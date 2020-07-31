import React, { useState } from "react";
import {
  MenusContainer,
  MenusSpan,
  MenusImg,
} from "../components/StyleComponents.js";
import menuUm from "../img-documents/menuex1.png";
import menuDois from "../img-documents/menuex2.png";

export const Menu = () => {
  const [display, setDisplay] = useState("block"),
    [aliItem, setAlign] = useState("center"),
    [justCont, setJustfy] = useState("center"),
    [width, setWidth] = useState("100%");

  const ChangeStyleScreen = () => {
    setDisplay("flex");
    setAlign("flex-start");
    setJustfy("flex-start");
    setWidth("80%");
  };

  return (
    <MenusContainer
      display={display}
      align={aliItem}
      justfy={justCont}
      wid={width}
    >
      <MenusSpan>
        <MenusImg src={menuUm} onClick={ChangeStyleScreen} />
      </MenusSpan>
      <MenusSpan>
        <MenusImg src={menuDois} onClick={ChangeStyleScreen} />
      </MenusSpan>
    </MenusContainer>
  );
};
