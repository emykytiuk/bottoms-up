/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Beer = {
  __typename?: "Beer";
  abv?: Maybe<Scalars["Float"]>;
  brewery: Brewery;
  breweryId: Scalars["Int"];
  createdAt: Scalars["ISO8601DateTime"];
  ibu?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  style: Style;
  styleId: Scalars["Int"];
  updatedAt: Scalars["ISO8601DateTime"];
};

export type Brewery = {
  __typename?: "Brewery";
  city?: Maybe<Scalars["String"]>;
  createdAt: Scalars["ISO8601DateTime"];
  id: Scalars["ID"];
  name: Scalars["String"];
  state?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["ISO8601DateTime"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** An example field added by the generator */
  testField: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  beers: Array<Beer>;
  breweries: Array<Brewery>;
  styles: Array<Style>;
};

export type Style = {
  __typename?: "Style";
  createdAt: Scalars["ISO8601DateTime"];
  id: Scalars["ID"];
  name: Scalars["String"];
  updatedAt: Scalars["ISO8601DateTime"];
};

export type GetAllBeersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllBeersQuery = {
  __typename?: "Query";
  beers: Array<{
    __typename?: "Beer";
    id: string;
    name: string;
    abv?: number | null;
    ibu?: number | null;
    brewery: {
      __typename?: "Brewery";
      name: string;
      city?: string | null;
      state?: string | null;
    };
    style: { __typename?: "Style"; name: string };
  }>;
};

export const GetAllBeersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAllBeers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "beers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "abv" } },
                { kind: "Field", name: { kind: "Name", value: "ibu" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "brewery" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "city" } },
                      { kind: "Field", name: { kind: "Name", value: "state" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "style" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllBeersQuery, GetAllBeersQueryVariables>;
