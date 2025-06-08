import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="px-4 h-12 py-12 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={"/logo-w.png"} alt="logo" width={120} height={100} />
          </Link>
        </div>
        <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center justify-center gap-8">
            <Link href="#" className="hover:text-foreground/80 text-sm">
              Pricing
            </Link>
            <Link href="#" className="hover:text-foreground/80 text-sm">
              About
            </Link>
            <Link href="#" className="hover:text-foreground/80 text-sm">
              Features
            </Link>
            <Link href="#" className="hover:text-foreground/80 text-sm">
              Blog
            </Link>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <aside className="flex items-center gap-4">
            <div className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started
              </span>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
