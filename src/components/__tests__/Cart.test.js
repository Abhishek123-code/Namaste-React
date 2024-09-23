import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/ResMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Headerbar";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});

it("should load Restaurant Menu components", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(20);

  //   const cartItem = screen.getByText("Cart (0 items)");
  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  const cartItem = screen.getByText("Cart (1 items)");
  expect(cartItem).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(21);

  const clear = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clear);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(
    screen.getByText("Your cart is empty! Please add items to your cart")
  ).toBeInTheDocument();
});
