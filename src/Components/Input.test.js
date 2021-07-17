import { act, fireEvent, render } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("Should render Input Component Properly", () => {
    const { container } = render(<Input showDiv={false} />);
    expect(container).toBeTruthy();
  });
  it("Should render input element", () => {
    const { getByTestId } = render(<Input showDiv={false} />);
    const input = getByTestId("searchBar");
    expect(input).toBeTruthy();
  });

  it("Should render div element", () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const div = getByTestId("divWantToShow");
    expect(div).toBeTruthy();
  });

  it("Should not render div element", () => {
    const { queryByTestId } = render(<Input showDiv={false} />);
    const div = queryByTestId("divWantToShow");
    expect(div).toBeFalsy();
  });

  it("Change on Input cause chnage in header", async () => {
    await act(async () => {
      const { getByTestId } = render(<Input showDiv={false} />);
      const input = getByTestId("searchBar");
      const header = getByTestId("displaySearch");
      const testValue = "Chennakesava";
      await fireEvent.change(input, { target: { value: testValue } });
      expect(header.innerHTML).toBe(testValue);
    });
  });
});
