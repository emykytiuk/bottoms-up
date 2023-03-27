import React from "react";
import classNames from "classnames";
import { CardTitle } from "./CardTitle";
import { CardBody } from "./CardBody";
import { CardActions } from "./CardActions";

type CardProps = {
  children: [
    React.ReactElement<typeof CardBody>,
    React.ReactElement<typeof CardActions>
  ];
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  const cardClasses = classNames(
    "h-80 w-52 p-6 bg-white rounded-[20%] hover:shadow hover:shadow-current",
    className
  );
  return <div className={cardClasses}>{children}</div>;
};

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Actions = CardActions;
