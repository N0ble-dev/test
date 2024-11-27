import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListSearch = ({ data }: { data: any }) => {
  return (
    <div className="  bg-red7/40 w-full flex flex-col gap-2 top-10 shadow-sm rounded-2xl py-3 px-6 absolute ">
      {data.map((item: { id: number; title: string; excerpt: string; coverImage: string; postSlug: string }) => (
        <Link
          className=" flex flex-col md:flex-row  border-b  rounded-2x border-gray-300  pb-1 items-center gap-4"
          key={item.id}
          href={`/blog/${item.postSlug}`}
        >
          <div className=" w-full  lg:w-[35%] h-16  rounded-2xl flex-grow overflow-hidden relative">
            <Image src={item.coverImage} alt={item?.title} className=" object-cover" fill />
          </div>
          <p className="lg:w-[65%]  text-xs font-normal line-clamp-4">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default ListSearch;
