export default function Hero() {
    return (
      <section
        className="bg-cover bg-center h-[85vh] flex items-center text-white"
        style={{ backgroundImage: "url('/cctv-wall.jpg')" }}
      >
        <div className="max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
            One of the Leading Security Camera Installation Across Canada!
          </h1>
          <p className="mb-6 text-lg text-white/90">
            Reliable CCTV Camera Installation Services in Brampton and Surrounding Areas
          </p>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition font-medium">
            Get a Free Quote
          </button>
        </div>
      </section>
    );
  }
  