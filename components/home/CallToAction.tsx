import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <div className="bg-black py-[72px] sm:py-24 flex justify-center">
      <div className="container max-w-xl relative">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-center mt-5 text-xl text-white/70">
          Be the first to know Get the latest releases and best deals delivered
          to your inbox
        </p>
        <form className="mt-10 flex  gap-2.5 max-w-sm mx-auto sm:flex-row items-center ">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium  placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <Button className="py-5 px-5 ">Get access</Button>
        </form>
      </div>
    </div>
  );
}
