import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon, Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";
import Feature from "./home/Feature";

export default function Features() {
  interface FeatureItem {
    title: string;
    description: React.ReactNode;
    Icone: LucideIcon; // More specific type
  }
  const features: FeatureItem[] = [
    {
      title: "Customizable",
      description: (
        <>
          Extensive customization options, allowing you to tailor every aspect
          to meet your specific needs.
        </>
      ),
      Icone: Zap,
    },
    {
      title: "You have full control",
      description: (
        <>
          From design elements to functionality, you have complete control to
          create a unique and personalized experience.
        </>
      ),
      Icone: Settings2,
    },
    {
      title: "Powered By AI",
      description: (
        <>
          Elements to functionality, you have complete control to create a
          unique experience.
        </>
      ),
      Icone: Sparkles,
    },
  ];

  return (
    // <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
    //   <div className="@container mx-auto max-w-5xl px-6">
    //     <div className="text-center">
    //       <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
    //         Built to cover your needs
    //       </h2>
    //       <p className="mt-4">
    //         Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
    //         repellendus.
    //       </p>
    //     </div>
    //     <div className=" md:flex flex-col gap-8  mt-16 gap-y-4">

    <div
      className=" py-[72px] sm:py-24 flex justify-center"
      id="lFeatures"
    >
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <p className="text-center mt-5 text-xl text-white/70">
          Unlimited Entertainment at Your Fingertips Discover the <br />{" "}
          ultimate streaming experience
        </p>
        <div className="mt-16 flex flex-col sm:flex-row gap-4 max-w-6xl mx-auto ">
          {features.map(({ title, description, Icone }) => (
            <Feature
              title={title}
              description={description}
              Icone={Icone} // Pass the component, not the element
              key={title}
            />
          ))}
        </div>
      </div>
    </div>

   
  );
}



