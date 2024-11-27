"use client";
import { ShareIcon } from "lucide-react";
import React from "react";
import { PiChatCircleDuotone } from "react-icons/pi";
import { useRouter } from "next/router";

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
const style = {
  copyContainer: {
    background: "transparent",
    display: "none",
  },
};

const InfoPost = ({
  creationDate,
  commentCount,
  shareCount,
}: {
  creationDate: string;
  commentCount: number;
  shareCount: number;
}) => {
  const [currUrl, setCurrUrl] = useState("");
  const pathName = usePathname();
  useEffect(() => {
    setCurrUrl(`${window.location.origin}${pathName}`);
  }, [pathName]);
  console.log(currUrl);

  return (
    <div className=" flex lg:flex-row flex-col justify-between lg:items-center gap-8">
      <span className=" text-base font-semibold text-red-800">Posted on {creationDate}.</span>
      <div className=" flex items-center gap-4">
        {/* <div className="flex hover:text-red-400 duration-150 items-center gap-2">
          <PiChatCircleDuotone className=" w-5 h-5" />{" "}
          <span>Comment ( {commentCount} )</span>
        </div>
        <div className="flex hover:text-red-400 duration-150 items-center gap-2">
          <ShareIcon className=" w-5 h-5" /> <span>Share ( {shareCount} )</span>
        </div> */}
        {/* <LuLinkedin className="hover:text-gray-300 cursor-pointer" /> */}
        {/* <FaFacebook className="hover:text-gray-300 cursor-pointer" /> */}
        {/* <FaInstagram className="hover:text-gray-300 cursor-pointer" /> */}
        {/* <FaXTwitter className="hover:text-gray-300 cursor-pointer" /> */}
        <FacebookShareButton url={currUrl} title="hi">
          <div className="flex hover:text-red-400 duration-150 items-center gap-2">
            <FaFacebook className=" w-5 h-5" /> <span>Share </span>
          </div>
        </FacebookShareButton>
        <LinkedinShareButton url={currUrl} title="hi">
          <div className="flex hover:text-red-400 duration-150 items-center gap-2">
            <LuLinkedin className=" w-5 h-5" /> <span>Share </span>
          </div>
        </LinkedinShareButton>
        <TwitterShareButton url={currUrl} title="hi">
          <div className="flex hover:text-red-400 duration-150 items-center gap-2">
            <FaXTwitter className=" w-5 h-5" /> <span>Share </span>
          </div>
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default InfoPost;
