import React from "react";
import { mainFont } from "@/app/Mainfontt";
import CounterUp from "./CounterUp";

const AboutUsTestimonial = () => {
  return (
    <div className="w-full h-auto md:h-screen flex flex-col md:flex-row justify-around">
      <div className="w-full md:w-1/2 h-full py-10 md:py-20">
        <div className="flex flex-col gap-6 justify-center items-center px-4 md:px-0">
          <div
            style={{ fontFamily: mainFont.style.fontFamily }} // Applying the main font style
            className="font-semibold text-3xl md:text-5xl uppercase w-full md:w-[688px] h-[120px] text-center md:text-left"
          >
            We Value Integrity and Transparency
          </div>
          <div className="w-full md:w-[688px] h-auto md:h-[159px] border border-[#007FA9] rounded-xl flex items-center justify-between px-4 md:pl-8 text-xl md:text-4xl font-bold hover:bg-white hover:text-black">
            <div className="flex flex-col justify-center gap-4 md:gap-20">
              <span className="hover:-translate-x-4 hover:-translate-y-6 hover:top-[-30%] hover:left-[-50%] hover:scale-90 transition-all translate-x-5">
                Excellence
                <div className="text-sm opacity-0 transition-all hover:translate-y-5 hover:opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat obcaecati incidunt eveniet nisi illo pariatur? Lorem,
                  ipsum dolor sit amet consectetur
                </div>
              </span>
            </div>
            <div className="pr-8">
              <img src="/review_1.jpg" alt="Review" />
            </div>
          </div>
          <div className="w-full md:w-[688px] h-auto md:h-[159px] border border-[#007FA9] rounded-xl flex items-center justify-between px-4 md:pl-8 text-xl md:text-4xl font-bold hover:bg-white hover:text-black">
            <div className="flex flex-col justify-center gap-4 md:gap-20">
              <span className="hover:-translate-x-4 hover:-translate-y-6 hover:top-[-30%] hover:left-[-50%] hover:scale-90 transition-all translate-x-5">
                Excellence
                <div className="text-sm opacity-0 transition-all hover:translate-y-5 hover:opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat obcaecati incidunt eveniet nisi illo pariatur? Lorem,
                  ipsum dolor sit amet consectetur
                </div>
              </span>
            </div>
            <div className="pr-8">
              <img src="/review_1.jpg" alt="Review" />
            </div>
          </div>
          <div className="w-full md:w-[688px] h-auto md:h-[159px] border border-[#007FA9] rounded-xl flex items-center justify-between px-4 md:pl-8 text-xl md:text-4xl font-bold hover:bg-white hover:text-black">
            <div className="flex flex-col justify-center gap-4 md:gap-20">
              <span className="hover:-translate-x-4 hover:-translate-y-6 hover:top-[-30%] hover:left-[-50%] hover:scale-90 transition-all translate-x-5">
                Excellence
                <div className="text-sm opacity-0 transition-all hover:translate-y-5 hover:opacity-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat obcaecati incidunt eveniet nisi illo pariatur? Lorem,
                  ipsum dolor sit amet consectetur
                </div>
              </span>
            </div>
            <div className="pr-8">
              <img src="/review_1.jpg" alt="Review" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center relative">
        <div className="relative mt-12 md:mt-24 h-[200px] md:h-[400px] w-[200px] md:w-[400px] bg-[#0726306b] backdrop-blur-2xl rounded-full blur-xl mx-auto"></div>
        <div className="absolute w-full md:w-[48vw] flex flex-col gap-10 md:gap-32">
          <div className="flex flex-col md:flex-row justify-around pt-10 md:pt-24">
            <div>
              <h1
                style={{ fontFamily: mainFont.style.fontFamily }}
                className="text-5xl md:text-8xl uppercase font-bold text-center"
              >
                <CounterUp endCountNum={4} duration={10} />
              </h1>
              <div className="text-lg md:text-xl text-center uppercase">
                Years of Experience
              </div>
            </div>
            <div>
              <h1
                style={{ fontFamily: mainFont.style.fontFamily }}
                className="text-5xl md:text-8xl uppercase font-bold text-center"
              >
                <CounterUp endCountNum={100} duration={10} />
              </h1>
              <div className="text-lg md:text-xl text-center uppercase">
                Projects
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <div>
              <h1
                style={{ fontFamily: mainFont.style.fontFamily }}
                className="text-5xl md:text-8xl uppercase font-bold text-center"
              >
                <CounterUp endCountNum={20} duration={10} />
              </h1>
              <div className="text-lg md:text-xl text-center uppercase">
                Satisfied Customers
              </div>
            </div>
            <div>
              <h1
                style={{ fontFamily: mainFont.style.fontFamily }}
                className="text-5xl md:text-8xl uppercase font-bold text-center"
              >
                <CounterUp endCountNum={1500} duration={10} />
              </h1>
              <div className="text-lg md:text-xl text-center uppercase">
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
