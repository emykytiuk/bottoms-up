import React from "react";
import { BeerCard } from "./BeerCard";
import { Beer } from "./types";

type BeerListItemProps = {
  beer: Beer;
};

export const BeerListItem = ({ beer }: BeerListItemProps) => {
  return <BeerCard beer={beer} />;
};
