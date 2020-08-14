import React from "react";
import { fireFuncs } from "../firebase/firebaseFunctions.js"
import {
  render,
  fireEvent,
  cleanup,
  getByRole,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LoginPage } from "../pages/LoginPage.js";
import { KitchenPage } from "../pages/KitchenPage.js";
import { HistoricArea } from "../pages/HistoricPage.js";
import { MemoryRouter } from "react-router-dom";

jest.mock("../firebase/firebaseFunctions.js");

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Testing LoginPage component', () => {

  let getByTestId = null;

  beforeEach(() => {
     ({ getByTestId } = render(<MemoryRouter><LoginPage /></MemoryRouter>));
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

describe('Testing KitchenPage component', () => {

  let getByTestId = null;

  beforeEach(() => {
      ({ getByTestId } = render(<MemoryRouter><KitchenPage /></MemoryRouter>));
  });

  afterEach(() => {
    cleanup();
  });  

  test("Verify historic icon event", async () => {
    const historicIconId = getByTestId("historic-order");
    fireEvent.click(historicIconId);
    await expect(mockHistoryPush).toHaveBeenCalledWith("/historic");
  });
  test("Verify orders icon event", async () => {
    const ordersIconId = getByTestId("orders");
    fireEvent.click(ordersIconId);
    await expect(mockHistoryPush).toHaveBeenCalledWith("/kitchen");
  });
  test("Verify signout icon event", async () => {
    const signoutIconId = getByTestId("signout-icon");
    fireFuncs.authSignOut.mockImplementationOnce(() => Promise.resolve(mockHistoryPush))
    fireEvent.click(signoutIconId);
    await expect(fireFuncs.authSignOut).toHaveBeenCalled();
  });
});

describe('Testing HistoricPage component', () => {

  let getByTestId = null, getByRole = null, findByText = null;

  beforeEach(() => {
      ({ getByTestId, getByRole, findByText } = render(<MemoryRouter><HistoricArea /></MemoryRouter>));
  });

  afterEach(() => {
    cleanup();
  });  

  test("Verify historic icon event", async () => {
    const historicIconId = getByTestId("historic-order");
    fireEvent.click(historicIconId);
    await expect(mockHistoryPush).toHaveBeenCalledWith("/historic");
  });
  test("Verify orders icon event", async () => {
    const ordersIconId = getByTestId("orders");
    fireEvent.click(ordersIconId);
    await expect(mockHistoryPush).toHaveBeenCalledWith("/kitchen");
  });
  test("Verify signout icon event", async () => {
    const signoutIconId = getByTestId("signout-icon");
    fireFuncs.authSignOut.mockImplementationOnce(() => Promise.resolve(mockHistoryPush))
    fireEvent.click(signoutIconId);
    await expect(fireFuncs.authSignOut).toHaveBeenCalled();
  });
});