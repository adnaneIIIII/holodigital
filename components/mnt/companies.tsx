import Container from "@/components/mnt/global/container";
import React from "react";
import Image from "next/image";

const Companies = () => {
  return (
    <div className="relative flex flex-col items-center md:px-0 px-2 justify-center w-full py-20 mt-16 companies overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h4 className="md:text-5xl text-3xl font-heading font-semibold">
            You may <span className="font-subheading font-light italic">whant to</span>{" "}
            watch
          </h4>
        </div>
      </Container>

      <Container delay={0.1}>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto pt-16 text-muted-foreground transition-all">
          <Image
            src="/chan/13.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-10 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/2.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-10 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/10.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-16 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/4.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-10 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/5.webp"
            alt="abc"
            width={1000}
            height={100}
            className="h-16 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/11.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-16 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/7.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-10 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/8.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-8 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/9.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-10 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/3.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-10 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/6.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-10 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/12.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-24 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/1.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-8 w-auto hover:text-foreground"
          />
          <Image
            src="/chan/15.png"
            alt="abc"
            width={1000}
            height={100}
            className="h-16 w-auto hover:text-foreground"
          />
        </div>
      </Container>
    </div>
  );
};

export default Companies;
