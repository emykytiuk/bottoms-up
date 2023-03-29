import React from "react";
import { render, screen } from "@testing-library/react";
import { BeerCan } from "./BeerCan";
import userEvent from "@testing-library/user-event";

const beer = {
  id: "1",
  name: `Beer Name`,
  ibu: 33,
  abv: 0.5,
  brewery: {
    name: "Brewery",
    state: "State",
    city: "City",
  },
  style: {
    name: `Pale Ale`,
  },
}

describe("Beer can", () => {
  it("should show filled background after clicked when empty", async () => {
    const user = userEvent.setup();
    render(<BeerCan beer={beer} onClick={jest.fn()} drank={false} />);

    let background = await screen.findByTestId("beer-background", {
      exact: false,
    });

    expect(background.style.height).toBe("0%");

    const beerCan = screen.getByTestId("beer-can-1");
    await user.click(beerCan);

    background = await screen.findByTestId("beer-background", {
      exact: false,
    });
    expect(background.style.height).toBe("100%");
  });

  it("should remove filled background after clicked when full", async () => {
    const user = userEvent.setup();
    render(<BeerCan beer={beer} onClick={jest.fn()} drank />);

    let background = await screen.findByTestId("beer-background", {
      exact: false,
    });

    expect(background.style.height).toBe("100%");

    const beerCan = screen.getByTestId("beer-can-1");
    await user.click(beerCan);

    background = await screen.findByTestId("beer-background", {
      exact: false,
    });
    expect(background.style.height).toBe("0%");
  });
});
