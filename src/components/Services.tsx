import { Phone } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mt-16">
         
          {/* Our Services section */}
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-gray-600 text-sm font-medium tracking-wider uppercase mb-4">OUR SERVICES</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  Security CCTV Camera Installation Services
                </h2>
                <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-center">
                  <p>
                    We specialize in a comprehensive range of security solutions to meet your needs. Our expert services encompass everything from 
                    precision <span className="font-semibold">CCTV camera installation</span>. State-of-the-art <span className="font-semibold">Access control systems</span> to cutting-edge <span className="font-semibold">Door operator installations</span>. 
                    Advanced <span className="font-semibold">24/7 Live Monitoring System</span>, and <span className="font-semibold">Networking and cabling installations</span>. Not only setting up your security camera 
                    system installation in Brampton but surrounding areas too. Also ensuring reliability with our <span className="font-semibold">Repair and Maintenance services</span>. Our 
                    commitment to excellence ensures that your safety and security are our top priorities. Discover the peace of mind that comes with 
                    our professional security camera installation services.
                  </p>
                </div>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {/* CCTV Camera Installation */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
                      {/* Simulated dome camera in ceiling/wall setting */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-gray-600 rounded"></div>
                      <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">CCTV Camera Installation</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Professional CCTV Camera Installation for seamless surveillance, enhancing security and experience Security Excellence with Link Secure.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Learn more</a>
                  </div>
                </div>

                {/* Door Operator Installation */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative p-4">
                      {/* Simulated door access panel */}
                      <div className="bg-white rounded-lg p-4 shadow-lg w-32 h-32 flex flex-col items-center justify-center">
                        <div className="bg-green-500 rounded p-2 mb-2 text-white text-xs font-bold">PUSH TO OPEN</div>
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xs mt-1 text-gray-600">♿</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Door Operator Installation</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Seamless door operator installation for enhanced security and convenience – We secure your entrances with precision.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Learn more</a>
                  </div>
                </div>

                {/* Access Control System */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative p-4">
                      {/* Simulated access control panel */}
                      <div className="bg-gray-800 rounded-lg p-4 w-32 h-36 flex flex-col items-center justify-center">
                        <div className="bg-blue-400 rounded mb-2 w-20 h-8 flex items-center justify-center text-xs text-white">SCREEN</div>
                        <div className="grid grid-cols-3 gap-1 mb-2">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-4 h-4 bg-gray-600 rounded-sm flex items-center justify-center text-xs text-white">
                              {i + 1}
                            </div>
                          ))}
                        </div>
                        <div className="w-16 h-4 bg-gray-600 rounded"></div>
                      </div>
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">INTERCOM</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Access Control System</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
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