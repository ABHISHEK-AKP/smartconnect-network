export default function Hero() {
    return (
      <section
        className="bg-cover backdrop-blur-md  bg-white/30 bg-center h-[85vh] flex items-center text-white"
        style={{ backgroundImage: "url('/cctv-wall.png')" }}
      >
        <div className="absolute inset-0 bg-white/30 dark:bg-black/30 z-0"></div>
        <div className="max-w-4xl px-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-xl text-black dark:text-white">
            One of the Leading Security Camera Installation Across Canada!
          </h1>
          <p className="mb-6 text-lg text-black font-medium dark:text-white">
            Reliable CCTV Camera Installation Services in Brampton and Surrounding Areas
          </p>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition  text-black dark:text-white font-medium">
            Get a Free Quote
          </button>
        </div>
      </section>
    );
  }
  