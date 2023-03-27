import React from "react";
import { BeerListItem } from "./BeerListItem";
import { Beer } from "./types";

type BeerListProps = {
  beers: Beer[];
};

export const BeerList = ({ beers }: BeerListProps) => {
  return (
    <div className="flex gap-6 flex-wrap">
      {beers.map((beer: Beer) => {
        return (
          <div key={beer.id}>
            <BeerListItem beer={beer} />
          </div>
        );
      })}
    </div>
  );
};
