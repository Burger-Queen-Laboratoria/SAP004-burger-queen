import React, { useState } from "react";
import {
  MenusContainer,
  ItensContainer,
  MenusImg,
} from "../StyleComponents.js";
import menuUm from "../../img-documents/menuex1.png";
import menuDois from "../../img-documents/menuex2.png";
import { fireFuncs } from "../../firebase/firebaseFunctions.js";
import { Products } from "./products.js";
import { Resume } from "./resume.js";

export const Menu = () => {
  const [display, setDisplay] = useState("block"),
    [aliItem, setAlign] = useState("center"),
    [justCont, setJustfy] = useState("center"),
    [width, setWidth] = useState("100%"),
    [resume, setResume] = useState(false),
    [menuItens, setMenuItens] = useState([]);

  const ChangeStyleScreen = (event) => {
    setMenuItens([]);
    setDisplay("flex");
    setAlign("flex-start");
    setJustfy("flex-start");
    setWidth("80%");
    setResume(true);
    getMenus(event.currentTarget.id.split("-")[1]);
  };

  const getMenus = (menu) => {
    menu = parseInt(menu);
    fireFuncs.getMenuItens(menu).then((result) => {
      result.forEach((doc) => {
        printMenuItens(doc.data(), doc.id);
      });
    });
  };

  const printMenuItens = (doc, id) => {
    doc.id = id;
    setMenuItens((menuItens) => [...menuItens, doc]);
  };
  return (
    <MenusContainer>
      <MenusContainer
        display={display}
        align={aliItem}
        justfy={justCont}
        wid={width}
      >
        <ItensContainer>
          <MenusImg src={menuUm} id="menu-1" onClick={ChangeStyleScreen} />
        </ItensContainer>

        <ItensContainer>
          <MenusImg src={menuDois} id="menu-2" onClick={ChangeStyleScreen} />
        </ItensContainer>
      </MenusContainer>
      <Products options={menuItens} />
      <Resume resume={resume} />
    </MenusContainer>
  );
};
