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
    fireEvent.blur(getByTestId("useremail"), {
      target: { value: email }
    });
    fireEvent.blur(getByTestId("userpassword"), {
      target: { value: password }
    });
    expect(getByTestId("useremail").value).toEqual(email);
    expect(getByTestId("userpassword").value).toEqual(password);
  });
  test('Verify if password and email inputs are required', () => {
    expect(getByTestId('useremail')).toBeRequired();
    expect(getByTestId('userpassword')).toBeRequired();
  });
  test('Verify success auth from Firebase sign in', async () => {
    const email = "exemple@exemple.com";
    const password = "123456";
    fireFuncs.authSignIn.mockResolvedValueOnce();
    console.log(fireFuncs.authSignIn.mockResolvedValueOnce())
    await expect(fireFuncs.authSignIn(email, password)).resolves.toEqual(undefined);
  });
  test('Verify invalid auth from Firebase sign in', async () => {
    fireFuncs.authSignIn.mockRejectedValueOnce();
    try {
      await fireFuncs.authSignIn("", "");
    } catch (e) {
      expect(e).rejects.toEqual('error');
    }
  });
});
