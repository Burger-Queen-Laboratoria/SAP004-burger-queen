import React from "react";
import { IconsNavBar, TextBurgerQ } from "./StyleComponents";

export const Figure = ({ text, ...props }) => {
  return (
    <figure>
      <IconsNavBar {...props} />
      <TextBurgerQ bold="bold">{text}</TextBurgerQ>
    </figure>
  );
};
