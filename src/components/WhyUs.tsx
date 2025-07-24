import { Phone } from "lucide-react";
import Link from "next/link";

export default function WhyUs() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="items-center">
          {/* Why Choose Us Section */}
          <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div>
                  <p className="text-gray-600 text-sm font-medium tracking-wider uppercase mb-4">WHY CHOOSE US</p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                    Reasons to Choose Link Secure for professional security camera installation
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                    <p>
                      Link Secure is your local, <span className="font-semibold">licensed</span>, and trusted <span className="font-semibold">security 
                      camera system installation</span> expert. With a proven track 
                      record in Brampton and nearby areas. We prioritize <span className="font-semibold">safety, 
                      quality, security</span> and tailored solutions. Our <span className="font-semibold">fully licensed 
                      and insured</span> team delivers peace of mind. With every 
                      installation, repair, and <span className="font-semibold">maintenance service</span>. We ensure 
                      thorough inspections and quality results, every time. We offer 
                      affordable yet top-quality <span className="font-semibold">Security system installation</span> 
                      services. Ensuring your peace of mind without breaking the 
                      bank. We prioritize delivering excellence in securing your 
                      property.
                    </p>
                  </div>

                  {/* Feature list */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">Licensed and Insured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">Experienced</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">Professional Team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">Affordable</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">Secure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">24/7 Live Monitoring</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 flex items-center gap-2">
                    Get a Free Quote
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Right content - Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Industrial facility image placeholder */}
                    <div className="bg-gradient-to-br from-blue-800 via-blue-600 to-yellow-400 rounded-2xl h-64 p-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      {/* Industrial structures */}
                      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-800 to-gray-600 rounded-b-2xl"></div>
                      <div className="absolute bottom-16 left-4 w-8 h-16 bg-gray-700 rounded-t"></div>
                      <div className="absolute bottom-16 right-8 w-6 h-20 bg-gray-600 rounded-t"></div>
                      <div className="absolute bottom-16 right-16 w-4 h-12 bg-gray-500 rounded-t"></div>
                      {/* Stairs/walkway */}
                      <div className="absolute bottom-8 right-4 w-16 h-2 bg-yellow-400 transform rotate-12"></div>
                    </div>
                    
                    {/* Technician working image placeholder */}
                    <div className="bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl h-64 p-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      {/* Simulated workshop/industrial setting */}
                      <div className="absolute top-4 left-4 w-12 h-8 bg-blue-500 rounded"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full"></div>
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-blue-600 rounded-t-full">
                        {/* Technician figure */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-200 rounded-full"></div>
                      </div>
                      {/* Equipment/tools */}
                      <div className="absolute bottom-8 left-8 w-6 h-6 bg-gray-600 rounded"></div>
                      <div className="absolute bottom-8 right-8 w-4 h-8 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )}