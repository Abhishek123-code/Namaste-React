import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  // afterAll(() => console.log("After All"));
  // beforeAll(() => console.log("Before All"));
  // afterEach(() => console.log("after Each"));
  // beforeEach(() => console.log("Before Each"));

  test("Should load Contact Us component", () => {
    render(<Contact />);
    //querying
    const heading = screen.getByRole("heading");

    //assersion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside the Contact Us component", () => {
    render(<Contact />);

    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside the Contact Us component", () => {
    render(<Contact />);

    //   const button = screen.getByRole("button");
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });

  test("Should load input boxes in the Contact Us component", () => {
    render(<Contact />);

    //   const button = screen.getByRole("button");
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);
    // expect(inputBoxes.length).toBe(3);
    expect(inputBoxes.length).not.toBe(2);
  });
});
