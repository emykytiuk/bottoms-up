import React from "react";
import { Beer } from "./types";
import { BeerCard } from "./BeerCard";

type BeerListItemProps = {
  beer: Beer;
};

export const BeerListItem = ({ beer }: BeerListItemProps) => {
  return <BeerCard beer={beer} />;
};
