import Image from "next/image";
import React from "react";
import MenuIcon from "@/public/icon/menu.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import Head from "next/head";

function Navbar() {
  return (
    <>
      <Head>
        <title>IPTV Services - Best IPTV Provider</title>
        <meta
          name="description"
          content="Looking for the best IPTV services? Explore our top-notch IPTV options to stream live TV, sports, and movies!"
        />
        <meta
          name="keywords"
          content="IPTV, IPTV services, best IPTV, IPTV provider, streaming services"
        />
        <meta
          property="og:title"
          content="IPTV Services - Best IPTV Provider"
        />
        <meta
          property="og:description"
          content="Explore top IPTV services for seamless streaming."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://holoiptv.com" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-black border-b p-2">
        <div className="px-4">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className="absolute w-full top-1 bottom-0 bg-gradient-to-r  from-[#a52f0094] to-[#3d3721c5] blur-md"></div>
              <Link href={"/home"}>
                {" "}
                <Image
                  src={"/iptv-service.png"}
                  width={120}
                  height={100}
                  alt="IPTV service offering high-quality streaming"
                  className="h-14 w-28 relative"
                />
              </Link>
            </div>
            <div className="">
              <MenuIcon className="text-white border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden" />
            </div>
            <nav className="md:flex gap-6 items-center hidden">
              <Link
                href="/home#lFeatures"
                className="text-opacity-20 hover:text-foreground/80 text-sm"
              >
                Features
              </Link>
              <Link
                href="/home#pricing"
                className="text-opacity-20 hover:text-foreground/80 text-sm"
              >
                Pricing
              </Link>
              <Link
                href="/how-it-work"
                className="hover:text-foreground/80 text-sm"
              >
                How it Work
              </Link>
              {/* <Link
              href="/home#testimonials"
              className="text-opacity-20 hover:text-foreground/80 text-sm"
            >
              Testimonials
            </Link> */}
              <Link
                href="/home#contact"
                className="text-opacity-20 hover:text-foreground/80 text-sm"
              >
                contact
              </Link>
              <Button variant={"default"}>
                <Link href="/home#pricing">Get for free</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
