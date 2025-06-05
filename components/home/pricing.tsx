import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing(props: any) {
  const features = [
    [
      "+10.000 TV Channels",
      "+48,000 Movies & Series",
      "4K / Ultra HD/ FHD Picture Quality",
      "99.9% Server Uptime",
      "Free Channels & VOD Updates",
      "Anti Freeze System",
      "All Devices are Supported",
      "24/7 Technical Assistance",
    ],
    [
      "+10.000 TV Channels",
      "+48,000 Movies & Series",
      "4K / Ultra HD/ FHD Picture Quality",
      "99.9% Server Uptime",
      "Free Channels & VOD Updates",
      "Anti Freeze System",
      "All Devices are Supported",
      "24/7 Technical Assistance",
    ],
    [
      "+10.000 TV Channels",
      "+48,000 Movies & Series",
      "4K / Ultra HD/ FHD Picture Quality",
      "99.9% Server Uptime",
      "Free Channels & VOD Updates",
      "Anti Freeze System",
      "All Devices are Supported",
      "24/7 Technical Assistance",
    ],
  ];
  const underprice: string[] = [
    "Per month",
    "Only $6.99 monthly",
    "Only $3.99 monthly",
  ];
  const planNames = ["Month", "6 Months", "Year"]; // Added plan names
  return (
    <section
      className="bg-black bg-gradient-to-b from-[#f86506] to-[#000] py-[72px] sm:py-24"
      id="pricing"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
            Pricing that Scales with You
          </h1>
          <p>
            Select the package that best fits your business needs and goals. All
            plans include dedicated support.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {props.product.map((item: any, index: number) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="text-center">
               
                <span className="my-3 block text-2xl font-semibold">
                  {item?.price}$/<span className="text-base">{planNames[index]}</span>
                </span>
                <CardDescription className="text-sm">
                  {underprice[index]}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <hr className="border-dashed" />

                <ul className="space-y-2">
                  {features[index].map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href={`/checkout/${item?.id}`}>Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
