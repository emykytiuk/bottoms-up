import React from "react";
import { useQuery } from "@apollo/client";

import { Loading } from "../../components/common/Loading";
import { GetAllBeersDocument } from "../../graphql/types/graphql";
import { BeerList } from "../../components/Beer/BeerList";

export const BeersPage = () => {
  const { data, loading } = useQuery(GetAllBeersDocument);

  return (
    <div className="pt-12 pb-6 px-12 h-screen overflow-y-auto">
      {loading ? <Loading /> : <BeerList beers={data?.beers ?? []} />}
    </div>
  );
};
