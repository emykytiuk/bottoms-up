import React from "react";
import { BeerListItem } from "./BeerListItem";
import { Beer } from "./types";

type BeerListProps = {
  beers: Beer[];
};

const testBeer = {
  id: "1",
  name: "Test Beer Name",
  brewery: {
    name: "My Brewery",
    city: "Fort Saskatchewan",
    state: "AB",
  },
  style: { name: "Lager" },
} as Beer;

export const BeerList = ({ beers }: BeerListProps) => {
  return (
    <div className="flex gap-3 flex-wrap">
      <BeerListItem beer={testBeer} />
      {/* {beers.map((beer: Beer) => {
        return (
          <div key={beer.id}>
            <BeerListItem title={beer.name} />
          </div>
        );
      })} */}
    </div>
  );
};
