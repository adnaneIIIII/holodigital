"use client";

import { useState } from "react";
import { CartItem, ShippingMethod } from "@/lib/types";
import Header from "@/components/checkout/header";
import { sampleCartItems } from "@/lib/sample-data";
import { Check, Shield, Store, Truck, Zap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useFormState } from "react-dom";
import { createorder } from "@/app/action";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Purchase } from "@/lib/ZodSchema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Checkout() {
  // ================

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
      <Header />

      <div className="min-h-screen bg-gray-50 ">
        <div className="text-5xl font-bold text-black/80 py-14 text-center bg-gray-50 tracking-wider">
          CheckOut
        </div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-slate-100 items-center flex rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className=" rounded-lg shadow-sm p-6 transition-all">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                  Details
                </h1>

                <form id={from.id} onSubmit={from.onSubmit} action={action}>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Device Information
                  </h2>

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
                      <Button className="w-full py-6 bg-gradient-to-r from-orange-600 to-red-600 border-orange-500 text-white">
                        <Link href={"/admin/products"}>Buy Now</Link>
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

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

                {/* Secure Payment */}
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Shield className="w-6 h-6 text-green-400" />
                      <h3 className="text-white text-lg font-semibold">
                        Secure Payment
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Your payment information is encrypted and secure. We
                      accept all major payment methods.
                    </p>
                  </CardContent>
                </Card>

                {/* Special Offer */}
                <Card className="bg-gradient-to-r from-orange-600 to-red-600 border-orange-500">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold">
                        Special Offer: 10% off on second subscription!
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
