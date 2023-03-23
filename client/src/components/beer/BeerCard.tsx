import React from "react";
import { Card } from "../common/Card";
import { Beer } from "./types";
import { colors } from "../../colors";

type BeerCardProps = {
  beer: Beer;
};

const buildLinearGradient = (colors: any, color: string) => {
  const hex = colors[color];
  return `white,#FFF_50%,${hex}_50%,${hex}`;
};

export const BeerCard = ({ beer }: BeerCardProps) => {
  const { brewery } = beer;
  const content = (
    <div className="flex flex-col gap-1 text-grey-light">
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

  const gradient = buildLinearGradient(colors, "lager");

  const classes = `bg-[linear-gradient(${gradient})] hover:bg-[100%_100%] !bg-[length:100%_200%] transition-[background] duration-1000`;
  console.log("clases", classes);
  return (
    <Card className={classes} title={beer.name} subtitle={breweryInfo()}>
      {content}
    </Card>
  );
};
