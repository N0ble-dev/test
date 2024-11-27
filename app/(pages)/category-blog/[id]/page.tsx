import BlogTitle from "@/app/components/BlogTitle";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Content from "@/app/Content";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const sortByPublish = await fetch(`${API_URL}posts/?tag=${id}&sort=-publishAt`).then((res) => res.json());
  const sortByView = await fetch(`${API_URL}posts/?tag=${id}&sort=-views&limit=3`).then((res) => res.json());

  return (
    <MaxWidthWrapper>
      <BlogTitle id={id} />

      <div className="flex flex-col gap-4 lg:gap-8">
        {" "}
        <div className="flex flex-col gap-2 mt-5">
          <h2 className=" lg:text-3xl text-[#4D4D4D] font-semibold pb-5 border-b border-gray-500 text-2xl">Latest</h2>
          <section className=" mt-5 h-full gap-8 grid grid-cols-1 md:grid-cols-3">
            {sortByPublish.items.slice(0, 3).map((post: BlogProps) => (
              <Link className="  bg-red1 rounded-2xl overflow-hidden h-full" href={`/blog/${post.postSlug}`}>
                <div className=" relative rounded-2xl w-full min-h-64">
                  <Image src={post.coverImage} className=" object-cover" alt="logo" fill />
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
                      <p className=" text-base line-clamp-5 font-[400]">{post.excerpt}</p>
                    </div>
                  </div>
                </MaxWidthWrapper>
              </Link>
            ))}
          </section>
          <Link className=" my-4 mx-auto  md:w-[15%] " href={`/category-all/${id}`}>
            <Button className=" w-full  rounded-2xl">View More</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <h2 className=" lg:text-3xl text-[#4D4D4D] font-semibold pb-5 border-b border-gray-500 text-2xl">Trending</h2>
          <section className=" mt-5 h-full gap-8 flex flex-col">
            {sortByView.items.slice(0, 3).map((post: BlogProps) => (
              <Link href={`/blog/${post.postSlug}`} className=" flex lg:flex-row  flex-col w-full items-stretch">
                <div className=" relative  col-span-6 w-full lg:w-[55%] max-h-[22rem] aspect-square h-full ">
                  <Image src={post.coverImage} className=" object-cover" alt="logo" fill />
                </div>
                <Content
                  width="w-full"
                  className=" w-full h-auto"
                  heading={post.title}
                  creation={post.createdAt}
                  paragraph={post.excerpt}
                />
              </Link>
            ))}
          </section>
          <Link className=" my-4 mx-auto  md:w-[15%] " href={`/category-all/${id}`}>
            <Button className=" w-full  rounded-2xl">View More</Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default page;
