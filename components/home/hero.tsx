import React from "react";
import { Button } from "@/components/ui/button";
import Arroww from "@/public/icon/arrow-w.svg";
import Link from "next/link";
import { AnimatedGroup } from "../ui/animated-group";
import { TextEffect } from "../ui/text-effect";

export default function HeroSection() {
  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
        },
      },
    },
  };
  return (
    <div className=" flex justify-center bg-[linear-gradient(to_bottom,#000,#200000,#a52f00,#d08f17)] py-[72px] sm:py-24 relative overflow-clip">
      <div
        className=" absolute h-[375px] w-[750px] sm:w-[2836px] sm:h-[768px] 
      
      rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#fa7131] 
      
      bg-[radial-gradient(closest-side,#000_82%,#fa8b31ae)] top-[calc(100%-96px)] sm:top-[calc(100%-190px)]"
      ></div>

      <div className="container  relative pt-8">
        <div className="flex items-center justify-center ">
          <AnimatedGroup variants={transitionVariants}>
            <a
              href="#pricing"
              className="inline-flex gap-3 border py-1 px-2 rounded-xl border-white/30"
            >
              <span className="bg-gradient-to-r from-[#a52f00] to-[#dac574] text-transparent bg-clip-text [-webkit-background-clip:text]">
                Entertiment 2.0 is here
              </span>
              <span className="inline-flex items-center gap-1">
                <span>Introducing HoloIPTV</span>
                <Arroww />
              </span>
            </a>
          </AnimatedGroup>
        </div>
        <div className="flex justify-center mt-10">
          <div className="inline-flex relative">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-8 text-center font-bold text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
            >
              PREMIUM TV CHANNELS MOVIES AND MORE
            </TextEffect>
          </div>
        </div>
        <div className="flex justify-center">
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.5}
            as="p"
            className="mx-auto text-center mt-8 max-w-xl text-balance text-lg"
          >
            Enjoy premium sports, live pay-per-view events, and the newest movie
            releases in high quality—all from the comfort of your screen.
          </TextEffect>
        </div>
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
        >
          <div className="flex justify-center mt-8 gap-3 mb-8">
            <Button variant={"default"} className="">
              <Link href="#pricing">Get for Free</Link>
            </Button>
            <Button variant={"ghost"}>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </AnimatedGroup>
      </div>
    </div>
  );
}
