import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
    render(<Counter />);
    // Add the test logic below

    // 1. Find the button using its initial text
    const button = screen.getByRole("button", { name: /count is 0/i });
    
    // Optional: Verify it starts at 0
    expect(button).toBeInTheDocument(); 

    // 2. Simulate a user clicking the button
    fireEvent.click(button);

    // 3. Verify that the button text has updated to 1
    const updatedButton = screen.getByRole("button", { name: /count is 1/i });
    expect(updatedButton).toBeInTheDocument();
});