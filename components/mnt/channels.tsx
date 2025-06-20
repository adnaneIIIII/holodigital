"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Channels() {
  const image = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
  ];

  return (
    <div className="py-[72px] sm:py-34 bg-black flex justify-center">
      <div className="container py-16">
        <h2 className="text-center md:text-5xl text-3xl font-heading font-semibold tracking-tighter">
          Works on all devices
        </h2>

        <div className="flex overflow-hidden mt-16 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-10 after:w-10 relative  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
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
