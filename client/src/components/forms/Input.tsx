import React, { forwardRef } from "react";

export type InputProps = {
  label?: string;
  errorMessage?: string;
} & React.ComponentPropsWithRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...props }, ref) => {
    return (
      <>
        {label && <label htmlFor={props.name}>{label}</label>}
        <input {...props} ref={ref} />
        {errorMessage && <div>{errorMessage}</div>}
      </>
    );
  }
);
