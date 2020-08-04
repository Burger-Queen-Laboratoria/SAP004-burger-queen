import React, { useState } from "react";
import {
  FlexGrowContainer,
  MenusContainer,
  ItensContainer,
  MenusImg,
  DirectionRow,
  FlexUmContainer,
} from "../StyleComponents.js";
import menuUm from "../../img-documents/menuex1.png";
import menuDois from "../../img-documents/menuex2.png";
import { fireFuncs } from "../../firebase/firebaseFunctions.js";
import { Products } from "./products.js";
import { Resume } from "./resume.js";

export const Menu = (props) => {
  const [display, setDisplay] = useState("block"),
    [aliItem, setAlign] = useState("center"),
    [justCont, setJustfy] = useState("center"),
    [width, setWidth] = useState("100%"),
    [showResume, setShowResume] = useState(false),
    [menuItens, setMenuItens] = useState([]),
    [addItensToResume, setItensToResume] = useState([]);

  const ChangeStyleScreen = (event) => {
    setMenuItens([]);
    setDisplay("flex");
    setAlign("flex-start");
    setJustfy("flex-start");
    setWidth("100%");
    setShowResume(true);
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
    <DirectionRow>
      <FlexGrowContainer>
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

        <Products
          options={menuItens}
          valueItem={addItensToResume}
          setValue={setItensToResume}
        />
      </FlexGrowContainer>
      <Resume
        resume={showResume}
        options={addItensToResume}
        setValue={setItensToResume}
        name={props.garcom}
        nameClient={props.name}
        tableNUm={props.table}
      />
    </DirectionRow>
  );
};
