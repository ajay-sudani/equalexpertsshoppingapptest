import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("renders header", () => {
  test("check for logo", () => {
    render(<Header />);
    expect(screen.getByText(/My Cart/i)).toBeInTheDocument();
  });

  test("check for menu items", () => {
    render(<Header />);
    const links = screen.getAllByTestId("link");
    expect(links[0].textContent).toBe("Menu item 1");
    expect(links[1].textContent).toBe("Menu item 2");
    expect(links[2].textContent).toBe("Menu item 3");
  });

  test("check for input search", () => {
    render(<Header />);
    const inputSearch = screen.getByTestId("inputSearch");
    expect(inputSearch).toBeInTheDocument();

    const searchButton = screen.getByTestId("searchButton");
    expect(searchButton).toBeInTheDocument();
  });
});
