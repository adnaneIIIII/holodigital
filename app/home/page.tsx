"use client";

import CallToAction from "@/components/home/CallToAction";
import Contact from "@/components/home/contact";
import Devices from "@/components/home/devices";
import PricingCard from "@/components/home/pricing-chef-copy";
import Faq from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/hero";
import LogoTicker from "@/components/home/LogoTicker";
import Navbar from "@/components/home/navbar";
import ProductShow from "@/components/home/ProductShow";
import React, { useEffect, useState } from "react";
import { bannerSection } from "@/services";

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

export default function Page() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = (await bannerSection()) as GetProductResponse;
    setProduct(res.product);
    console.log(res.product);
  };

  return (
    <>
      {/* <Banner /> */}
      <Navbar />
      <HeroSection />
      <LogoTicker />
      <Features />
      <ProductShow />
      <PricingCard {...product} />

      {/* <Pricing product={product} /> */}
      <Devices />
      <Contact />
      <Faq />
      <CallToAction />
      <Footer />
    </>
  );
}
