import React, { useState } from "react";
import { Beer } from "./types";
import { BeerLabel } from "./BeerLabel";
import classNames from "classnames";

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

  const canClasses = classNames(
    "h-[22rem] w-52 py-16 relative bg-white rounded-[20%] overflow-hidden border-2 border-grey border-b-4 cursor-pointer",
    "hover:shadow-sm hover:shadow-grey"
  );

  return (
    <>
      <div className="h-2 w-4/5 relative bg-grey-dark m-auto -mb-2 rounded-[25%] z-10" />
      <div className={canClasses} onClick={fillBeer}>
        <div
          className={`absolute bottom-0 w-full transition-[height] ease-in-out duration-[1000ms] ${
            fillVariant[beer.style.name.toLowerCase()]
          }`}
          style={{ height: `${beerLevel}%` }}
        />
        <BeerLabel beer={beer} />
      </div>
    </>
  );
};
