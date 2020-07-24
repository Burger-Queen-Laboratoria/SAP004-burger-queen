import React from "react";

const Checkbox = ({ label, id }) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="checkbox" />
    </div>
  );
};
export default Checkbox;
