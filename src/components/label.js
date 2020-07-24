import React from "react";

const label = (props) => {
  return <label htmlFor={props.htmlFor}>{props.text}</label>;
};

export default label;
