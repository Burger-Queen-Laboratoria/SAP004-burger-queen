import React from "react";
import { StyleFigure, StyledNavImg, StyleNavP } from "./StyleComponents";

export const Figure = ({ text, ...props }) => {
  return (
    <StyleFigure>
      <StyledNavImg {...props} />
      <StyleNavP {...props}>{text}</StyleNavP>
    </StyleFigure>
  );
};
