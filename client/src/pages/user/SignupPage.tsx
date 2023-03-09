import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {
  CreateUserDocument,
  CreateUserInput,
  CreateUserMutation,
} from "../../graphql/types/graphql";
import { SignupForm } from "../../components/forms/SignupForm";

export const SignupPage = () => {
  const [error, setError] = useState<string[]>([]);
  const navigate = useNavigate();
  const [mutateFunction, { loading }] = useMutation(CreateUserDocument);

  const onSubmit = async (input: CreateUserInput) => {
    await mutateFunction({
      variables: {
        input: {
          ...input,
        },
      },
      onCompleted: (data: CreateUserMutation) => {
        if (data.createUser?.errors?.messages) {
          setError(data.createUser.errors.messages);
        } else {
          navigate("/");
        }
      },
    });
  };

  return (
    <div>
      {loading ? (
        <div> Loading </div>
      ) : (
        <>
          <div>
            <SignupForm onSubmit={onSubmit} />
          </div>
          {error && <div>{error}</div>}
        </>
      )}
    </div>
  );
};
