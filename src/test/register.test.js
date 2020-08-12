import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import Register from "../pages/Register";

it("should display an input to fill question", () => {
  const wrapper = shallow(<Register />);
  expect(wrapper.find("input").length).toBe(3);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
