import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  originalPrice?: string;
  savings?: string;
  connection: string;
  features: string[];
  isPopular?: boolean;
  buttonVariant?: "default" | "secondary";
}

interface Product {
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
}

const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    name: "1 Month Plan",
    price: "$13.99",
    period: "per month",
    connection: "1 connection",
    features: [
      "23,000+ Live Channels",
      "125,000+ Movies",
      "37,000+ Series",
      "4K/FHD/HD Quality",
      "99.9% Uptime",
      "24/7 Support",
      "All Devices",
      "Anti-Freeze System",
    ],
    buttonVariant: "secondary",
  },
  {
    id: "6-months",
    name: "6 Months Plan",
    price: "$36.99",
    period: "6 months",
    originalPrice: "$83.94",
    savings: "Save $47",
    connection: "1 connection",
    features: [
      "23,000+ Live Channels",
      "125,000+ Movies",
      "37,000+ Series",
      "4K/FHD/HD Quality",
      "99.9% Uptime",
      "24/7 Support",
      "All Devices",
      "Anti-Freeze System",
      "Free Updates",
    ],
    buttonVariant: "secondary",
  },
  {
    id: "12-months",
    name: "12 Months Plan",
    price: "$49.99",
    period: "12 months",
    originalPrice: "$167.88",
    savings: "Save $118",
    connection: "1 connection",
    features: [
      "23,000+ Live Channels",
      "125,000+ Movies",
      "37,000+ Series",
      "4K/FHD/HD Quality",
      "99.9% Uptime",
      "24/7 Support",
      "All Devices",
      "Anti-Freeze System",
      "Free Updates",
      "Priority Support",
    ],
    isPopular: true,
    buttonVariant: "default",
  },
];

// function PricingCard({ plan }: { plan: PricingPlan }) {
//   return (

//   );
// }

export default function PricingSection(props: Product[]) {
  return (
    <section className="py-16 px-4 bg-black min-h-screen" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Top Banner */}
        <div className="border-orange-500 border-2 rounded-lg p-4 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-white" />
            <span className="text-white font-semibold text-lg">
              24h Free Trial Available
            </span>
          </div>
          <p className="text-orange-100 text-sm">
            Try our service risk-free for 24 hours before committing to any plan
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index: number) => (
            <Card
              className={`relative h-full flex flex-col text-white transition-all duration-300 hover:scale-105 ${
                plan.isPopular
                  ? "ring-2 ring-orange-500 shadow-2xl shadow-orange-500/20"
                  : "hover:border-gray-600"
              }`}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-3 right-4 bg-orange-500 hover:bg-orange-600 text-white ">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">/ {plan.period}</span>
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  {plan.connection}
                </div>
                {plan.savings && (
                  <div className="flex justify-center">
                    <Badge
                      variant="secondary"
                      className="justify-center  flex w-20 bg-green-600 hover:bg-green-700 text-white"
                    >
                      {plan.savings}
                    </Badge>
                  </div>
                )}
              </CardHeader>

              <CardContent className="flex flex-col flex-grow pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Push button to bottom */}
                <div className="mt-auto pt-4">
                  <Button
                    className={`w-full ${
                      plan.isPopular
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
                    }`}
                    variant={plan.buttonVariant}
                    asChild
                  >
                    <Link href={`/checkout/${props[index]?.id}`}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
