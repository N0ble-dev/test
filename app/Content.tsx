import { cn } from "@/lib/utils";
import React from "react";

const Content = ({
  heading,
  creation,
  paragraph,
  categories,
  className,
  width = "",
  headingSize = "text-3xl",
}: {
  heading: string;
  creation: string;
  paragraph?: string;
  categories?: string[];
  className?: string;
  width?: string;
  headingSize?: "text-3xl" | "text-2xl" | "text-xl";
}) => {
  return (
    <div
      className={cn(
        `${width ? width : " w-full"} bg-red-50 flex   h-full self-stretch flex-col gap-4  px-10 py-5 col-span-4  `,
        className,
        {}
      )}
    >
      <h3 className={`${headingSize} text-black max-w-xs font-bold`}>{heading}</h3>
      <span className="text-red-600 text-sm font-semibold">
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date(creation))}
      </span>
      <p className=" line-clamp-5">{paragraph}</p>
      <div className=" flex mt-auto items-center gap-2">
        {/* {categories.map((category, i) => (
          <span key={i} className=" py-1 px-3 hover:bg-red-200 duration-150  bg-red-100 rounded-full text-red-500">
            {category}
          </span>
        ))} */}
      </div>
    </div>
  );
};

export default Content;
