import { render, screen } from "@testing-library/react";
import ResCard, { isResOpen } from "../ResCard";
import MOCK_DATA from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom";

it("should render ResCard component with data", () => {
  render(<ResCard resDetails={MOCK_DATA} />);

  const resName = screen.getByText("Subway");

  expect(resName).toBeInTheDocument();
});

// it("should render ResCard component with promoted label", () => {
//   render(<isResOpen resDetails={MOCK_DATA} />);

//   const resOpen = screen.getByText("OpenNow");

//   expect(resOpen).toBeInTheDocument();
// });
