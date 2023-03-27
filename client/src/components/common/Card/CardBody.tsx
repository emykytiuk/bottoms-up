import React from "react";
import classNames from "classnames";

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};
export const CardBody = ({ children, className }: CardBodyProps) => {
  const classes = classNames("text-grey", className);
  return <div className={classes}>{children}</div>;
};
