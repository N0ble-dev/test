import Container from "@/app/components/Container";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ProfileCard from "@/app/components/ProfileCard";
import Subscribe from "@/app/components/Subscribe";
import Content from "@/app/Content";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { id } = await params;
  const author = await fetch(`${API_URL}authors/${id}?include=posts`).then(
    (getPostAuthor) => getPostAuthor.json()
  );
  const authors = await fetch(`${API_URL}authors/?limit=7`).then(
    (getPostAuthor) => getPostAuthor.json()
  );
  const { posts } = author;
  return (
    <div>
      <MaxWidthWrapper className=" grid gap-5 justify-between lg:grid-cols-11">
        <div className=" overflow-x-hidden relative flex flex-col gap-5 col-span-full lg:col-span-8">
          <Container className=" flex flex-col md:flex-row">
            <div className=" aspect-square h-80 relative">
              <Image
                src={author.image}
                className=" object-cover"
                alt="logo"
                fill
              />
            </div>

            <div className=" flex flex-col gap-6 px-8 py-4">
              <h3 className=" text-black font-semibold text-3xl">
                {author.name}
              </h3>
              <p className="text-2xl">{author.bio}</p>
              {/* <p className=" text-red-500 underline">See All ARTICLES </p> */}
              <div className=" flex flex-wrap items-center gap-3 text-3xl">
                {author?.facebook && (
                  <Link href={author.facebook}>
                    <FaFacebook />
                  </Link>
                )}

                {author?.linkedIn && (
                  <Link href={author.linkedIn}>
                    <FaLinkedin />
                  </Link>
                )}

                {author?.gitHub && (
                  <Link href={author.gitHub}>
                    <FaGithub />
                  </Link>
                )}
              </div>
            </div>
          </Container>{" "}
          {/* <p className="text-base">{author.bio}</p> */}
          <div className="flex flex-col gap-5 mt-5">
            <h2 className=" lg:text-3xl text-[#4D4D4D] font-semibold pb-5 border-b border-gray-500 text-2xl">
              All Blogs
            </h2>
            {posts.map((item: BlogProps) => (
              <Link
                href={`/blog/${item.postSlug}`}
                className=" flex lg:flex-row  flex-col w-full items-stretch"
              >
                <div className=" relative  col-span-6 w-full lg:w-[55%] h-full ">
                  <Image
                    src={item.coverImage}
                    className=" object-cover"
                    alt="logo"
                    fill
                  />
                </div>
                <Content
                  width="w-full"
                  className=" w-full h-auto"
                  heading={item.title}
                  creation={item.createdAt}
                  paragraph={item.excerpt}
                />
              </Link>
            ))}
            {/* <Link className=" my-4 mx-auto  md:w-[15%] " href={`/blogs`}>
              <Button className=" w-full  rounded-2xl">View More</Button>
            </Link> */}
          </div>
        </div>

        <div className=" flex flex-col gap-4 col-span-full lg:col-span-3">
          <ProfileCard
            authorId={author.id}
            github={author?.gitHub}
            linkedIn={author?.linkedIn}
            facebook={author?.facebook}
            bio={author?.bio}
            image={author?.image}
            name={author?.name}
          />{" "}
          <Container className=" items-start">
            {authors.items.map(
              (author: { name: string; image: string; id: string }) => {
                return (
                  <Link className=" w-full" href={`/author/${author.id}`}>
                    <div className=" flex w-full justify-between items-center gap-5">
                      <h3 className=" text-sm">{author.name}</h3>
                      <div className="flex gap-5 items-center ">
                        <div className=" w-20 overflow-hidden h-20 relative">
                          <Image
                            src={author.image}
                            className=" object-cover rounded-full"
                            alt="logo"
                            fill
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
          </Container>
          <Subscribe />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
