import Image from "next/image";
// import { mainFont } from "@/app/Mainfontt";
import React from "react";

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full h-screen relative -z-1  flex flex-col justify-center items-center">
          <Image
            src="/Vector1.png"
            alt="code-visonary-studio"
            width={2072}
            height={0}
          />
          <div className="bg-transparent absolute z-10 top-64 ">
            <span
              // style={{
              //   fontFamily: mainFont.style.fontFamily,
              // }}
              className="font-semibold text-7xl flex  justify-center uppercase  "
            >
              We Believe in Innovation <br /> and Creativity
            </span>
            <p className="py-10 text-lg flex  justify-center">
              At Code Visionary Studios, we believe in the power of innovation
              and creativity. Our team excels in web design, app development,{" "}
              <br /> branding, and digital marketing, delivering solutions that
              drive success. Learn more about our philosophy, our journey, and
              the <br /> people who make it all possible.
            </p>
          </div>
          <div className="absolute z-5 bottom-0  ">
            <Image
              src="/html_system_websites_concept 1.jpg"
              alt="html system image"
              width={1250}
              height={1067}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
