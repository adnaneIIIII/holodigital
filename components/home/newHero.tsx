import React from "react";
import { Button } from "@/components/ui/button";
import Arroww from "@/public/icon/arrow-w.svg";
import Link from "next/link";
import { AnimatedGroup } from "../ui/animated-group";
import { TextEffect } from "../ui/text-effect";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Newhero() {
  const image = [
    "a.jpg",
    "q.jpg",
    "r.jpg",
    "d.jpg",
    "e.jpg",
    "f.jpg",
    "s.jpg",
    "t.jpg",
    "u.jpg",
    "l.jpg",
    "y.jpg",
    "z.jpg",
  ];
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
          duration: 1,
        },
      },
    },
  };
  return (
    <>
      <div className=" flex justify-center bg-[linear-gradient(to_bottom,#000,#200000,#a52f00,#20000030)] py-[72px] sm:py-28 relative overflow-clip">
        <div
          className=" absolute md:h-[750px] md:w-[3000px] w-[1136px] h-[1178px]
      
      rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#fa7131] 
      
      bg-[radial-gradient(closest-side,#000_82%,#fa8b31ae)] md:top-[calc(100%-780px)] top-[calc(100%-1240px)]"
        ></div>
        {/* <div
        className=" absolute h-[1000px] w-[24000px] 
      
      rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#fa7131] 
      
      bg-[radial-gradient(closest-side,#000_82%,#fa8b31ae)] top-[calc(100%-560px)] sm:top-[calc(100%-810px)]"
      /> */}

        <div className="container  relative pt-8">
          <div className="flex items-center justify-center ">
            <AnimatedGroup variants={transitionVariants}>
              <Link
                href="#link"
                className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span className="bg-gradient-to-r from-[#a52f00] to-[#dac574] text-transparent bg-clip-text [-webkit-background-clip:text]">
                  Entertiment 2.0 is here
                </span>
                <span className="inline-flex items-center gap-1">
                  <span>Introducing HoloIPTV</span>
                </span>
                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedGroup>
          </div>
          <div className="flex justify-center ">
            <div className="inline-flex relative">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 text-center max-w-5xl font-bold text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
              >
                PREMIUM TV CHANNELS MOVIES AND MORE
              </TextEffect>
            </div>
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
            className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row"
          >
            <div className="flex justify-center mb-8">
              <Button
                variant={"default"}
                className="bg-orange-500 text-white px-5 py-6 hover:bg-white hover:text-black hover:border-black border-2 "
                asChild
              >
                <Link href="#pricing">
                  Get Started Free
                  <Arroww />
                </Link>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </div>
      <div className="container mt-8 w-full max-w-7xl mx-auto">
        <div className="flex overflow-hidden   before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-10 after:w-10 relative  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none gap-16 pr-16 "
          >
            {image.map((item) => (
              <Image
                className="flex-none w-auto rounded-md"
                src={`/assets/` + item}
                alt="Nvidia Logo"
                width={350}
                height={1000}
                key={item}
              />
            ))}
            {image.map((item) => (
              <Image
                className="flex-none  w-auto rounded-md"
                src={`/assets/` + item}
                alt="Nvidia Logo"
                height={1000}
                width={350}
                key={item}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
