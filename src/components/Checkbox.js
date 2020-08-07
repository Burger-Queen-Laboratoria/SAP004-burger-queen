import React from "react";
import {
  CheckboxRegister,
  CheckboxContainer,
  CheckboxLabel,
} from "./StyleComponents";

export const Checkbox = ({ options, value, setValue, ...props }) => {
  function handleChange({ target }) {
    console.log(value);
    if (target.checked) {
      setValue([target.value]);
    } else {
      setValue(value.filter((intemValue) => intemValue !== target.value));
    }
  }
  console.log(props.direction);
  return (
    <CheckboxContainer direction={props.direction}>
      {options.map((option) => (
        <CheckboxLabel checked={value.includes(option.key)} key={option.name}>
          <CheckboxRegister
            value={option.key}
            checked={value.includes(option.key)}
            onChange={handleChange}
          />
          {option.name}
        </CheckboxLabel>
      ))}
    </CheckboxContainer>
  );
};
