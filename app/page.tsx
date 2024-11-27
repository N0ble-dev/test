import Image from "next/image";
import Cat from "./components/Cat";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Content from "./Content";
import Link from "next/link";

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const data = await fetch(`${API_URL}posts/?sort=-publishAt`).then((res) => res.json());
  return (
    <section>
      <div className=" min-h-[80vh] relative  overflow-hidden flex items-center justify-center bg-gradient-to-tr from-[#f7c5c6] to-[#FDEEEE]">
        <Cat word={"catazine"} />
      </div>
      <MaxWidthWrapper className="gap-5 items-center my-10 rounded-2xl flex flex-col lg:grid lg:grid-cols-5 bg-gradient-to-tr from-[#f7c5c6] to-[#FDEEEE]">
        <div className=" flex flex-col gap-2 pt-4 col-span-3">
          <h2 className=" text-2xl font-bold">What is CATazine ?</h2>
          <p className=" text-base font-[400]">
            CATazine is a blog where CAT Reloaded members share both technical and non-technical posts with the tech
            community. It provides creators with professional tools to customize and refine their content. Presented as
            the team’s official blog, CATazine will be accessible through the team’s website.
          </p>
        </div>
        <div className=" w-full col-span-2 relative min-h-64">
          <Image src="/Blog post-amico 1.png" className=" object-contain" alt="logo" fill />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="  ">
        <h2 className=" text-4xl font-bold text-center my-4">Take a look here</h2>

        <Link href={`/blog/${data.items[0].postSlug}`} className=" flex lg:flex-row flex-col w-full items-stretch">
          <Content
            width="w-full"
            className=" w-full h-auto"
            heading={data.items[0].title}
            paragraph={data.items[0].excerpt}
            creation={data.items[0].createdAt}
          />

          <div className=" relative aspect-square col-span-6 w-full lg:w-[55%] h-[22rem]">
            <Image src={data.items[0].coverImage} className=" object-cover" alt={data.items[0].title} fill />
          </div>
        </Link>
      </MaxWidthWrapper>
      <MaxWidthWrapper className=" gap-4 grid grid-cols-1 lg:grid-cols-3">
        {data.items.map((post: BlogProps) => (
          <Link className="  bg-red1 rounded-2xl h-full" href={`/blog/${post.postSlug}`}>
            <MaxWidthWrapper className=" my-10  ">
              <div className=" relative w-full min-h-64">
                <Image src={post.coverImage} className=" object-contain" alt="logo" fill />
              </div>
              <div className="flex mt-3">
                <div className=" flex flex-col gap-2 col-span-3">
                  <h2 className=" text-xl  font-bold">{post.title}</h2>
                  <span className="text-red-600 text-sm font-semibold">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(new Date(post.createdAt))}
                  </span>
                  <p className=" text-base line-clamp-5 font-[400]">{post.excerpt}</p>{" "}
                </div>
              </div>
            </MaxWidthWrapper>
          </Link>
        ))}
      </MaxWidthWrapper>
    </section>
  );
}
