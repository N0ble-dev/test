import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Image from "next/image";

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="relative h-[400px] mx-auto rounded-2xl overflow-hidden bg-[#faeef2]">
        <p className=" absolute bottom-10 left-1/2  -translate-x-1/2 z-40 text-2xl text-white font-semibold w-[90%] text-center">
          We’re excited to launch CATazine, a blog sharing diverse tech and non-tech content to support a vibrant and
          innovative student community in technology.
        </p>
        <Image src="/aboutUs.svg" alt="logo" className="object-cover  absolute" fill />
      </div>

      <section className="container bg-white py-12  text-center mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-[#8b0c0c] mb-8">
          <span className="font-bold text-[#8b0c0c]">CAT Reloaded</span>, Computer Assistance Team, was originally
          founded and located in 1996 at the Faculty of Engineering, Mansoura University, Egypt.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto text-[#8b0c0c]">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#8b0c0c] text-white rounded-full p-4 mb-4">
              <Image src="/mision.svg" alt="logo" width={36} height={36} className="object-contain" />
            </div>
            <h3 className="text-lg font-bold">Mission</h3>
            <p className="text-gray-700 mt-2">
              CAT Reloaded strives to build a vibrant technical community for computer science and IT enthusiasts,
              emphasizing open source technologies, while equipping students with the technical prowess and personal
              skills needed to excel in the job market.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[#8b0c0c] text-white rounded-full p-4 mb-4">
              <Image src="/vision.svg" alt="logo" width={36} height={36} className="object-contain" />
            </div>
            <h3 className="text-lg font-bold">Vision</h3>
            <p className="text-gray-700 mt-2">
              Our vision is to create a strong, inclusive, and innovative network, where open source technologies and
              personal growth go hand in hand, shaping the future of our tech-savvy generation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[#8b0c0c] text-white rounded-full p-4 mb-4">
              <Image src="/values.svg" alt="logo" width={36} height={36} className="object-contain" />
            </div>
            <h3 className="text-lg font-bold">Our Values</h3>
            <p className="text-gray-700 mt-2">
              Our vision is to create a strong, inclusive, and innovative network, where open source technologies and
              personal growth go hand in hand, shaping the future of our tech-savvy generation.
            </p>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};
export default page;
