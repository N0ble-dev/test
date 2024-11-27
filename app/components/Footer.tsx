import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ModalCustom from "./ModalCustom";
import { Button } from "@/components/ui/button";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer className="bg-[#320606] text-white py-8 ">
      <MaxWidthWrapper className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start md:col-span-1 space-y-4">
          <Image src="/catwhite.svg" alt="logo" width={250} height={250} />{" "}
          <p className="text-gray-400">Go To CATReloaded</p>
          <div className="flex flex-col items-center lg:items-start space-x-2 gap-5 w-full max-w-sm">
            <Subscribe notitle />
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col space-y-2">
          <h2 className="font-semibold">Contact us</h2>
          <p className="text-gray-300">CATReloaded.com</p>
          <div className="flex justify-center md:justify-start space-x-3 mt-2">
            <LuLinkedin className="hover:text-gray-300 cursor-pointer" />
            <FaFacebook className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col space-y-2">
          <h2 className="font-semibold">Support</h2>
          <p className="text-gray-300 cursor-pointer hover:text-white">Common questions</p>
          <p className="text-gray-300 cursor-pointer hover:text-white">Help and Support</p>
          <p className="text-gray-300 cursor-pointer hover:text-white">Privacy Policy</p>
        </div>

        <div className="md:col-span-2 flex flex-col items-center space-y-4">
          <h2 className="font-semibold">Download our app now</h2>
          <div className="flex justify-center flex-wrap gap-4 items-center ">
            <div className="bg-transparent border-white border-2 text-white px-4 py-2 rounded-xl flex items-center gap-4">
              <AiOutlineApple className="text-3xl" />
              <button className="flex flex-col">
                Download on <span className=" font-semibold">App Store</span>
              </button>
            </div>
            <div className="bg-transparent border-white border-2 text-white px-4 py-2 rounded-xl   flex items-center gap-4">
              <IoLogoGooglePlaystore className="text-3xl" />
              <button className=" flex flex-col ">
                Get it on <span className=" font-semibold">Google Play</span>
              </button>
            </div>
            <div className="bg-transparent border-white border-2 text-white px-4 py-2 rounded-xl   flex items-center gap-4">
              <IoLogoGooglePlaystore className="text-3xl" />
              <button className=" flex flex-col ">
                Get it on <span className=" font-semibold">Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2024 CATReloaded. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
