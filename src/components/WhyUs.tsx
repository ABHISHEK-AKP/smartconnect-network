import {
  ShieldCheck,
  Award,
  Users,
  DollarSign,
  Lock,
  Eye,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="bg-gradient-to-br dark:from-black dark:via-gray-800 dark:to-black from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-[#002ECC] text-sm font-semibold uppercase tracking-widest mb-2">
            Why Smart Connect Network is the Right Choice
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-400 leading-snug">
            The Smart Choice for Security & Connectivity
          </h2>
          <p className="text-gray-600 dark:text-grey-500 mt-4 max-w-3xl mx-auto text-base sm:text-lg px-4">
            <span className="font-serif italic font-bold text-red-700 text-lg sm:text-xl">
            Your safety is our priority
            </span> {" "}
             — discover why Canadians trust us for reliable, customized security solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Text Section */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
              <p className="text-sm sm:text-base">
                We deliver more than just security cameras. Our services include
                <span className="font-semibold text-gray-900 dark:text-gray-400">
                  {" "}
                  advanced CCTV installation, sound systems, and smart
                  networking solutions
                </span>
                . With a proven track record, we guarantee top-quality products,
                expert installation, and unmatched customer support.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pb-6">
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
                  className="flex items-center gap-3 bg-white dark:bg-gray-900 shadow-md rounded-xl p-3 hover:shadow-xl transition-shadow duration-300 w-full dark:shadow-blue-900"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#002ECC] flex-shrink-0" />
                  <span className="text-gray-800  dark:text-gray-400 font-medium text-sm sm:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="#contact"
              className="inline-flex items-center gap-3 mt-8 bg-[#002ECC] hover:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
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
          <div className="order-1 lg:order-2 flex flex-col sm:flex-row items-center justify-center gap-6 p-4">
            {/* First Image */}
            <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/cctv-installation.jpg"
                alt="Technician installing a security camera system"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>

            {/* Second Image */}
            <div className="relative w-full max-w-[280px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 -mt-16 sm:mt-0 sm:-ml-12 md:-ml-20">
              <Image
                src="/CCTV-camera.jpg"
                alt="Security camera live view on a mobile device"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 30vw, 20vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
