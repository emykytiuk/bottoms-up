import { ApolloClient, InMemoryCache } from "@apollo/client";

const buildClient = () => {
  const uri =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/graphql"
      : "/graphql";
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
};

export const client = buildClient();
