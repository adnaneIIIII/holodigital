import Feature from "./Feature";
import { LucideIcon, Settings2, Sparkles, Zap } from "lucide-react";

interface FeatureItem {
  title: string;
  description: React.ReactNode;
  Icone: LucideIcon; // More specific type
}
const features : FeatureItem[] = [
  {
    title: "10,000+ TV Channels",
    description: (
      <>
        Experience seamless streaming of breaking global news, thrilling live
        sports events, premium entertainment, and much more—all in crystal-clear
        HD, anytime, anywhere.
      </>
    ),
    Icone: Zap,
  },
  {
    title: "100% High Resolution",
    description: (
      <>
        Immerse yourself in every breathtaking moment with stunning
        crystal-clear HD and ultra-sharp 4K quality. Feel the action come alive
        with vibrant colors, deep contrasts, and lifelike detail.
      </>
    ),
    Icone: Settings2,
  },
  {
    title: "34,000+ Movies & TV Shows",
    description: (
      <>
        Dive into an endless ocean of entertainment with our ever-expanding
        library of blockbuster movies, binge-worthy series, and exclusive
        originals.
      </>
    ),
    Icone: Sparkles,
  },
];
export default function Features() {
  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#f86506] py-[72px] sm:py-24 flex justify-center" id="lFeatures">
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
