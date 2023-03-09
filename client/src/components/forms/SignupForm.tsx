import React from "react";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../../graphql/types/graphql";
import { Input } from "./Input";

type SignupFormInput = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

type SignupFormProps = {
  onSubmit: (data: CreateUserInput) => Promise<void>;
};

export const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupFormInput>();

  const onFormSubmit = (data: SignupFormInput) => {
    onSubmit({ name: data.name, email: data.email, password: data.password });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Input
        label="Name"
        type="text"
        errorMessage={errors?.name?.message}
        {...register("name", { required: "Name is required" })}
      />
      <Input
        label="Email"
        type="email"
        errorMessage={errors?.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address",
          },
        })}
      />
      <Input
        label="Password"
        type="password"
        errorMessage={errors?.password?.message}
        {...register("password", {
          required: "Password is required",
          min: { value: 8, message: "Password must be at least 8 characters" },
        })}
      />
      <Input
        label="Confirm Password"
        type="password"
        errorMessage={errors?.passwordConfirmation?.message}
        {...register("passwordConfirmation", {
          required: "Please confirm password",
          validate: {
            matchesPreviousPassword: (value) => {
              const { password } = getValues();
              return password === value || "Passwords should match";
            },
          },
        })}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};
