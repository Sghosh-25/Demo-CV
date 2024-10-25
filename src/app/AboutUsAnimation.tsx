"use client";
import React, { useRef, useEffect } from "react";
import { mainFont } from "@/app/Mainfontt";
import { motion, useAnimation } from "framer-motion";

const AboutUsAnimation = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.2; // 80% of the viewport height

      if (scrollY > triggerPoint) {
        controls1.start({ y: -scrollY * 0.55, transition: { duration: 0.8, ease: 'easeOut' } });
        controls2.start({ y: -scrollY * 0.6, transition: { duration: 1, ease: 'easeOut' } });
        controls3.start({ y: -scrollY * 0.5, transition: { duration: 0.8, ease: 'easeOut' } });
      } else {
        controls1.start({ y: 0 });
        controls2.start({ y: 0 });
        controls3.start({ y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls1, controls2, controls3]);
  return (
    <div className="h-[110vh] mt-80 flex justify-around gap-x-8">
      <div
        ref={containerRef}
        className="w-[55vw] flex justify-around items-center"
      >
        <motion.div
          className="w-[306px] h-[470px] relative -right-36 -top-8 bg-rose-500 rounded-2xl"
          animate={controls1}
        />
        <motion.div
          className="w-[306px] h-[470px] relative -bottom-10 bg-slate-500 rounded-2xl"
          animate={controls2}
        />
        <motion.div
          className="w-[306px] h-[470px] relative -left-36 -bottom-6 bg-yellow-500 rounded-2xl"
          animate={controls3}
        />
      </div>

      <div ref={containerRef} className="w-[45vw] flex flex-col justify-center gap-y-10">
        <motion.div
          style={{
            fontFamily: mainFont.style.fontFamily,
          }}
          className="w-[653] h-[140] text-5xl uppercase" animate={controls1}
        >
          We create imapactful digital experience that drvie success
        </motion.div>
        <motion.p className="w-[653] h-[120] text-lg" animate={controls3}>
          Code Visionary Studios is dedicated to creating impactful digital
          experiences. With a focus on web design, app development, branding,
          and digital marketing, we provide comprehensive solutions tailored to
          your needs. Explore our values, our approach, and the team that makes
          it all happen.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUsAnimation;
