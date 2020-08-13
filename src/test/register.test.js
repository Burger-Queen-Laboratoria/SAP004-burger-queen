import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow, mount } from "./enzyme.js";
import { Register } from "../pages/Register.js";

it("should display an input to fill question", () => {
  const wrapper = shallow(<Register />);
  expect(wrapper.find("InputComponent").length).toBe(3);
});

it("should display an input to fill question", () => {
  const wrapper = mount(<Register />);
  expect(wrapper.find("Checkbox").length).toBe(1);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
