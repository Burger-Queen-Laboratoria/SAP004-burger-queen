import React, { useState } from "react";
import { MenusContainer, MenusSpan, MenusImg } from "../StyleComponents.js";
import menuUm from "../../img-documents/menuex1.png";
import menuDois from "../../img-documents/menuex2.png";

export const Menu = () => {
  const [display, setDisplay] = useState("block"),
    [aliItem, setAlign] = useState("center"),
    [justCont, setJustfy] = useState("center"),
    [width, setWidth] = useState("100%"),
    [resume, setResume] = useState(false);

  const ChangeStyleScreen = () => {
    setDisplay("flex");
    setAlign("flex-start");
    setJustfy("flex-start");
    setWidth("80%");
    setResume(true);
  };

  return (
    <MenusContainer>
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
      <Resume resume={resume} />
    </MenusContainer>
  );
};

const Resume = (props) => {
  if (props.resume) {
    return <div>TOTAL:</div>;
  } else {
    return <div></div>;
  }
};
