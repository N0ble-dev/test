"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const AddComment = ({ commentCount }: { commentCount: number }) => {
  return (
    <>
      <h2 className=" text-black font-bold">Top comments {commentCount}</h2>
      <div className="flex w-full justify-between items-start gap-2">
        <div className=" w-10 overflow-hidden rounded-full h-10 relative ">
          <Image src="/image 7.png" className=" object-cover" alt="logo" fill />
        </div>
        <Input className=" w-full bg-red-50 border-red-500" placeholder="email" />
      </div>
    </>
  );
};

export default AddComment;
