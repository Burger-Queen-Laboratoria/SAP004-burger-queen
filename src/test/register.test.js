import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow, mount, render } from "./enzyme.js";
import { Register } from "../pages/Register.js";

import { Checkbox } from "../components/Checkbox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("should display an input to fill question", () => {
  const wrapper = shallow(<Register />);
  expect(wrapper.find("InputComponent").length).toBe(3);
});

describe("Checkbox", () => {
  it("should display an input to fill question", () => {
    const wrapper = mount(<Register />);
    expect(wrapper.find("Checkbox").length).toBe(1);
  });
  it("Should render Checkbox without errors", () => {
    render(<Checkbox onChange={() => {}} defaultValue="default value" />);
  });
});

// it("pass a selected value to the onChange handler", () => {
//   const value = "2";
//   const options = "cargo";
//   const onChange = jest.fn();
//   const wrapper = shallow(<Checkbox options={options} onChange={onChange} />);

//   expect(wrapper).toMatchSnapshot(Checkbox);

//   wrapper.find("Checkbox").simulate("change", {
//     target: { value },
//   });

//   expect(onChange).toBeCalledWith(value);
// });
