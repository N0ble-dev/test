"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const OverflowingParagraph = ({ text }: { text: string }) => {
  const [isLong, setIsLong] = useState(text.length > 300);
  return (
    <div className=" relative">
      <p>
        {isLong ? (
          <span className=" relative w-full ">
            <span className="blur-md absolute z-20  w-full h-16 left-0 bottom-10">.</span>
            {text.substring(0, 300)}...
          </span>
        ) : (
          text
        )}
      </p>
      {text.length > 300 && (
        <Button className=" absolute -bottom-20 left-1/2 -translate-x-1/2" onClick={() => setIsLong((l) => !l)}>
          {isLong ? "Read More" : "Read Less"}
        </Button>
      )}
    </div>
  );
};

export default OverflowingParagraph;
