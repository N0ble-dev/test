"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FacebookPluginConfig from "./FacebookPluginConfig";

const CommentsView = () => {
  const [currUrl, setCurrUrl] = useState<String>("");
  const pathName = usePathname();
  useEffect(() => {
    setCurrUrl(`${window.location.origin}${pathName}`);
  }, [pathName]);
  console.log(currUrl);

  return (
    <>
      <div
        className="fb-comments"
        data-href={currUrl}
        data-width=""
        data-numposts="4"
      ></div>
      <FacebookPluginConfig />
    </>
  );
};
export default CommentsView;
