export default function Banner() {
  return (
    <div className="py-2 text-center bg-white/70 ">
      <div className="container text-black/80 flex justify-between " >
        <p>contact@holoiptv.com</p>
        <p className="font-medium">
          <span className="hidden sm:inline">We offer 24h </span>
          <a href="#contact" className="  underline underline-offset-4 font-medium">
             Free trial.
          </a>
        </p>
        <p>+17822221472</p>
      </div>
    </div>
  );
}
