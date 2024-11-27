import React from "react";
import Container from "@/app/components/Container";
import InfoPost from "@/app/components/InfoPost";
import MainHeading from "@/app/components/MainHeading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ProfileCard from "@/app/components/ProfileCard";
import Share from "@/app/components/Share";

import Image from "next/image";
import { log } from "console";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import CommentsView from "@/app/components/facebook/CommentsView";
import { convertToHTML } from "./../../../../lib/utils";
import Subscribe from "@/app/components/Subscribe";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { id } = await params;

  const getPostAuthor = await fetch(
    `${API_URL}posts/slug/${id}?include=author,tags`
  ).then((getPostAuthor) => getPostAuthor.json());

  const postsRecomended = await fetch(`${API_URL}posts/?limit=10`).then((res) =>
    res.json()
  );
  console.log(postsRecomended);

  return (
    <section className="  ">
      <MaxWidthWrapper className=" grid gap-5 justify-between lg:grid-cols-11">
        <div className=" overflow-x-hidden relative flex flex-col gap-5 col-span-full lg:col-span-8">
          <div className=" w-full h-96 relative">
            <Image
              src={getPostAuthor.coverImage}
              className=" object-cover object-top"
              alt="logo"
              fill
            />
          </div>
          <MainHeading text={getPostAuthor.title} />
          <InfoPost
            creationDate="1 Jan 2023"
            commentCount={30}
            shareCount={20}

          />
          <div
            dangerouslySetInnerHTML={{
              __html: convertToHTML(getPostAuthor.content || ""),
            }}
            className={`content max-w-4xl text-black lg:text-base text-sm  font-medium my-2 leading-[1.7] `}
          />
        </div>
        <div className=" flex flex-col gap-4 col-span-full sm:col-span-2 lg:col-span-3">
          <ProfileCard
            authorId={getPostAuthor.authorId}
            github={getPostAuthor.author?.gitHub}
            linkedIn={getPostAuthor.author?.linkedIn}
            facebook={getPostAuthor.author?.facebook}
            bio={getPostAuthor.author?.bio}
            image={getPostAuthor.author?.image}
            name={getPostAuthor.author?.name}
          />

          <Container className=" items-start">
            {postsRecomended.items.map((post: any) => {
              return (
                <Link href={`/blog/${post.postSlug}`}>
                  <div className=" flex justify-between items-center gap-5">
                    <h3 className=" text-sm">{post.title}</h3>
                    <div className="flex gap-5 items-center ">
                      <div className=" w-20 overflow-hidden h-20 relative">
                        <Image
                          src={post.coverImage}
                          className=" object-cover rounded-full"
                          alt="logo"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Container>
          <div></div>

          <Subscribe />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <Container className=" flex flex-col md:flex-row">
          <div className=" aspect-square h-80 relative">
            <Image
              src={getPostAuthor.author.image}
              className=" object-cover"
              alt="logo"
              fill
            />
          </div>

          <div className=" flex flex-col gap-6 px-8 py-4">
            <h3 className=" text-black font-semibold text-3xl">
              {getPostAuthor.author.name}
            </h3>
            <p className="text-2xl">{getPostAuthor.author.bio}</p>
            <Link href={`/author/${getPostAuthor.author.id}`}>
              <p className=" text-red-500 underline">See All ARTICLES </p>
            </Link>
            <div className=" flex flex-wrap items-center gap-3 text-3xl">
              {getPostAuthor.author?.facebook && (
                <Link href={getPostAuthor.author.facebook}>
                  <FaFacebook />
                </Link>
              )}

              {getPostAuthor.author?.linkedIn && (
                <Link href={getPostAuthor.author.linkedIn}>
                  <FaLinkedin />
                </Link>
              )}

              {getPostAuthor.author?.gitHub && (
                <Link href={getPostAuthor.author.gitHub}>
                  <FaGithub />
                </Link>
              )}
            </div>
            <Share />
          </div>
        </Container>
      </MaxWidthWrapper>
      <div>
        <h2 className=" text-center mt-5 font-bold text-2xl">
          <CommentsView />
        </h2>
        <div className=" grid grid-cols-3 gap-4"></div>
      </div>
    </section>
  );
};

export default page;
