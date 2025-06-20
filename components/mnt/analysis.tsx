import {
  Download,
  DownloadIcon,
  FilterIcon,
  Play,
  Settings,
  TrendingUpIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { MagicCard } from "./ui/magic-card";
import Container from "./global/container";
import { cn } from "@/lib/utils";

const Analysis = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl space-y-6 text-center my-20">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            How It Works
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>

          <p>
            Get started with MNTDIGITAL IPTV in just 3 simple steps. Setup takes
            less than 5 minutes!
          </p>
        </div>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-center text-center justify-center">
        <Container delay={0.2}>
          <div className="rounded-2xl bg-background/40 relative border border-border/50">
            <MagicCard
              gradientFrom="#f88538"
              gradientTo="#f6863b"
              gradientColor="rgba(246, 143, 59, 0.1)"
              className="p-4 lg:p-8 w-full overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 bg-orange-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
              <div className="space-y-4 flex">
                <div
                  className={cn(
                    " z-20 size-16 p-3 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:scale-110"
                  )}
                >
                  <Download className={cn("size-auto text-foreground")} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Audience Metrics</h3>
                </div>
              </div>
              <p className="text-sm text-left max-w-sm text-muted-foreground">
                Choose your plan and receive login credentials via email.
                Download the IPTV app for your device.
              </p>
            </MagicCard>
          </div>
        </Container>

        <Container delay={0.2}>
          <div className="rounded-2xl bg-background/40 relative border border-border/50">
            <MagicCard
              gradientFrom="#f88538"
              gradientTo="#f6863b"
              gradientColor="rgba(246, 143, 59, 0.1)"
              className="p-4 lg:p-8 w-full overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 bg-orange-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
              <div className="space-y-4 flex">
                <div
                  className={cn(
                    " z-20 size-16 p-3 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:scale-110"
                  )}
                >
                  <Settings className={cn("size-auto text-foreground")} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">2. Easy Setup</h3>
                </div>
              </div>
              <p className="text-sm text-left max-w-sm text-muted-foreground">
                Enter your login details in the app. Our step-by-step guide
                makes setup quick and simple.
              </p>
            </MagicCard>
          </div>
        </Container>

        <Container delay={0.2}>
          <div className="rounded-2xl bg-background/40 relative border border-border/50">
            <MagicCard
              gradientFrom="#f88538"
              gradientTo="#f6863b"
              gradientColor="rgba(246, 143, 59, 0.1)"
              className="p-4 lg:p-8 w-full overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 bg-orange-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
              <div className="space-y-4 flex">
                <div
                  className={cn(
                    " z-20 size-16 p-3 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:scale-110"
                  )}
                >
                  <Play className={cn("size-auto text-foreground")} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">3. Start Streaming</h3>
                </div>
              </div>
              <p className="text-sm text-left max-w-sm text-muted-foreground">
                Enjoy 23,000+ channels, movies, and series in 4K/8K quality on
                any device, anywhere.
              </p>
            </MagicCard>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Analysis;
