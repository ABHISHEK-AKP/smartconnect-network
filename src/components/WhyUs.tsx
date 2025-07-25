import { ShieldCheck, Award, Users, DollarSign, Lock, Eye, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Why Choose Smart Connect Network
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            The Smart Choice for Security & Connectivity
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base sm:text-lg px-4">
            Professional security solutions tailored for your peace of mind. Here is why we are the most trusted choice across Canada.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Section */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
              <p className="text-sm sm:text-base">
                We deliver more than just security cameras. Our services include
                <span className="font-semibold text-gray-900"> advanced CCTV installation, sound systems, and smart networking solutions</span>. 
                With a proven track record, we guarantee top-quality products, expert installation, and unmatched customer support.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: ShieldCheck, text: "Licensed & Insured" },
                { icon: Users, text: "Experienced Team" },
                { icon: Award, text: "Top-Quality Service" },
                { icon: DollarSign, text: "Affordable Pricing" },
                { icon: Lock, text: "Advanced Security" },
                { icon: Eye, text: "24/7 Monitoring" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white shadow-md rounded-xl p-3 hover:shadow-xl transition-shadow duration-300 w-full"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Get a Free Quote
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            {/* Background Gradient */}
            <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 -z-10"></div>

            {/* Main Video (Bigger) */}
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              <video
                src="/SCN/IMG_3410.MOV"
                width={320}
                height={300} 
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-[320px] h-[300px] sm:w-[420px] sm:h-[400px] rounded-3xl"
              />
            </div>

            {/* Second Image (Smaller & Staggered) */}
            <div className="hidden lg:block absolute bottom-[-30px] right-[-30px] sm:bottom-[-50px] sm:right-[-50px] rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border-4 border-white">
              <Image
                src="/CCTV-camera.jpg"
                alt="Technician Working"
                width={200}  
                height={180}
                className="object-cover w-[200px] h-[180px] sm:w-[260px] sm:h-[220px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}