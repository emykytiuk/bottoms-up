import React from "react";

type CardTitleProps = {
  title: string;
  subtitle?: string;
  className?: string
};

export const CardTitle = ({ className, title, subtitle }: CardTitleProps) => {
  return (
    <div className={className}>
      <div className="font-bold text-lg line-clamp-2" title={title}>
        {title}
      </div>
      {subtitle && <div className="text-grey text-sm">{subtitle}</div>}
    </div>
  );
};
