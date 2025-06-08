"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Check, CheckCircle, Lock } from "lucide-react";
import React, { useEffect, useState } from "react";
import Header from "@/components/checkout/header";
import { getSingleProduct } from "@/services";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
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
    image: { url: string }[];
  };
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = (await getSingleProduct(params.id)) as Product[];
    setProduct(res);
    console.log(res);
  };

  const features = [
    "23,000+ Live Channels",
    "125,000+ Movies",
    "37,000+ Series",
    "4K/FHD/HD Quality",
    "99.9% Uptime",
    "24/7 Support",
    "All Devices Supported",
    "Anti-Freeze System",
    "Free Updates",
  ];

  const handlePaypalApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      console.log("Transaction completed by " + details.payer.name.given_name);
      // You can add your logic here after successful payment
    });
  };

  const createPaypalOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: product[0]?.price.toString() || "0",
            currency_code: "USD",
          },
        },
      ],
    });
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 ">
        <div className="text-5xl font-bold  text-center bg-gray-50 tracking-wider">
          CheckOut
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-slate-100 items-center flex rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className=" rounded-lg shadow-sm p-6 transition-all">
                <div className="text-5xl font-bold text-black/80 py-14  tracking-wider">
                  CheckOut
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                  Details
                </h1>
                <div className="paypal">
                  <PayPalScriptProvider
                    options={{
                      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
                      components: "buttons",
                      intent: "capture",

                      //   disableFunding: "card",
                    }}
                  >
                    <PayPalButtons
                      createOrder={createPaypalOrder}
                      onApprove={handlePaypalApprove}
                      style={{ layout: "vertical" }}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <Card className="mb-2">
                <CardContent className="pt-4">
                  <h2 className="mb-4 text-xl font-semibold text-white">
                    Order Summary
                  </h2>
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      {/* What You Get */}
                      <Card className="bg-slate-800 border-gray-600">
                        <CardContent className="p-6">
                          <h3 className="text-white text-xl font-bold mb-4">
                            What You Get
                          </h3>
                          <div className="space-y-3">
                            {features.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-3"
                              >
                                <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      <div className="space-y-4">
                        {/* Product preview */}
                        <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-800">
                            <Image
                              src={product[0]?.image[0]?.url}
                              alt={product[0]?.name}
                              width={80}
                              height={80}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-sm font-medium text-white">
                              {product[0]?.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-400">
                              Modern Design
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-white">
                              ${product[0]?.price}
                            </p>
                          </div>
                        </div>
                        <div className="mt-6 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Subtotal</span>
                            <span className="font-medium text-white">
                              ${product[0]?.price}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Compare Price</span>
                            <span className="font-medium text-red-400 line-through">
                              ${product[0]?.compareAtPrice}
                            </span>
                          </div>
                          <div className="flex justify-between border-t border-gray-800 pt-2 mt-2">
                            <span className="font-medium text-white">
                              Total
                            </span>
                            <span className="font-bold text-white">
                              ${product[0]?.price}
                            </span>
                          </div>
                        </div>

                        {/* <div className="flex justify-start gap-3 mt-4">
                      <Button>
                        <Link href={"/admin/products"}>Buy Now</Link>
                      </Button>
                    </div> */}

                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                          <Lock className="h-4 w-4" />
                          <span>Secure Checkout - SSL Encrypted</span>
                        </div>
                        <p className="text-xs text-gray-500 text-center">
                          Ensuring your financial and personal details are
                          secure during every transaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
