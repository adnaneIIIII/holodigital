"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { getSingleProduct } from "@/services";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { createorder } from "@/app/action";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Purchase } from "@/lib/ZodSchema";
import Header from "@/components/checkout/header";
import Link from "next/link";
import Head from "next/head";

// Replace this with your actual GraphQL endpoint schema for enums

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

  const [lastResult, action] = useFormState(createorder, undefined);
  const [from, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: Purchase });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [formData, setFormData] = useState({
    Firstname: "",
    email: "",
    phone: "",
    country: "",
    lastname: "",
    state: "",
    zipCode: "",
    termsAccepted: false,
  });

  const [formErrors, setFormErrors] = useState({
    Firstname: false,
    email: false,
    phone: false,
    country: false,
    lastname: false,
    termsAccepted: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
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

  return (
    <>
      <Head>
        <title>Best IPTV Service - High-Quality Streaming</title>
      </Head>
      {/* Header */}
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

                <form id={from.id} onSubmit={from.onSubmit} action={action}>
                 
                  <div>
                    <Input
                      type="hidden"
                      key={fields.price.key}
                      name={fields.price.name}
                      defaultValue={fields.price.initialValue}
                      value={product[0]?.price}
                    />

                    <Input
                      type="hidden"
                      key={fields.productname.key}
                      name={fields.productname.name}
                      defaultValue={fields.productname.initialValue}
                      value={product[0]?.name}
                    />
                  </div>
                  <div className="space-y-4">
                    <div className=" md:flex md:items-center gap-6 ">
                      <div className=" md:w-[50%] ">
                        <Label className="text-gray-900">FirstName</Label>
                        <Input
                          type="text"
                          placeholder="firstName"
                          key={fields.firstname.key}
                          name={fields.firstname.name}
                          defaultValue={fields.firstname.initialValue}
                          onChange={handleInputChange}
                          className={`mt-1 text-gray-900 block w-full m-2 rounded-md shadow-sm py-2 px-3 ${
                            formErrors.Firstname
                              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          }`}
                        />
                        {formErrors.Firstname && (
                          <p className="mt-1 text-sm text-red-600">
                            Valid email is required
                          </p>
                        )}
                      </div>
                      <div className=" md:w-[50%] gap-3 ">
                        <Label className="text-gray-900">LastName</Label>
                        <Input
                          type="text"
                          placeholder="Last Name"
                          key={fields.lastname.key}
                          name={fields.lastname.name}
                          defaultValue={fields.lastname.initialValue}
                          onChange={handleInputChange}
                          className={`mt-1 text-gray-900 block w-full m-2 rounded-md shadow-sm py-2 px-3 ${
                            formErrors.lastname
                              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          }`}
                        />
                        {formErrors.Firstname && (
                          <p className="mt-1 text-sm text-red-600">
                            Valid email is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-900">Email</Label>
                      <Input
                        type="email"
                        key={fields.email.key}
                        name={fields.email.name}
                        defaultValue={fields.email.initialValue}
                        onChange={handleInputChange}
                        className={`mt-1 text-gray-900 block w-full rounded-md shadow-sm py-2 px-3 ${
                          formErrors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="john.doe@example.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          Valid email is required
                        </p>
                      )}
                    </div>

                    <div>
                      <Label className="text-gray-900">Phone</Label>
                      <Input
                        type="phone"
                        key={fields.phone.key}
                        name={fields.phone.name}
                        defaultValue={fields.phone.initialValue}
                        onChange={handleInputChange}
                        className={`flex-1 text-gray-900 block w-full rounded-none rounded-r-md py-2 px-3 ${
                          formErrors.phone
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        }`}
                        placeholder="(555) 123-4567"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          Phone number is required
                        </p>
                      )}
                    </div>

                    <div>
                      <Label className="text-gray-900">Country</Label>
                      <Select
                        key={fields.country.key}
                        name={fields.country.name}
                        defaultValue={fields.country.initialValue}
                      >
                        <SelectTrigger id="country" className={"text-gray-900"}>
                          <SelectValue
                            placeholder="Choose..."
                            className={"text-gray-900"}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United_States">
                            United States
                          </SelectItem>
                          <SelectItem value="United_Kingdom">
                            United Kingdom
                          </SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                          <SelectItem value="Philippines">
                            Philippines
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {formErrors.country && (
                        <p className="mt-1 text-sm text-red-600">
                          Country is required
                        </p>
                      )}
                    </div>

                    <div className="mt-6">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="termsAccepted"
                            name="termsAccepted"
                            type="checkbox"
                            checked={formData.termsAccepted}
                            onChange={handleInputChange}
                            className={`h-4 w-4 rounded ${
                              formErrors.termsAccepted
                                ? "border-red-300 text-red-600 focus:ring-red-500"
                                : "border-gray-300 text-blue-600 focus:ring-blue-500"
                            }`}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="termsAccepted"
                            className={`font-medium text-gray-900 ${
                              formErrors.termsAccepted
                                ? "text-red-700"
                                : "text-gray-300"
                            }`}
                          >
                            I have read and agree to the Terms and Conditions{" "}
                            <span className="text-red-500">*</span>
                          </label>
                        </div>
                      </div>
                      {formErrors.termsAccepted && (
                        <p className="mt-1 text-sm text-red-600">
                          You must accept the terms and conditions
                        </p>
                      )}
                    </div>

                    <div className="flex justify-start gap-3 mt-4">
                      <Button className="w-full py-6 bg-gradient-to-r from-orange-600 to-red-600 border-orange-500 text-white" asChild>
                        <Link href={`/pay/${params?.id}`}>Buy Now</Link>
                      </Button>
                    </div>
                  </div>
                </form>
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
