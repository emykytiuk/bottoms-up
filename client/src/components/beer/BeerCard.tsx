import React, { useState } from "react";
import { Card } from "../common/Card/Card";
import { Beer } from "./types";

type BeerCardProps = {
  beer: Beer;
};

export const BeerCard = ({ beer }: BeerCardProps) => {
  const [beerLevel, setBeerLevel] = useState(0);
  const { brewery } = beer;
  const isFull = beerLevel === 100;

  const fillBeer = () => {
    if (isFull) {
      setBeerLevel(0);
    } else {
      setBeerLevel(100);
    }
  };

  const content = (
    <div className="flex flex-col gap-1 relative z-10 h-full">
      <div>Brewery</div>
      <div>Info (IBU etc.</div>
    </div>
  );

  const breweryInfo = (): string => {
    const location = [brewery.city, brewery.state].filter((l) => !!l);
    return `${brewery.name} ${
      location.length > 0 ? `(${location.join(", ")})` : ""
    }`;
  };

  return (
    <Card className="relative my-0 mx-auto overflow-hidden flex flex-col gap-3">
      <Card.Title title={beer.name} subtitle={breweryInfo()} />
      <Card.Body className="flex-1">
        <div
          className="absolute bottom-0 left-0 w-full bg-pale transition-[height] ease-in-out duration-[1000ms]"
          style={{ height: `${beerLevel}%` }}
        />
        {content}
      </Card.Body>
      <Card.Actions>
        <button className="z-10 relative" onClick={fillBeer}>
          {isFull ? "Remove" : "Drank"}
        </button>
      </Card.Actions>
    </Card>
  );
};
