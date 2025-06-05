"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoTicker() {
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

  return (
    <div className="py-[72px] sm:py-24 bg-black flex justify-center">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>

        <div className="flex overflow-hidden mt-10 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-10 after:w-10 relative  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
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
