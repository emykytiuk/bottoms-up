import { useMutation } from "@apollo/client";
import React from "react";
import { SignInDocument } from "../../graphql/types/graphql";

export const SigninPage = () => {
  const [mutateFunction, { loading }] = useMutation(SignInDocument);

  const onClick = () => {
    mutateFunction({
      variables: {
        input: { email: "b@remailc.om", password: "aaaaaaaa" },
      },
    });
  };
  return <div onClick={onClick}>Login</div>;
};
