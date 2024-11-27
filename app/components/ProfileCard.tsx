import Image from "next/image";
import React from "react";
import Container from "./Container";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const ProfileCard = ({
  image,
  name,
  bio,
  github,
  linkedIn,
  facebook,authorId
}: {
  image: string;
  name?: string;
  bio?: string;
  github?: string;
  linkedIn?: string;
  facebook?: string;authorId?:string
}) => {
  return (
    <div className="flex items-center w-full flex-col gap-4 rounded-xl border border-red-500 bg-red1 py-4 px-8 ">
        <Link className=" flex flex-col items-center" href={`/author/${authorId}`}>
        <div className=" w-32 h-32 rounded-full overflow-hidden  relative">
          <Image src={image} className=" object-cover" alt="logo" fill />
        </div>
        <h2 className=" text-2xl  font-semibold text-black">{name}</h2>
        <p className=" text-center">{bio}</p>
      </Link>
        <div className=" flex flex-wrap items-center gap-3">
          {facebook && (
            <Link href={facebook}>
              <FaFacebook />
            </Link>
          )}

          {linkedIn && (
            <Link href={linkedIn}>
              <FaLinkedin />
            </Link>
          )}
          {github && (
            <Link href={github}>
              <FaGithub />
            </Link>
          )}
        </div>
    </div>
  );
};

export default ProfileCard;
