import React from "react";
import { CheckboxRegister, CheckboxContainer } from "./StyleComponents";

export const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([target.value]);
    } else {
      setValue(value.filter((intemValue) => intemValue !== target.value));
    }
  }
  return (
    <CheckboxContainer>
      {options.map((option) => (
        <label key={option.name}>
          <CheckboxRegister
            type="checkbox"
            value={option.key}
            checked={value.includes(option.key)}
            onChange={handleChange}
          />
          {option.name}
        </label>
      ))}
    </CheckboxContainer>
  );
};
