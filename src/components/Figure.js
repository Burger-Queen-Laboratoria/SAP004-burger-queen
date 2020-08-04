import React from "react";
import { StyleFigure } from "./StyleComponents";
import { StyledNavImg, StyleNavP } from "./kitchen/StyleKitchen.js"

export const Figure = ({ text, ...props }) => {
  return (
    <StyleFigure>
      <StyledNavImg {...props} />
      <StyleNavP {...props}>{text}</StyleNavP>
    </StyleFigure>
  );
};
