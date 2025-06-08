import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
  render(<Counter />);

  const button = screen.getByRole("button", { name: /count is/i });

  // Verify initial count
  expect(button).toHaveTextContent("count is 0");

  // Click the button
  fireEvent.click(button);

  // Verify count increments
  expect(button).toHaveTextContent("count is 1");
});
