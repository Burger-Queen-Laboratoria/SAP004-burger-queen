import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "./enzyme.js";
import { Register } from "../pages/Register.js";

it("should display an input to fill question", () => {
  const wrapper = shallow(<Register />);
  expect(wrapper.find("InputComponent").length).toBe(3);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
