"use client";
import CallToAction from "@/components/home/CallToAction";
import Contact from "@/components/home/contact";
import Devices from "@/components/home/devices";
import PricingCard from "@/components/home/pricing-chef-copy";
import Faq from "@/components/home/FAQs";
import Footer from "@/components/home/Footer";
import LogoTicker from "@/components/home/LogoTicker";
import React, { useEffect, useState } from "react";
import { bannerSection } from "@/services";
import Hero from "@/components/mnt/hero";
import Companies from "@/components/mnt/companies";
import Analysis from "@/components/mnt/analysis";
import FancyTestimonialsSlider from "@/components/mnt/testimonials";
import { StaticImageData } from "next/image";
import BlogPost from "@/components/mnt/blog";
import Head from "next/head";
import { PostesASC } from "../action";
import Navbar from "@/components/home/navbar";

type Product = {
  compareAtPrice: number;
  description: string;
  id: string;
  isFeatured: boolean;
  name: string;
  price: number;
  publishedAt: string;
  shortdescription: string;
  status: string;
  images: { url: string }[];
};

type GetProductResponse = {
  product: Product[];
};



type BlogItem = {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
  createdAt: Date;
};

export default function Page() {
  // SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HOLOIPTV",
    url: "https://mntdigital.com",
    logo: {
      "@type": "ImageObject",
      url: "https://mntdigital.com/iptv-service.png",
    },
    sameAs: ["https://facebook.com/holoiptv", "https://instagram.com/holoiptv"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@holoiptv.com",
      telephone: "+212611223344",
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: ["English", "French", "Arabic"],
    },
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HOLOIPTV",
    url: "https://mntdigital.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mntdigital.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Testimonials

  interface Testimonial {
    img: StaticImageData | string;
    quote: string;
    name: string;
    role: string;
  }
  const testimonials: Testimonial[] = [
    {
      img: "/test1.jpeg",
      quote:
        "Thank you for sending me the subscription details so quickly. I have entered all details in IPTV Smarters and I must say how very quick the channels are opening. Only looked at a few so far.",
      name: "Sarah Johnson",
      role: "USA",
    },
    {
      img: "/test3.jpeg",
      quote:
        "I took a 12-month subscription. Been excellent. Would recommend. 👍",
      name: "Michael Chen",
      role: "USA",
    },
    {
      img: "/test2.jpeg",
      quote:
        "I took out a 6-month subscription yesterday. Been excellent so far. Very fast and faultless streams. Loads of VOD content as well.",
      name: "Jessica Martinez",
      role: "Canada",
    },
  ];

  // Products

  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = (await bannerSection()) as GetProductResponse;
    setProduct(res.product);
    console.log(res.product);
  };



  const [blogPosts, setBlogPosts] = useState<BlogItem[]>([]);

  useEffect(() => {
    const Posts_ = async () => {
      const blogp = await PostesASC();
      setBlogPosts(blogp);
    };
    Posts_();
  }, []);

  return (
    <>
      <Head>
        <title>HOLOIPTV | Premium IPTV Services with HD Quality</title>
        <meta
          name="description"
          content="Premium IPTV Services with HD Quality"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </Head>

      {/* <Banner /> */}
      <Navbar />
      {/* <Earth/> */}
      <Hero />
      {/* <Newhero/> */}
      <Companies />
      {/* <Channels/> */}
      {/* <HeroSection /> */}
      <LogoTicker />
      {/* <Features /> */}
      {/* <ProductShow /> */}
      <PricingCard {...product} />
      <Analysis />
      {/* <Pricing product={product} />*/}
      <Devices />
      <FancyTestimonialsSlider testimonials={testimonials as any} />
      <Contact />
      <BlogPost pos={blogPosts} />
      <Faq />

      {/* <LanguageSupport /> */}
      <CallToAction />
      <Footer />
    </>
  );
}
