"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaFile, FaLocationArrow } from "react-icons/fa6";
import { scrollToSection } from "@/utils/cn";

const Hero = () => {
  return (
    <div className="py-24">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-10 sm:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center gap-3 sm:gap-2">
          <h2 className="uppercase tracking-widest text-md text-center text-blue-100 max-w-80">
            Hi&#128400;, I'm Ashish Maharjan
          </h2>

          <TextGenerateEffect
            className="text-center text-40px md:text-5xl lg:text-4xl"
            words="Bringing your ideas to life as functional websites."
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I specialize in building performant and scalable web applications
            using modern technologies, creating seamless and engaging user
            experiences.
          </p>
          <div className="flex gap-5 sm:flex-row flex-col">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => scrollToSection("projects")}
            />
            <a target="_blank" href="./ashish-cv.pdf">
              <MagicButton
                title="View My CV"
                icon={<FaFile />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
