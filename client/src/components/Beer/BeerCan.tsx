import React, { useState } from "react";
import { Card } from "../common/Card/Card";
import { Beer } from "./types";
import { BeerLabel } from "./BeerLabel";

type BeerCanProps = {
  beer: Beer;
};

const fillVariant = {
  "pale ale": "bg-pale",
  lager: "bg-lager",
  pilsner: "bg-pilsner",
  stout: "bg-stout",
} as Record<string, string>;

export const BeerCan = ({ beer }: BeerCanProps) => {
  const [beerLevel, setBeerLevel] = useState(0);
  const isFull = beerLevel === 100;

  const fillBeer = () => {
    if (isFull) {
      setBeerLevel(0);
    } else {
      setBeerLevel(100);
    }
  };

  return (
    <>
      <div className="h-2 w-4/5 relative bg-grey-dark m-auto -mb-[8px] rounded-[25%] z-10" />
      <Card className="pt-4 p-6 relative my-0 mx-auto overflow-hidden border-2 border-grey border-b-4 hover:shadow-sm hover:shadow-grey">
        <Card.Actions>
          <button className="z-10" onClick={fillBeer}>
            {isFull ? "Pour out" : "Drank"}
          </button>
        </Card.Actions>
        <Card.Body>
          <div
            className={`absolute bottom-0 left-0 w-full transition-[height] ease-in-out duration-[1000ms] ${
              fillVariant[beer.style.name.toLowerCase()]
            }`}
            style={{ height: `${beerLevel}%` }}
          />
          <BeerLabel beer={beer} />
        </Card.Body>
      </Card>
    </>
  );
};
