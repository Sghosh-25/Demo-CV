import Image from "next/image";
import { mainFont } from "@/app/Mainfontt";
import React from "react";
import AboutUsAnimation from "./AboutUsAnimation"


export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="  w-full  flex flex-col pb-28 bg-[url(/Vector1.png)] " >
          <div className="mt-48 ml-40 w-[1329]">
            <span
              style={{
                fontFamily: mainFont.style.fontFamily,
              }}
              className="font-semibold text-7xl uppercase h-[150]  "
            >
              We Believe in Innovation and Creativity
            </span>
            <p className="py-8 text-lg h-[120]">
              At Code Visionary Studios, we believe in the power of innovation
              and creativity. Our team excels in web design, app development,{" "}
              branding, and digital marketing, delivering solutions that drive
              success. Learn more about our philosophy, our journey, and the
              people who make it all possible.
            </p>
          </div>
          <div className=" mt-6 ">
            <Image
              src="/html_system_websites_concept 1.jpg"
              alt="html system image"
              width={1600}
              height={1067}
              className="rounded-t-3xl  shadow-[0px_0px_4px_0px_#89E2FF33] mx-auto  "
            />
          </div>
        </div>
      </div>
      <AboutUsAnimation />
    </>
  );
}
