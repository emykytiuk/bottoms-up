import React from "react";

type CardActionsProps = {
  children: React.ReactNode;
};

export const CardActions = ({ children }: CardActionsProps) => {
  return <div className="flex justify-end gap-12">{children}</div>;
};
