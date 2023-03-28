import React from "react";
import loading from "../../resources/loading.gif";

export const Loading = () => {
  return (
    <img
      className="m-auto"
      src={loading}
      alt="loading..."
      data-testid="loading"
    />
  );
};
