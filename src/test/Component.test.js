import React from "react";
import { fireFuncs } from "../firebase/firebaseFunctions.js"
import {
  render,
  fireEvent,
  cleanup,
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
    fireFuncs.authSignIn.mockResolvedValueOnce("Valid Auth");
    await expect(fireFuncs.authSignIn(email, password)).resolves.toEqual("Valid Auth");
  });
  test("Verify invalid auth from Firebase sign in", async () => {
    fireFuncs.authSignIn.mockRejectedValueOnce('Invalid Auth');
    await expect(fireFuncs.authSignIn()).rejects.toEqual('Invalid Auth')
  });
  test("Verify login button event", async () => {
    const o = { sector: "Kitchen" };
    fireFuncs.authSignIn.mockImplementationOnce(() => Promise.resolve(o))
    fireEvent.click(getByTestId("button-login"));
    await expect(fireFuncs.authSignIn).toHaveBeenCalled();
  });
  // falta cobrir a possibilidade do Hall e do Erro
});
