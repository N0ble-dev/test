import AddComment from "@/app/components/AddComment";
import Container from "@/app/components/Container";
import InfoPost from "@/app/components/InfoPost";
import MainHeading from "@/app/components/MainHeading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import OverflowingParagraph from "@/app/components/OverflowingParagraph";
import ProfileCard from "@/app/components/ProfileCard";
import Share from "@/app/components/Share";
import Subscribe from "@/app/components/Subscribe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EditIcon, GoalIcon, ShareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className=" pt-32 lg:pt-52 py-10">
      <MaxWidthWrapper className=" grid gap-5 justify-between lg:grid-cols-11">
        <div className=" relative flex flex-col gap-5 col-span-full lg:col-span-8">
          <div className=" w-full h-96 relative">
            <Image src="/image 7.png" className=" object-cover object-top" alt="logo" fill />
          </div>
          <MainHeading
            text="  Understanding UI Design: The Art of Building Beautiful, Functional, and User-Friendly Digital Experiences
            That Enhance User Satisfaction and Engagement Across Platforms"
          />

          <InfoPost creationDate="1 Jan 2023" commentCount={30} shareCount={20} />
          <OverflowingParagraph
            text="UI design, short for User Interface design, is the process of crafting digital interfaces that are not only
            visually appealing but also easy to navigate and enjoyable to use. It goes beyond simple aesthetics,
            focusing on creating elements that guide users effortlessly through the digital experience. Key aspects of
            effective UI design include clarity, consistency, and responsiveness. Clarity ensures that each element is
            easy to understand and minimizes confusion, while consistency uses familiar colors, icons, and typography to
            provide a predictable and cohesive experience. Responsiveness, on the other hand, adapts the design to
            different screen sizes, ensuring that users can interact smoothly across devices—be it mobile, tablet, or
            desktop. The UI design process begins with research to understand user needs and preferences, followed by
            wireframing, where the basic layout of elements is planned. Prototyping is the next step, where designers
            add final visual touches, including colors, images, and typography, to simulate the final product. User
            testing validates these designs by gathering feedback on usability and enjoyment, allowing designers to
            refine their work."
          />
        </div>
        <div className=" flex flex-col gap-4 col-span-full sm:col-span-2 lg:col-span-3">
          <ProfileCard
            bio="Creative UI/UX designer skilled in crafting user-centered interfaces that enhance usability and aesthetics, ensuring engaging and intuitive digital experiences."
            image="/image 7.png"
            name="alla nour"
          />
          <Container className=" items-start">
            <div className=" flex flex-col gap-2">
              <h3 className="flex items-center gap-2">
                Profile language <EditIcon />
              </h3>
              <p>English</p>
            </div>
            <div className=" flex flex-col gap-2">
              <h3 className="flex items-center gap-2">
                Profile language <EditIcon />
              </h3>
              <p>English</p>
            </div>
          </Container>
          <Container className=" items-start">
            <h3>Who to follow</h3>
            <div className="flex items-start gap-2">
              <div className=" w-20 overflow-hidden h-20 relative">
                <Image src="/image 7.png" className=" object-cover" alt="logo" fill />
              </div>
              <div>
                <h5 className=" uppercase text-black font-semibold">alla nour</h5>
                <p className=" text-muted-foreground">dev full staack</p>
              </div>
            </div>
          </Container>
          <div></div>
          <Container>
            <h3>Recommeded for you</h3>
            <div className="flex flex-col  w-full items-start gap-4">
              <p className="flex w-full items-center justify-between text-muted-foreground">
                dev full staack <GoalIcon />
              </p>
              <p className="flex w-full items-center justify-between text-muted-foreground">
                dev full staack <GoalIcon />
              </p>
            </div>
          </Container>
          <Subscribe />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <Container className="">
          <AddComment commentCount={30} />
        </Container>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <Container className=" flex flex-col md:flex-row">
          <div className=" aspect-square h-80 relative">
            <Image src="/image 7.png" className=" object-cover" alt="logo" fill />
          </div>
          <div className=" flex flex-col gap-6 px-8 py-4">
            <h3 className=" text-black">
              Author <span className=" font-semibold">ne</span>
            </h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>
              UI/UX Designer with 4 years of experience in creating intuitive, user-focused digital solutions that
              enhance usability and engagement
            </p>
            <p className=" text-red-500 underline">See All ARTICLES </p> <Share />
          </div>
        </Container>
      </MaxWidthWrapper>
      <div>
        <h2 className=" text-center mt-5 font-bold text-2xl">we also suggest</h2>
        <div className=" grid grid-cols-3 gap-4"></div>
      </div>
    </section>
  );
};

export default page;
