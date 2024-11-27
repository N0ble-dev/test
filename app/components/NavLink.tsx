"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ text, href }: { text: string; href: string }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href}>
      <Button className={`${!isActive && "text-[#B72027] font-semibold"} `} variant={isActive ? "default" : "ghost"}>
        {text}
      </Button>
    </Link>
  );
};

export default NavLink;
