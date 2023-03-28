import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { BeersPage } from "./BeersPage";
import { Beer } from "../../components/Beer/types";
import { GetAllBeersDocument } from "../../graphql/types/graphql";

const buildBeers = (): Beer[] => {
  const beers = [] as Beer[];

  for (let i = 0; i < 5; i++) {
    beers.push({
      id: i.toString(),
      name: `Beer ${i}`,
      ibu: i,
      abv: i,
      brewery: {
        name: `Brewery ${i}`,
        state: "State",
        city: "City",
      },
      style: {
        name: `Style ${i}`,
      },
    } as Beer);
  }
  return beers;
};

const beers = buildBeers();

describe("Beer page data test", () => {
  it("should render beer cans on page", async () => {
    const beerMock = {
      request: {
        query: GetAllBeersDocument,
      },
      result: {
        data: { beers },
      },
    };

    render(
      <MockedProvider mocks={[beerMock]} addTypename={false}>
        <BeersPage />
      </MockedProvider>
    );

    expect(await screen.findByTestId("loading")).toBeInTheDocument();

    const beerCans = await screen.findAllByTestId("beer-can");
    expect(beerCans.length).toBe(beers.length);
  });
});
