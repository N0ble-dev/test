import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const allData = await fetch(`${API_URL}posts/?tag=${id}`).then((res) =>
    res.json()
  );
  return (
    <MaxWidthWrapper className="flex flex-col gap-2 mt-5">
      <h2 className=" lg:text-3xl text-[#4D4D4D] font-semibold pb-5 border-b border-gray-500 text-2xl">
        All Blogs
      </h2>
      <section className=" mt-5 h-full gap-10 grid grid-cols-1 md:grid-cols-3">
        {allData.items.map((post: BlogProps) => (
          <Link
            className="  bg-red1 rounded-2xl overflow-hidden h-full"
            href={`/blog/${post.postSlug}`}
          >
            <div className=" relative rounded-2xl w-full min-h-64">
              <Image
                src={post.coverImage}
                className=" object-cover"
                alt="logo"
                fill
              />
            </div>
            <MaxWidthWrapper className=" ">
              <div className="flex mt-3">
                <div className=" flex flex-col gap-2 col-span-3">
                  <h2 className=" text-xl  font-bold">{post.title}</h2>{" "}
                  <span className="text-red-600 text-sm font-semibold">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(new Date(post.createdAt))}
                  </span>
                  <p className=" text-base line-clamp-5 font-[400]">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </MaxWidthWrapper>
          </Link>
        ))}
      </section>
    </MaxWidthWrapper>
  );
};

export default page;
