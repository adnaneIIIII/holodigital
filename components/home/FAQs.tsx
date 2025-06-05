"use Client";
import PlusIcone from "@/public/icon/plus.svg";
import MinusIcon from "@/public/icon/minus.svg";
import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const items = [
  {
    question: "What do we offer",
    answer:
      "Our company provides TV subscription services straight to your device through the internet. This includes Smart TV Samsung & LG, PC, Mac, Apple iPhone, iPad, Apple TV 4 & 5, Amazon Firestick, IPTV box, Android phones, and tablets, Android box, MAG, STB Emulator.We give customers direct exclusive access to +120000 4K/Ultra HD channels, ranging from sports, movies and popular TV shows to netflix, amazon prime and Disney+",
  },
  {
    question: "What does the package include?",
    answer:
      "When you subscribe to HOLOIPTV, you get login credentials to IPTV server with instructions for how to setup it on your device.",
  },
  {
    question: "What devices do you support?",
    answer:
      "We support all the IPTV boxes and android devices, Including MAG boxes and Formuler.",
  },
  {
    question: "Can I use 2 devices at the same time?",
    answer:
      "Each line has only one connection, you can use only one device at a time, multiple IPs is ok. If you want to use your Tv when you are at home and your phone when you are outside it is ok, just remind you do not use 2 devices at the same time, your account may get blocked if you do it. There is no multiple room subscription if you want to use 2 devices at the same time u should buy the second line.",
  },
  {
    question: "How many devices can I use with 1 account?",
    answer:
      "Using MAG or STB: Can not connect 2 MAC addresses to the same account. Using M3u files: You can use one m3u file for multiple devices, but only one device at a time.",
  },
];

const AccordianItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!IsOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-xl font-bold ">{question}</span>
        {IsOpen ? <MinusIcon /> : <PlusIcone />}
      </div>
      <AnimatePresence>
        {IsOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default function Faq() {
  return (
    <div className="bg-black  py-[72px] sm:py-24 flex justify-center">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Frequently asked question
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordianItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
}
