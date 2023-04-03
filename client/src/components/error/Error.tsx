import React from "react";

type ErrorProps = {
  message?: string;
};

export const Error = ({
  message = "There was an error. Please refresh",
}: ErrorProps) => {
  return (
    <div className="flex justify-center p-6 rounded-md bg-white max-w-[80%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div>Error: {message}</div>
    </div>
  );
};
