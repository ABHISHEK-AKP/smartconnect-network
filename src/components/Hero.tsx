export default function Hero() {
  return (
    <section
      className="relative bg-cover backdrop-blur-md aspect-[16/9] w-full bg-white/30 bg-center flex items-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/cctv-wall.png')" }}
    >
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 z-0"></div>
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 z-10">
        <h1 className="text-xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-xl text-black dark:text-white">
          One of Canada&apos;s Leading Security Camera & Network Installation Experts
        </h1>
        <p className="mb-6 text-base sm:text-lg text-black font-medium dark:text-white">
          Reliable CCTV, Networking & Sound Solutions for Homes and Businesses
        </p>
        <button className="border border-white px-4 sm:px-6 py-2 rounded-full hover:bg-white hover:text-[#002ECC] transition text-black dark:text-white font-medium">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
}