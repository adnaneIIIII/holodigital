"use Client";
import PlusIcone from "@/public/icon/plus.svg";
import MinusIcon from "@/public/icon/minus.svg";
import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const items = [
  {
    question: "What is IPTV?",
    answer:
      "IPTV (Internet Protocol Television) is a digital television broadcasting protocol that delivers TV content over the internet instead of traditional cable or satellite. It allows you to stream live TV channels, movies, and series on any internet-connected device.",
  },
  {
    question: "How many channels do you offer?",
    answer:
      "We offer over 23,000 live channels from around the world, including sports, news, entertainment, movies, and international channels from USA, Canada, UK, Mexico, and many other countries.",
  },
  {
    question: "What devices are supported?",
    answer:
      "Our IPTV service works on all major devices including Smart TVs (Samsung, LG, Sony), Android TV boxes, Amazon Fire Stick, Apple TV, smartphones, tablets, computers, and more.",
  },
  {
    question: "What does the package include?",
    answer:
      "When you subscribe to HOLOIPTV, you get login credentials to IPTV server with instructions for how to setup it on your device.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 24-hour free trial so you can test our service quality and channel selection before committing to a subscription.",
  },
  {
    question: "How do I set up the service?",
    answer:
      "Setup is simple! After purchase, you'll receive login credentials and setup instructions via email or WhatsApp. Most devices can be configured in under 5 minutes using our step-by-step guides.",
  },
  {
    question: "What if I experience buffering?",
    answer:
      "Our anti-freeze system minimizes buffering. If you experience issues, check your internet connection or contact our support team for assistance.",
  },
  {
    question: "Can I use the service on multiple devices?",
    answer:
      "Each line has only one connection, you can use only one device at a time, multiple IPs is ok. If you want to use your Tv when you are at home and your phone when you are outside it is ok, just remind you do not use 2 devices at the same time, your account may get blocked if you do it. There is no multiple room subscription if you want to use 2 devices at the same time u should buy the second line.",
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
    <div className=" px-4 py-[72px] sm:py-24 flex justify-center">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FAQ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            frequently asked questions
          </p>
        </div>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordianItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
}
