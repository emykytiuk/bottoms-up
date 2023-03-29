import React from "react";
import { BeerListItem } from "./BeerListItem";
import { Beer } from "./types";
import useLocalStorage from "use-local-storage";

type BeerListProps = {
  beers: Beer[];
};

export const BeerList = ({ beers }: BeerListProps) => {
  const [beersDrank, setBeersDrank] = useLocalStorage<string[]>(
    "beersDrank",
    []
  );

  const onCanClick = (id: string) => {
    if (beersDrank.some((bd) => bd === id)) {
      setBeersDrank(beersDrank.filter((bd) => bd !== id));
    } else {
      setBeersDrank(beersDrank.concat(id));
    }
  };

  return (
    <div className="flex justify-center gap-6 flex-wrap">
      {beers.map((beer: Beer) => {
        const drank = beersDrank.some((bd) => bd === beer.id);
        return (
          <div key={beer.id}>
            <BeerListItem beer={beer} onClick={onCanClick} drank={drank} />
          </div>
        );
      })}
    </div>
  );
};
