import React from "react";
import { StyleFooter, MenusImg } from "../components/StyleComponents.js";
import copyRight from "../img-documents/copyright.png";

export const Footer = () => {
  return (
    <StyleFooter>
      Desenvolvido por:
      <a href="https://github.com/jessicamelise">Jéssica Melise </a>
      <a href="https://github.com/naereloire">Naere Loire </a>
      <MenusImg src={copyRight} style={{ width: "50px" }} />
    </StyleFooter>
  );
};
