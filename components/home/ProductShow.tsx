"use client";
import Screen from "@/public/assets/holo-screen.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
export default function ProductShow() {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black bg-gradient-to-t from-black to-[#f86506] py-[72px] sm:py-24 flex justify-center">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 sm:max-w-[648px] mx-auto text-xl text-white/70">
            Unlimited Entertainment at Your Fingertips Discover the <br />{" "}
            ultimate streaming experience
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={Screen}
            alt="screen"
            className="mt-14 mx-auto rounded-2xl"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
}
