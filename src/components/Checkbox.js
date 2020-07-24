import React from "react";
import { CheckboxRegister } from "./StyleComponents";

export const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((intemValue) => intemValue !== target.value));
    }
    return (
      <div>
        {options.map((option) => (
          <label key={option}>
            <CheckboxRegister
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    );
  }
};
