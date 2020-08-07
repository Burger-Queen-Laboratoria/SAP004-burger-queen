import React, { useState } from "react";
import {
  MenusContainer,
  ItensContainer,
  MenusImg,
  StyleAsideMenu,
  StyleSectionMenu,
  StyleDivMenu,
} from "../StyleComponents.js";
import menuUm from "../../img-documents/menuex1.png";
import menuDois from "../../img-documents/menuex2.png";
import { fireFuncs } from "../../firebase/firebaseFunctions.js";
import { Products } from "./products.js";
import { Resume } from "./resume.js";

export const Menu = (props) => {
  const [display, setDisplay] = useState("block"),
    [displayAside, setDisplayAside] = useState("none"),
    [widthSection, setWidthSection] = useState("100%"),
    [showResume, setShowResume] = useState(false),
    [menuItens, setMenuItens] = useState([]),
    [addItensToResume, setItensToResume] = useState([]);

  const ChangeStyleScreen = (event) => {
    setMenuItens([]);
    setDisplay("flex");
    setDisplayAside("flex");
    setWidthSection("70%");
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
    setMenuItens((menuItens) =>
      [...menuItens, doc].sort((a, b) => {
        if (a.item < b.item) {
          return -1;
        }
        if (a.item > b.item) {
          return 1;
        }
        return 0;
      })
    );
  };
  return (
    <StyleDivMenu>
      <StyleSectionMenu width={widthSection}>
        <div>
          <MenusContainer display={display}>
            <ItensContainer>
              <MenusImg src={menuUm} id="menu-1" onClick={ChangeStyleScreen} />
            </ItensContainer>

            <ItensContainer>
              <MenusImg
                src={menuDois}
                id="menu-2"
                onClick={ChangeStyleScreen}
              />
            </ItensContainer>
          </MenusContainer>

          <Products
            options={menuItens}
            valueItem={addItensToResume}
            setValue={setItensToResume}
          />
        </div>
      </StyleSectionMenu>
      <StyleAsideMenu display={displayAside}>
        <Resume
          resume={showResume}
          options={addItensToResume}
          setValue={setItensToResume}
          name={props.garcom}
          nameClient={props.name}
          tableNUm={props.table}
        />
      </StyleAsideMenu>
    </StyleDivMenu>
  );
};
