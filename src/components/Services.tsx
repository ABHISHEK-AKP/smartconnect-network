import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-white dark:bg-black py-4 px-4 sm:px-6 lg:px-8 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Our Services section */}
        <div className="bg-white dark:bg-black py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-[#002ECC] text-sm font-bold tracking-wider uppercase mb-4">
                OUR SERVICES
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-gray-400 leading-tight mb-8">
                Security CCTV Camera Installation Services
              </h2>
              <div className="max-w-5xl font-medium mx-auto text-black dark:text-gray-500 leading-relaxed text-center px-4">
                <p>
                  From{" "}
                  <span className="font-semibold">initial consultation</span> to{" "}
                  <span className="font-semibold">
                    post-installation support
                  </span>
                  , we handle every aspect of your{" "}
                  <span className="font-semibold">security system</span> with
                  professionalism and care. Our solutions are{" "}
                  <span className="font-semibold">scalable</span>,{" "}
                  <span className="font-semibold">future-proof</span>, and built
                  for long-term{" "}
                  <span className="font-semibold">reliability</span>. We
                  specialize in{" "}
                  <span className="font-semibold">
                    IP and Analog CCTV installation
                  </span>
                  , <span className="font-semibold">video doorbells</span> and{" "}
                  <span className="font-semibold">intercom systems</span>, as
                  well as{" "}
                  <span className="font-semibold">
                    smart surveillance integration
                  </span>
                  , <span className="font-semibold">system upgrades</span>,{" "}
                  <span className="font-semibold">maintenance</span>, and{" "}
                  <span className="font-semibold">
                    access control integration
                  </span>
                  . Trust us to deliver complete and secure solutions tailored
                  to your needs.
                </p>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 p-4">
              {/* CCTV Camera Installation */}
              <div className="bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg shadow-gray-600 dark:shadow-[#002ECC] transition-shadow w-full">
                <div className="aspect-w-16 aspect-h-10 bg-gray-200 h-48 overflow-hidden">
                  <Image
                    src="/services_cctv.png"
                    alt="Security camera on brick wall"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-[#002ECC] mb-3">
                    CCTV Camera Installation
                  </h3>
                  <p className="text-black dark:text-gray-500 mb-4 leading-relaxed text-sm sm:text-base">
                    Crystal-clear footage, full coverage, and remote access to
                    keep your home or business safe 24/7. Includes indoor and
                    outdoor cameras with night vision, motion detection, and
                    mobile app alerts for real-time monitoring.
                  </p>
                  {/* <a
                    href="#"
                    className="text-[#002ECC] hover:text-blue-700 font-medium text-sm"
                  >
                    Learn more
                  </a> */}
                </div>
              </div>

              {/* Door Operator Installation */}
              <div className="bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg shadow-gray-600 dark:shadow-[#002ECC] transition-shadow w-full">
                <div className="aspect-w-16 aspect-h-10 h-48 overflow-hidden">
                  <Image
                    src="/services_network.png"
                    alt="Security camera on brick wall"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-[#002ECC] mb-3">
                    Data & Network Cabling
                  </h3>
                  <p className="text-black dark:text-gray-500 mb-4 leading-relaxed text-sm sm:text-base">
                    Structured cabling for high-speed internet, VoIP, and
                    internal networks—installed with precision. We ensure
                    seamless connectivity, minimal interference, and future
                    scalability for residential and commercial spaces.
                  </p>
                  {/* <a
                    href="#"
                    className="text-[#002ECC] hover:text-blue-700 font-medium text-sm"
                  >
                    Learn more
                  </a> */}
                </div>
              </div>

              {/* Access Control System */}
              <div className="bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md shadow-gray-600 dark:shadow-[#002ECC] hover:shadow-lg transition-shadow w-full sm:col-span-2 lg:col-span-1">
                <div className="aspect-w-16 aspect-h-10 bg-gray-200 h-48 overflow-hidden">
                  <Image
                    src="/services_access_control.png"
                    alt="Security camera on brick wall"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-[#002ECC] mb-3">
                    Access Control System
                  </h3>
                  <p className="text-black dark:text-gray-500 mb-4 leading-relaxed text-sm sm:text-base">
                    Smart locks, RFID readers, and biometric access to manage
                    who enters your property—secure and simple. Our systems
                    offer centralized control, activity logs, and integration
                    with your surveillance and alarm setup.
                  </p>
                  {/* <a
                    href="#"
                    className="text-[#002ECC] hover:text-blue-700 font-medium text-sm"
                  >
                    Learn more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
