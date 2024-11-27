import Image from "next/image";
import Cat from "./../../components/Cat";
import Link from "next/link";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

const page = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}tags`).then((res) => res.json());
  console.log(res);
  return (
    <section>
      <div className=" min-h-[80vh] relative  overflow-hidden flex items-center justify-center bg-gradient-to-tr from-[#f7c5c6] to-[#FDEEEE]">
        <Cat word={"categories"} />
      </div>
      <MaxWidthWrapper className="flex bg-red1  lg:my-10 rounded-lg  items-center  py-6 px-12 flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">
            What are Technical Circles?
          </h2>
          <p className="text-gray-800 leading-relaxed mb-2">
            CATazine is a blog where CAT Reloaded members share both technical
            and non-technical posts with the tech community. It provides
            creators with professional tools to customize and refine their
            content.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Presented as the team’s official blog, CATazine will be accessible
            through the team’s website.
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-red-900 p-4 rounded-lg text-white relative">
          <div className="h-64 overflow-y-scroll flex flex-col items-center gap-3 space-y-4 custom-scrollbar">
            {res.items?.length > 0 ? (
              res.items?.map((tag: TagsProps) => (
                <Link
                  className=" w-full mx-auto rounded-lg bg-white max-w-sm"
                  href={`/category-blog/${tag.tagSlug}`}
                >
                  <div key={tag.id} className="   w-full  p-4">
                    <div className="flex w-full items-center justify-center mb-4">
                      <div
                        className="bg-white  rounded-full w-32 h-32 relative
                       flex items-center justify-center overflow-hidden"
                      >
                        {tag.image && (
                          <Image
                            src={tag.image}
                            alt={` logo`}
                            fill
                            className="object-cover absolute "
                          />
                        )}
                      </div>
                    </div>

                    <h3 className="text-center text-lg font-bold text-red-600 mb-2">
                      {tag.name}
                    </h3>
                    <p className="text-center text-gray-800 text-sm">
                      {tag.description}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className=" m-auto"> No Categories added yet</p>
            )}
          </div>

          <div className="text-center mt-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default page;
