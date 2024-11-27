import Image from "next/image";
import React from "react";
import "../blog.css";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Link from "next/link";
import Content from "@/app/Content";
import { Button } from "@/components/ui/button";
const page = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const resTags = await fetch(`${API_URL}tags`);
  const tagsres = await resTags.json();
  const tags = tagsres?.items?.map((t: { tagSlug: string; name: string }) => {
    return {
      slug: t.tagSlug,
      name: t.name,
    };
  });
  console.log(tags);

  const posts = await Promise.all(
    tags?.map(async (tag: { slug: string; name: string }) => {
      const resPosts = await fetch(`${API_URL}posts/?tag=${tag.slug}&limit=3`);
      const postsData = await resPosts.json();
      console.log(tags);
      return { name: tag.name, posts: postsData.items, slug: tag.slug };
    })
  );
  console.log(posts);
  return (
    <MaxWidthWrapper>
      <div className=" flex flex-col gap-4">
        {posts?.map(
          (postLarge: {
            tag: string;
            posts: BlogProps[];
            tagSlug: string;
            slug: string;
            name: string;
          }) => (
            <div className="flex flex-col gap-5" key={postLarge.slug}>
              <h2 className="text-lg  uppercase border-b  pb-2 border-red-400 font-bold text-gray-600">
                {postLarge.name}
              </h2>{" "}
              <div className=" gap-4 grid grid-cols-1 lg:grid-cols-3">
                {postLarge.posts
                  .slice(0, 3)
                  .map((post: BlogProps, i: number) => (
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
                            <h2 className=" text-xl  font-bold">
                              {post.title}
                            </h2>{" "}
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
              </div>
              <Link
                className=" my-4 mx-auto  md:w-[15%] "
                href={`/category-blog/${postLarge.slug}`}
              >
                <Button className=" w-full  rounded-2xl">View More</Button>
              </Link>
            </div>
          )
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
