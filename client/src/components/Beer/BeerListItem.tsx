import React from "react";
import { Beer } from "./types";
import { BeerCan } from "./BeerCan";

type BeerListItemProps = {
  beer: Beer;
  drank: boolean;
  onClick: (id: string) => void;
};

export const BeerListItem = ({ beer, drank, onClick }: BeerListItemProps) => {
  return <BeerCan beer={beer} drank={drank} onClick={onClick} />;
};
