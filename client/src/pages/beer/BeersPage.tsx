import React from "react";
import { useQuery } from "@apollo/client";

import { Loading } from "../../components/common/Loading";
import { GetAllBeersDocument } from "../../graphql/types/graphql";
import { BeerList } from "../../components/Beer/BeerList";
import { Error } from "../../components/error/Error";

export const BeersPage = () => {
  const { data, loading, error } = useQuery(GetAllBeersDocument);

  return (
    <div className="py-12 px-12 h-screen overflow-y-auto">
      {error ? (
        <Error message={error.message} />
      ) : (
        <>
          <div className="flex flex-col items-center pb-12 font-bold text-stout text-2xl">
            Thirsty? Grab a beer and have a drink
          </div>
          {loading ? <Loading /> : <BeerList beers={data?.beers ?? []} />}
        </>
      )}
    </div>
  );
};
