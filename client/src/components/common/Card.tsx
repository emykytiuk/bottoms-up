import React from "react";
import classNames from "classnames";

type CardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ title, subtitle, children, className }: CardProps) => {
  const cardClasses = classNames(
    "h-64 w-96 p-6 bg-white rounded-md hover:shadow hover:shadow-current",
    className
  );
  return (
    <div className={cardClasses}>
      <div>
        <div className="font-bold text-lg">{title}</div>
        <div className="text-grey-light text-sm">{subtitle}</div>
      </div>
      <div className="pt-4">{children}</div>
    </div>
  );
};
