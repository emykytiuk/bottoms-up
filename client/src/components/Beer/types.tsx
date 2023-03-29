import { GetAllBeersQuery } from "../../graphql/types/graphql";

export type Beer = GetAllBeersQuery["beers"][0];
