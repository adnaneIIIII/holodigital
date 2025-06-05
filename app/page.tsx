"use client";
import Contact from "@/components/contact";
import Features from "@/components/features-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import { bannerSection } from "@/services";
import React, { useEffect, useState } from "react";

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
    const res = await bannerSection() as GetProductResponse;
    setProduct(res.product);
    console.log(res.product);
  };

  return (
    <>
      <HeroSection />
      <Features />
      <Pricing product={product} />
      <Testimonials />
      <Contact />
      <FooterSection />
    </>
  );
}
