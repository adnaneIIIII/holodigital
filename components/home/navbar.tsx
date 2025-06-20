"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@/public/icon/menu.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import Head from "next/head";
import { X } from "lucide-react"; // You can also use a custom close icon

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <meta property="og:url" content="https://mntdigital.com/home" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-black border-b p-2">
        <div className="px-4">
          <div className="py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="relative">
              <div className="absolute w-full top-1 bottom-0 bg-gradient-to-r from-[#a52f0094] to-[#3d3721c5] blur-md"></div>
              <Link href={"/home"}>
                <Image
                  src={"/iptv-service.png"}
                  width={120}
                  height={100}
                  alt="IPTV service offering high-quality streaming"
                  className="h-14 w-28 relative"
                  priority={false}
                  loading="lazy"
                />
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden z-50 relative"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="text-white h-10 w-10" />
              ) : (
                <MenuIcon className="text-white h-10 w-10" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="md:flex gap-6 items-center hidden">
              <Link href="/home#lFeatures" className="hover:text-white text-sm">
                Features
              </Link>
              <Link href="/home#pricing" className="hover:text-white text-sm">
                Pricing
              </Link>
              <Link href="/how-it-work" className="hover:text-white text-sm">
                How it Work
              </Link>
              <Link href="/home#contact" className="hover:text-white text-sm">
                Contact
              </Link>
              <Button variant={"default"}>
                <Link href="/home#pricing">Get for free</Link>
              </Button>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="sm:block md:hidden px-4 pb-6">
            <ul className="flex flex-col gap-4 mt-4 text-white">
              <Link href="/home#lFeatures" onClick={() => setMobileOpen(false)}>
                Features
              </Link>
              <Link href="/home#pricing" onClick={() => setMobileOpen(false)}>
                Pricing
              </Link>
              <Link href="/how-it-work" onClick={() => setMobileOpen(false)}>
                How it Work
              </Link>
              <Link href="/home#contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
              <Button variant={"default"}>
                <Link href="/home#pricing">Get for free</Link>
              </Button>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default Navbar;
