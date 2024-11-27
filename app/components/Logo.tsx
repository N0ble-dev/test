import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className=" flex  w-44 items-center ">
      <Link href="/" className=" relative h-12 aspect-square w-full">
        <Image className=" object-contain" src="/Capture.PNG cat 3.png" alt="logo" fill />
      </Link>
      <div className=" relative h-16 w-64">
        <Image className=" object-contain" src="/CATReloaded.png" alt="logo" fill />
      </div>
    </div>
  );
};

export default Logo;
