import React from "react";
import { StyleFigure, StyledNavImg, StyleNavP } from "./StyleComponents";

export const Figure = ({ text, ariaCurrent, ...props }) => {
  return (
    <StyleFigure>
      <StyledNavImg {...props} />
      <StyleNavP aria-current={ariaCurrent} {...props}>
        {text}
      </StyleNavP>
    </StyleFigure>
  );
};
