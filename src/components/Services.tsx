import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mt-2">
         
          {/* Our Services section */}
          <div className="bg-white dark:bg-black py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-4">OUR SERVICES</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-500 leading-tight mb-8">
                  Security CCTV Camera Installation Services
                </h2>
                <div className="max-w-5xl mx-auto text-gray-400 leading-relaxed text-center">
                  <p>
                    We specialize in a comprehensive range of security solutions to meet your needs. Our expert services encompass everything from 
                    precision <span className="font-semibold">CCTV camera installation</span>. State-of-the-art <span className="font-semibold">Access control systems</span> to cutting-edge <span className="font-semibold">Door operator installations</span>. 
                    Advanced <span className="font-semibold">24/7 Live Monitoring System</span>, and <span className="font-semibold">Networking and cabling installations</span>. Not only setting up your security camera 
                    system installation in Calgary but surrounding areas too. Also ensuring reliability with our <span className="font-semibold">Repair and Maintenance services</span>. Our 
                    commitment to excellence ensures that your safety and security are our top priorities. Discover the peace of mind that comes with 
                    our professional security camera installation services.
                  </p>
                </div>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {/* CCTV Camera Installation */}
                <div className="bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg shadow-gray-600 transition-shadow">
                  <div className="aspect-w-16 aspect-h-10 bg-gray-200 h-47">
                    <Image
                                src="/camera.jpg" 
                                alt="Security camera on brick wall"
                                width={300}
                                height={400}
                                className="object-cover w-full h-full"
                              />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-500 mb-3">CCTV Camera Installation</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      Professional CCTV Camera Installation for seamless surveillance, enhancing security and experience Security Excellence with Link Secure.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Learn more</a>
                  </div>
                </div>

                {/* Door Operator Installation */}
                <div className="bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg shadow-gray-600 transition-shadow">
                  <div className="aspect-w-16 aspect-h-10 h-47">
                  <Image
                                src="/camera.jpg" 
                                alt="Security camera on brick wall"
                                width={300}
                                height={400}
                                className="object-cover w-full h-full"
                              />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-500 mb-3">Door Operator Installation</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      Seamless door operator installation for enhanced security and convenience – We secure your entrances with precision.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Learn more</a>
                  </div>
                </div>

                {/* Access Control System */}
                <div className="bg-gray-200 dark:bg-gray-900  rounded-lg overflow-hidden shadow-md shadow-gray-600 hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-10 bg-gray-200 h-47">
                  <Image
                                src="/camera.jpg" 
                                alt="Security camera on brick wall"
                                width={300}
                                height={400}
                                className="object-cover w-full h-full"
                              />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-500 mb-3">Access Control System</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      Efficient access control systems for advanced security management, granting you control and a sense of security at every entry.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )}