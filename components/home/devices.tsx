"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Devices() {
  const image = [
    "0.webp",
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.webp",
    "9.webp",
    "11.webp",
  ];

  return (
    <div className="py-[72px] sm:py-34   flex justify-center">
      <div className="container py-16">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Works on all devices
        </h1>
        <div className="w-24 mt-8 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>

        <div className="flex overflow-hidden mt-16 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-10 after:w-10 relative  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#0a0a0a,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#0a0a0a,rgb(0,0,0,0))]">
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
                className="flex-none h-16 w-auto "
                src={`/icons/` + item}
                alt="Nvidia Logo"
                height={100}
                width={150}
                key={item}
              />
            ))}
            {image.map((item) => (
              <Image
                className="flex-none h-16 w-auto "
                src={`/icons/` + item}
                alt="Nvidia Logo"
                height={100}
                width={150}
                key={item}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
