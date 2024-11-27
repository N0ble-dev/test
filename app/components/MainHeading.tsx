import React from "react";

const MainHeading = ({ text, className }: { text: string; className?: string }) => {
  return <h1 className={`${className || ""} text-3xl font-bold text-black`}>{text}</h1>;
};

export default MainHeading;
