import React from "react";
import { Beer } from "./types";

interface BeerCanLabelProps {
  beer: Beer;
}

export const BeerLabel: React.FC<BeerCanLabelProps> = ({ beer }) => {
  const addSeparator = !!beer.ibu && !!beer.ibu;
  return (
    <div className="h-[70%] absolute left-0 top-[15%] w-full p-4 bg-grey bg-opacity-80 text-white text-center">
      <h2 className="font-bold text-xl line-clamp-2">{beer.name}</h2>
      <div className="flex flex-col gap-2">
        <p className="text-sm ">{beer.brewery.name}</p>

        <div className="pt-2 border-t border-t-white flex gap-3 flex-col">
          <div>{beer.style.name}</div>
          <div className="flex justify-center gap-3 first:border-r">
            {beer.abv && (
              <div
                className={`${
                  addSeparator ? "pr-3 border-r border-r-white" : ""
                }`}
              >
                ALC.
                <br /> {(beer.abv * 100).toFixed(1)}%
              </div>
            )}
            {beer.ibu && (
              <div>
                IBU <br /> {beer.ibu}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
