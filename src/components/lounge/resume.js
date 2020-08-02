import React from "react";
import { MenusContainer } from "../StyleComponents";

export const Resume = (props) => {
  if (props.resume) {
    return <MenusContainer>TOTAL:</MenusContainer>;
  } else {
    return <MenusContainer></MenusContainer>;
  }
};
