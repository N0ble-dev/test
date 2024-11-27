import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center w-full flex-col gap-4 rounded-xl border border-red-500 bg-red1 py-4 px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
