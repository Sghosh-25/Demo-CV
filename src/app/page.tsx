import Image from "next/image";
import { mainFont } from "@/app/Mainfontt";
import React from "react";
import AboutUsAnimation from "./AboutUsAnimation";
import AboutUsTestimonial from "./AboutUsTestimonial";
import AboutUsBanner from "./AboutUsBanner";
import AboutUsFooter from "./AboutUsFooter";

// Home component function
export default function Home() {
  return (
    <>
      {/* Fragment to wrap the component without adding extra nodes to the DOM */}
      <div className="w-[100%]">
        
        <div className="w-full flex flex-col  bg-[url(/Vector1.png)]">
          {/* Background image container with padding and flex layout */}
          <div className="md:scale-95">
          <div className="mt-12 sm:mt-24 md:mt-48  mx-auto w-full sm:w-[700px] md:w-[1329px]">
            {/* Container for the text content */}
            <span
              style={{ fontFamily: mainFont.style.fontFamily }} // Applying the main font style
              className="font-semibold text-3xl sm:text-5xl md:text-7xl uppercase h-[100px] sm:h-[150px]"
            >
              {/* Styling the text */}
              We Believe in Innovation and Creativity
            </span>
            <p className="py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl h-[100px] sm:h-[120px]">
              At Code Visionary Studios, we believe in the power of innovation
              and creativity. Our team excels in web design, app development,
              branding, and digital marketing, delivering solutions that drive
              success. Learn more about our philosophy, our journey, and the
              people who make it all possible.
            </p>
          </div>
          {/* Image container */}
          <div className="mt-4 sm:mt-6 mx-auto w-full sm:w-[800px] md:w-[1000px] lg:w-[1400px] h-auto">
            <Image
              src="/herobottom.jpg"
              alt="html system image"
              width={1600}
              height={1067}
              layout="responsive"
              priority
              className="rounded-t-3xl  shadow-[0px_0px_4px_0px_#89E2FF33] mx-auto"
            />
            {/* <img src="/herobottom.jpg" alt="" className="rounded-t-3xl  shadow-[0px_0px_4px_0px_#89E2FF33] mx-auto"/> */}
          </div></div>
        </div>
      </div>
    
      {/* About Us Animated Card Section */}
      <AboutUsAnimation />
      {/* About Us Testimonial Section */}
      <AboutUsTestimonial /> 
      {/* About Us Banner Section */}
      <AboutUsBanner />
      {/* About Us Footer Section */}
      <AboutUsFooter />
    </>
  );
}
