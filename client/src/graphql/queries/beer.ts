import gql from "graphql-tag";

export const getAllBeersQuery = gql`
  query allBeers {
    beers {
      id
      name
    }
  }
`;
