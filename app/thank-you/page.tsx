import Navbar from "@/components/home/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col justify-center items-center gap-y-4">
        <h1 className="md:text-9xl text-7xl font-bold mt-24">Thank You!</h1>
        <div className="border-8 rounded-full border-orange-400 p-4 my-8">
          <Check className="w-32 h-32 font-bold text-orange-400 flex-shrink-0" />
        </div>
        <p className="text-2xl  font-bold">
          Your order has been placed successfully.
        </p>
        <p className="text-xl text-center">
          We will send you your subscription details to the email provided.
        </p>
        <Button className="bg-orange-400 mt-4 text-white font-bold py-6 px-6 rounded">
          <Link href={"/home"} className="flex items-center gap-1">
            <ArrowLeft /> <p> Back to Home</p>
          </Link>
        </Button>
      </div>
    </>
  );
}
