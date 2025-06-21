"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoTicker() {
  const image = [
    "8.jpg",
    "q.jpg",
    "r.jpg",
    "k.jpeg",
    "e.jpg",
    "f.jpg",
    "2.jpg",
    "t.jpg",
    "u.jpg",
    "3.jpg",
    "y.jpg",
    "7.jpg",
    "1.jpg",
    "5.jpeg",
    "6.jpg",
    "4.jpg",
    "a.jpg",
    "9.jpg",
    "10.jpg",
  ];

  return (
    <div className="py-[72px] sm:py-24  mb-16 flex justify-center">
      <div className="container">
      <div className="mx-auto max-w-2xl space-y-6 text-center my-20">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Everything you need
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>

          <p>
           All the latest Movies TV Shows and sports events 
          </p>
        </div>
        

        <div className="flex overflow-hidden mt-10 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-10 after:w-10 relative  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#0a0a0a,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#0a0a0a,rgb(0,0,0,0))]">
          <motion.div
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none gap-16 pr-16"
          >
            {image.map((item) => (
              <Image
                className="flex-none h-96 w-auto "
                src={`/assets/` + item}
                alt="Nvidia Logo"
                height={800}
                width={150}
                key={item}
              />
            ))}
            {image.map((item) => (
              <Image
                className="flex-none h-96 w-auto "
                src={`/assets/` + item}
                alt="Nvidia Logo"
                height={800}
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
