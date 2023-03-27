import React from "react";

type CardTitleProps = {
  title: string;
  subtitle?: string;
};

export const CardTitle = ({ title, subtitle }: CardTitleProps) => {
  return (
    <div className="z-10 relative">
      <div className="font-bold text-lg line-clamp-2" title={title}>
        {title}
      </div>
      {subtitle && <div className="text-grey text-sm">{subtitle}</div>}
    </div>
  );
};
