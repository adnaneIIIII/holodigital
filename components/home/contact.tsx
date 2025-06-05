"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "@conform-to/react";
import { useFormState } from "react-dom";
import { parseWithZod } from "@conform-to/zod";
import { contact } from "@/lib/ZodSchema";
import { ContactUs } from "@/app/action";

export default function Contact() {
  const [lastResult, action] = useFormState(ContactUs, undefined);
  const [from, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contact });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="bg-black">
      {/* Contact Section */}
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-card flex justify-center text-white"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to elevate your social media presence? Contact us today
                  to discuss how we can help your business grow.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 " />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="">
                      Bureau 9, 2ème étage, Immeuble Al Youbia, Ave Allal Ben
                      Abdellah, Fes 30000, Morocco
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 " />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="">hello@socialboost.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 " />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="">(555) 123-4567</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-zinc-800  p-6 shadow-lg">
              <form
                className="space-y-4"
                id={from.id}
                onSubmit={from.onSubmit}
                action={action}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none"
                    >
                      First name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className=" border-zinc-900 text-white "
                      key={fields.firstname.key}
                      name={fields.firstname.name}
                      defaultValue={fields.firstname.initialValue}
                    />
                    <p className="text-sm text-red-500">
                      {fields.firstname.errors}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none"
                    >
                      Last name
                    </label>
                    <Input
                      key={fields.lastname.key}
                      name={fields.lastname.name}
                      defaultValue={fields.lastname.initialValue}
                      id="last-name"
                      placeholder="Enter your last name"
                      className=" border-zinc-900 text-white "
                    />
                    <p className="text-sm text-red-500">
                      {fields.lastname.errors}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none"
                  >
                    phone
                  </label>
                  <Input
                    key={fields.phone.key}
                    name={fields.phone.name}
                    defaultValue={fields.phone.initialValue}
                    id="phone"
                    placeholder="Enter your phone"
                    type="phone"
                    className="border-zinc-900 text-white "
                  />
                  <p className="text-sm text-red-500">{fields.phone.errors}</p>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none"
                  >
                    Email
                  </label>
                  <Input
                    key={fields.email.key}
                    name={fields.email.name}
                    defaultValue={fields.email.initialValue}
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="border-zinc-900 text-white "
                  />
                  <p className="text-sm text-red-500">{fields.email.errors}</p>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none"
                  >
                    Message
                  </label>
                  <Textarea
                    key={fields.message.key}
                    name={fields.message.name}
                    defaultValue={fields.message.initialValue}
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px] border-zinc-900 text-white"
                  />
                  <p className="text-sm text-red-500">
                    {fields.message.errors}
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
