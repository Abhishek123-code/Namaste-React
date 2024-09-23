import { fireEvent, render, screen } from "@testing-library/react";
import Headerbar from "../Headerbar";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header componet with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headerbar />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  // const loginBtn = screen.getByText("button");
  expect(loginBtn).toBeInTheDocument();
});

it("should render header components with cart items-0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headerbar />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("should render header components with cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headerbar />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headerbar />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
