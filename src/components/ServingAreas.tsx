import { Phone } from "lucide-react";
import Link from "next/link";

export default function ServingAreas() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="items-center">
          
          
          
          {/* Areas We Serve Section */}
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-gray-600 text-sm font-medium tracking-wider uppercase mb-4">AREAS WE SERVE</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  Security Cameras Installation Service Areas
                </h2>
                <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed text-center">
                  <p>
                    Our <span className="font-semibold">Security Cameras Installation Service Areas</span> extend across Ontario. Covering key cities such as <span className="font-semibold">Toronto, Hamilton, Mississauga, 
                    Kitchener, Vaughan, and Oshawa</span>. Our comprehensive services cater to a wide range of needs. From <span className="font-semibold">home camera installation</span> in 
                    Brampton Ontario to robust <span className="font-semibold">commercial security installations</span>. As experienced <span className="font-semibold">security camera installers</span>, we bring advanced 
                    technology and affordable solutions. To ensure the safety and protection of your property. Looking for the best <span className="font-semibold">home security system 
                    in Toronto</span> to reliable <span className="font-semibold">Access Control systems in Mississauga</span>. Our dedicated team operates with a commitment to quality and 
                    excellence. Link Secure combines innovative <span className="font-semibold">CCTV installations</span> with state-of-the-art <span className="font-semibold">security camera systems</span>. To deliver 
                    unparalleled peace of mind. As your trusted security partner, we focus on providing value-driven solutions. Meeting the diverse needs 
                    of our clients across Canada.
                  </p>
                </div>
              </div>

              {/* Map Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* Toronto Map */}
                <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 bg-gradient-to-br from-red-100 via-yellow-100 to-blue-100 relative">
                    {/* Simulated map design */}
                    <div className="absolute inset-0 p-4">
                      <div className="w-full h-full relative">
                        {/* Road lines */}
                        <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-400 transform rotate-12"></div>
                        <div className="absolute top-16 left-0 w-full h-0.5 bg-gray-400 transform -rotate-6"></div>
                        <div className="absolute top-24 left-0 w-full h-0.5 bg-gray-400 transform rotate-3"></div>
                        <div className="absolute left-12 top-0 h-full w-0.5 bg-gray-400 transform rotate-12"></div>
                        <div className="absolute left-24 top-0 h-full w-0.5 bg-gray-400 transform -rotate-6"></div>
                        
                        {/* Highway markers */}
                        <div className="absolute top-4 left-8 bg-red-600 text-white text-xs px-1 py-0.5 rounded font-bold">401</div>
                        <div className="absolute top-12 right-8 bg-red-600 text-white text-xs px-1 py-0.5 rounded font-bold">DVP</div>
                        
                        {/* City label */}
                        <div className="absolute bottom-8 left-8 text-3xl font-bold text-gray-800">Toronto</div>
                        
                        {/* Red pin */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-6 h-6 bg-red-600 rounded-full shadow-lg relative">
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-4 border-transparent border-t-red-600"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kitchener Map */}
                <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 bg-gradient-to-br from-yellow-100 via-green-100 to-red-200 relative">
                    <div className="absolute inset-0 p-4">
                      <div className="w-full h-full relative">
                        {/* Road network */}
                        <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-400 transform rotate-6"></div>
                        <div className="absolute top-14 left-0 w-full h-0.5 bg-gray-400 transform -rotate-3"></div>
                        <div className="absolute top-20 left-0 w-full h-0.5 bg-gray-400 transform rotate-12"></div>
                        <div className="absolute left-16 top-0 h-full w-0.5 bg-blue-500 transform rotate-6"></div>
                        
                        {/* Highway numbers */}
                        <div className="absolute top-2 left-4 bg-blue-600 text-white text-xs px-1 py-0.5 rounded font-bold">8</div>
                        <div className="absolute top-8 right-4 bg-blue-600 text-white text-xs px-1 py-0.5 rounded font-bold">85</div>
                        <div className="absolute bottom-16 left-4 bg-green-600 text-white text-xs px-1 py-0.5 rounded font-bold">7</div>
                        
                        {/* City label */}
                        <div className="absolute bottom-8 center text-2xl font-bold text-gray-800 left-1/2 transform -translate-x-1/2">Kitchener</div>
                        
                        {/* Red pin */}
                        <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-6 h-6 bg-red-600 rounded-full shadow-lg relative">
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-4 border-transparent border-t-red-600"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hamilton Map */}
                <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 bg-gradient-to-br from-blue-100 via-yellow-100 to-green-100 relative">
                    <div className="absolute inset-0 p-4">
                      <div className="w-full h-full relative">
                        {/* Lake Ontario representation */}
                        <div className="absolute top-0 left-0 w-full h-16 bg-blue-200 rounded-b-lg opacity-60"></div>
                        
                        {/* Road lines */}
                        <div className="absolute top-20 left-0 w-full h-0.5 bg-gray-400 transform rotate-3"></div>
                        <div className="absolute top-28 left-0 w-full h-0.5 bg-gray-400 transform -rotate-6"></div>
                        <div className="absolute left-20 top-16 h-3/4 w-0.5 bg-gray-400 transform rotate-3"></div>
                        
                        {/* Highway markers */}
                        <div className="absolute top-24 left-8 bg-blue-600 text-white text-xs px-1 py-0.5 rounded font-bold">403</div>
                        <div className="absolute top-32 right-8 bg-green-600 text-white text-xs px-1 py-0.5 rounded font-bold">QEW</div>
                        
                        {/* City label */}
                        <div className="absolute bottom-8 left-8 text-2xl font-bold text-gray-800">Hamilton</div>
                        
                        {/* Red pin */}
                        <div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-6 h-6 bg-red-600 rounded-full shadow-lg relative">
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-4 border-transparent border-t-red-600"></div>
                          </div>
                        </div>
                      </div>
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