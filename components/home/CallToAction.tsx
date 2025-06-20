import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <div className=" py-[72px] sm:py-24 flex justify-center">
      <div className="container max-w-xl relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get instant access
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Be the first to know Get the latest releases and best deals
            delivered to your inbox{" "}
          </p>
        </div>

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
