import React from "react";
import { Beer } from "./types";
import { BeerCan } from "./BeerCan";

type BeerListItemProps = {
  beer: Beer;
};

export const BeerListItem = ({ beer }: BeerListItemProps) => {
  return <BeerCan beer={beer} />;
};
