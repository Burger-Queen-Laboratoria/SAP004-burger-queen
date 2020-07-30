import React from "react";
import { IconsNavBar, ImgText } from "./StyleComponents";

export const Figure = ({ text, ...props }) => {
  return (
    <figure>
      <IconsNavBar {...props} />
      <ImgText bold="bold">{text}</ImgText>
    </figure>
  );
};
