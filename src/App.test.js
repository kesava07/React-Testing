import { render } from "@testing-library/react";
import App from "./App";

describe("renders learn react link", () => {
  it("Should render App component", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
