import React from "react";
import { mainFont } from "@/app/Mainfontt";
import CounterUp from "./CounterUp";

const AboutUsTestimonial = () => {
  return (
    <div className="w-[100%] scale-95  h-screen flex gap-10 justify-center">
      <div className="w-[60%] h-full py-20">
        <div className="flex flex-col gap-6 justify-center items-center px-0">
          <div
            style={{ fontFamily: mainFont.style.fontFamily }} // Applying the main font style
            className="font-semibold text-5xl uppercase w-[688px] h-[120px] text-left"
          >
            We Value Integrity and Transparency
          </div>
          <div className="w-[750px] h-[165px] border border-[#007FA9] rounded-xl flex items-center justify-between pl-8 text-4xl font-bold hover:bg-white hover:text-black">
            <div className="flex flex-col justify-center gap-20">
              <span className="hover:-translate-x-4 hover:-translate-y-6 hover:top-[-30%] hover:left-[-50%] hover:scale-90 transition-all translate-x-5">
                Excellence
                <div className=" text-[20px] leading-[24px] opacity-0 transition-all hover:translate-y-5 hover:opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat obcaecati incidunt eveniet nisi illo pariatur? Lorem,
                  ipsum dolor sit amet consectetur
                </div>
              </span>
            </div>
            <div className="pr-8 w-[25%]">
              <img src="/review_1.jpg" alt="Review" />
            </div>
          </div>
          <div className="w-[750px] h-[165px] border border-[#007FA9] rounded-xl flex items-center justify-between pl-8 text-4xl font-bold hover:bg-white hover:text-black">
            <div className="flex flex-col justify-center gap-20">
              <span className="hover:-translate-x-4 hover:-translate-y-6 hover:top-[-30%] hover:left-[-50%] hover:scale-90 transition-all translate-x-5">
                Excellence
                <div className=" text-[20px] leading-[24px] opacity-0 transition-all hover:translate-y-5 hover:opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat obcaecati incidunt eveniet nisi illo pariatur? Lorem,
                  ipsum dolor sit amet consectetur
                </div>
              </span>
            </div>
            <div className="pr-8 w-[25%]">
              <img src="/review_1.jpg" alt="Review" />
            </div>
          </div>
          <div className="w-[750px] h-[165px] border border-[#007FA9] rounded-xl flex items-center justify-between pl-8 text-4xl font-bold hover:bg-white hover:text-black">
            <div className="flex flex-col justify-center gap-20">
              <span className="hover:-translate-x-4 hover:-translate-y-6 hover:top-[-30%] hover:left-[-50%] hover:scale-90 transition-all translate-x-5">
                Excellence
                <div className=" text-[20px] leading-[24px] opacity-0 transition-all hover:translate-y-5 hover:opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat obcaecati incidunt eveniet nisi illo pariatur? Lorem,
                  ipsum dolor sit amet consectetur
                </div>
              </span>
            </div>
            <div className="pr-8 w-[25%]">
              <img src="/review_1.jpg" alt="Review" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[650px] flex items-center justify-center relative">
        <div className="relative mt-24 h-[400px] w-[400px] bg-[#0726306b] backdrop-blur-2xl rounded-full blur-xl mx-auto" />
        <div className="absolute  flex flex-col justify-between pt-40 gap-32">
          <div className="w-full flex justify-between">
            <div>
              <h1
                style={{ fontFamily: mainFont.style.fontFamily }}
                className="text-8xl uppercase font-bold text-center"
              >
                <CounterUp endCountNum={4} duration={6} />
              </h1>
              <div className="text-xl text-center uppercase">
                Years of Experience
              </div>
            </div>
            <div>
              <h1
                style={{ fontFamily: mainFont.style.fontFamily }}
                className="text-8xl uppercase font-bold text-center"
              >
                <CounterUp endCountNum={100} duration={6} />
              </h1>
              <div className="text-xl text-center uppercase">
                Projects
              </div>
            </div>
          </div>
          <div className="w-full flex gap-20  justify-between">
            <div>
              <h1
                style={{ fontFamily: mainFont.style.fontFamily }}
                className="text-8xl uppercase font-bold text-center"
              >
                <CounterUp endCountNum={20} duration={6} />
              </h1>
              <div className="text-xl text-center uppercase">
                Satisfied Customers
              </div>
            </div>
            <div>
              <h1
                style={{ fontFamily: mainFont.style.fontFamily }}
                className="text-8xl uppercase font-bold text-center"
              >
                <CounterUp endCountNum={1500} duration={6} />
              </h1>
              <div className="text-xl text-center uppercase">
                Hours Invested
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTestimonial;
