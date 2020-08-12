import React from "react";
import { StyleFooter, StylePFooter, StyleTagA } from "../components/StyleComponents.js";

export const Footer = () => {
  return (
    <StyleFooter>
      <StylePFooter>Desenvolvido por:</StylePFooter>
      <StyleTagA
        href="https://github.com/jessicamelise"
        title="Jéssica Melise"
        target="_blank"
      >
        Jéssica Melise
      </StyleTagA>
      <StylePFooter>e</StylePFooter>
      <StyleTagA
        href="https://github.com/naereloire"
        title="Naere Loire"
        target="_blank"
      >
        Naere Loire
      </StyleTagA>
    </StyleFooter>
  );
};
