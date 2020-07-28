import React from "react";
import { fireFuncs } from "../firebase/firebaseFunctions.js"
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  act,
  waitForDomChange,
  waitForElementToBeRemoved,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LoginPage } from "../pages/LoginPage.js";
import { BrowserRouter, Route } from "react-router-dom";

jest.mock("../firebase/firebaseFunctions.js");

describe('Testing LoginPage component', () => {

  let getByTestId = null;

  beforeEach(() => {
     ({ getByTestId } = render(<BrowserRouter><Route path="/" exact={true} component={LoginPage} /> </BrowserRouter>));
  });

  afterEach(() => {
    cleanup();
  });  

  test("Verify input event onBlur for email and password", () => {
    const email = "exemple@exemple.com";
    const password = "123456";
    fireEvent.blur(getByTestId("email"), {
      target: { value: email }
    });
    fireEvent.blur(getByTestId("password"), {
      target: { value: password }
    });
    expect(getByTestId("email").value).toEqual(email);
    expect(getByTestId("password").value).toEqual(password);
  });
  test('Verify if password and email inputs are required', () => {
    expect(getByTestId('email')).toBeRequired();
    expect(getByTestId('password')).toBeRequired();
  });
  test('Verify success auth from Firebase sign in', async () => {
    const email = "exemple@exemple.com";
    const password = "123456";
    fireFuncs.authSignIn.mockResolvedValueOnce();
    await expect(fireFuncs.authSignIn(email, password)).resolves;
  });
  test("Verify invalid auth from Firebase sign in", async () => {
    fireFuncs.authSignIn.mockRejectedValueOnce();
    try {
      await fireFuncs.authSignIn("", "");
    } catch (e) {
      expect(e).rejects;
    }
  });
  test("Verify if there is one button inside LoginPage", () => {
    let { container } = render(<BrowserRouter><Route path="/" exact={true} component={LoginPage} /> </BrowserRouter>)
    let number = container.getElementsByTagName("button").length;
    expect(number).toBe(1);
    //falta fazer do fireEvent
  })
});
