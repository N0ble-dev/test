"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import NavLink from "./NavLink";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { BookmarkIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PhoneNav from "./PhoneNav";
import Search from "./search/Search";
import ModalCustom from "./ModalCustom";
import Subscribe from "./Subscribe";
const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "About us",
    href: "/about-us",
  },
];
const NavBar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [active, setIsActive] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsTopPage(true);
      } else setIsTopPage(false);
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isTopPage]);
  const isHome = true;
  return (
    <header
      className={`${
        isHome
          ? "text-white font-semibold placeholder:text-white "
          : `  text-main2 font-semibold placeholder:text-white  ${isScrollingDown && "bg-white/80"}`
      } fixed inset-0  max-h-[5rem] lg:max-h-[8rem]  z-[99]   py-4  bg-[#F5F5F5] flex flex-col gap-2  transition-all duration-300 ${
        isScrollingDown
          ? " lg:translate-y-[-80%] translate-y-[-101%]"
          : !isTopPage && !isScrollingDown
          ? `  -translate-y-8 lg:-translate-y-10 ${!isHome && "bg-white/80"}`
          : "translate-y-0"
      }`}
    >
      <nav className=" flex flex-col">
        <MaxWidthWrapper noPadding className="  w-full flex justify-between items-center">
          <div className=" lg:mx-0 m-auto">
            <Logo />
          </div>
          <div className=" lg:flex hidden items-center ">
            {NAV_LINKS.map((link, i) => (
              <NavLink text={link.name} href={link.href} key={i} />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className=" lg:block hidden">
              <NavLink text="Contact us" href="/contact" />
            </div>
            <div className=" lg:hidden block">
              <PhoneNav navigation={NAV_LINKS} />
            </div>
          </div>
        </MaxWidthWrapper>
        <div className=" bg-white  w-full ">
          <MaxWidthWrapper className=" grid items-center grid-cols-5 lg:grid-cols-3 ">
            <div className=" w-full items-center col-span-3 md:col-span-4 lg:col-span-1  py-1.5 px-3 rounded-full border border-red-400 flex gap-2">
              <Search />
            </div>
            <div className=" lg:block hidden w-32 m-auto h-20 relative">
              <Image src="/CATazine.svg" className=" object-contain" fill alt="logo" />
            </div>
            <div className="flex   ml-auto items-center gap-2">
              <BookmarkIcon />
              <ModalCustom btn={<Button>Subscribe</Button>} content={<Subscribe />} />
            </div>
          </MaxWidthWrapper>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
