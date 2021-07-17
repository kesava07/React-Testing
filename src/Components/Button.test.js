import { act, fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Input Component", () => {
  it("Should render Button Component Properly", () => {
    const { container } = render(<Button />);
    expect(container).toBeTruthy();
  });
  it("Should render button element", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });

  it("Render one button before button click", () => {
    const { getAllByTestId } = render(<Button />);
    const buttons = getAllByTestId("button");
    expect(buttons).toHaveLength(1);
  });

  it("Render one button before button click", async () => {
    await act(async () => {
      const { getAllByTestId } = render(<Button />);
      const button = getAllByTestId("button");
      await fireEvent.click(button[0]);
      expect(getAllByTestId("button")).toHaveLength(2);
    });
  });
});
