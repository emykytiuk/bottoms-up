import React from "react";
import { Beer } from "./types";
import { useQuery } from "@apollo/client";
import { getAllBeersQuery } from "../graphql/queries/beer";

export const BeerList = () => {
  const { data } = useQuery(getAllBeersQuery);

  return (
    <div>
      {data?.beers.map((beer: Beer) => {
        return (
          <div key={beer.id}>
            <div>{beer.name}</div>
          </div>
        );
      })}
    </div>
  );
};
