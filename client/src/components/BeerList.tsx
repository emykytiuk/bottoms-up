import React from "react";
import { AllBeersDocument, AllBeersQuery } from "../graphql/types/graphql";
import { useQuery } from "@apollo/client";

type Beer = AllBeersQuery['beers'][0]

export const BeerList = () => {
  const { data } = useQuery(AllBeersDocument);

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
