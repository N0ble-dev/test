import React from "react";

const MaxWidthWrapper = ({
  className,
  children,
  noPadding = false,
}: {
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}) => {
  return (
    <div
      className={`
    max-w-[1450px] ${!noPadding && "py-3"} mx-auto  px-4 lg:px-10 ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
