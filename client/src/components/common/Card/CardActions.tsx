import React from "react";
import classNames from "classnames";

type CardActionsProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardActions = ({ children, className }: CardActionsProps) => {
  const classes = classNames("flex justify-end gap-12", className);
  return <div className={classes}>{children}</div>;
};
