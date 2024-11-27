"use client";
import "client-only";
import Script from "next/script";

const FacebookPluginConfig = () => {
  return (
    <>
      <div id="fb-root"></div>
      <Script
        strategy="lazyOnload"
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"
      ></Script>
    </>
  );
};
export default FacebookPluginConfig;
