import Image from "next/image";
import React from "react";
import { mainFont } from "@/app/Mainfontt";

const AboutUsBanner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div className="relative h-[300px] sm:h-[500px] md:h-[725px] w-[300px] sm:w-[500px] md:w-[725px] bg-[#0726306b] backdrop-blur-2xl rounded-full blur-xl mx-auto"></div>
      <div className="absolute w-full md:w-[1400px] h-[300px] sm:h-[400px] md:h-[500px] bg-[url(/bannerBg.png)] flex flex-col md:flex-row justify-evenly">
        <div className="w-full md:w-[60%] flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 p-4 sm:pl-10 md:pl-20">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
            Let's Start a Conversation
          </h1>
          <p className="text-sm sm:text-lg md:text-xl font-secondaryFont text-center md:text-left">
            Whether you’re starting a new project or looking to enhance your
            current digital strategy, Code Visionary Studios is here to assist
            you. Reach out to us today to learn more about our services and how
            we can help your business succeed.
          </p>
          <button
            style={{ fontFamily: mainFont.style.fontFamily }}
            className="flex items-center uppercase bg-white text-[#007FA9] justify-center rounded-full w-[120px] h-[40px] sm:w-[140px] sm:h-[45px] md:w-[166px] md:h-[50px] mx-auto md:mx-0"
          >
            connect
          </button>
        </div>

        <div className="flex justify-center items-end mt-4 md:mt-0">
          <Image
            src="/MockupLaptop.png"
            alt="Floating Laptop Image"
            width={925}
            height={787}
            className="w-[300px] sm:w-[500px] md:w-[925px] h-auto pb-16 backdrop-filter: blur(20px)"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
