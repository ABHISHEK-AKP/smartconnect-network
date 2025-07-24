import { Phone } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
       

          
          
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

          {/* Service Categories Section */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Residential */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Elevate your home cctv installation with Link Secure expert Residential Security System Installation services. Our team of expert delivers home security system, security camera installation and much more. Experience peace of mind in your home with our top-notch security solutions.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2 mx-auto">
                    Residential Security System
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Commercial */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our comprehensive services include CCTV System Installation, Access Control Systems, Networking & Cabling. We cater to a wide array of commercial establishments. From schools and hospitals to restaurants and offices. Ensuring robust security solutions tailored to your specific needs.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2 mx-auto">
                    Commercial Security System
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Industrial */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Industrial</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our specialized security system services cover a spectrum of industrial needs. Including Access Control Systems, Networking & Cabling, Door Operator Installation. From warehouses to manufacturing plants and more. We provide tailored security solutions to safeguard industrial facilities.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2 mx-auto">
                    Industrial Security System
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Our Working Process Section */}
          <div className="relative bg-blue-800 py-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-900"></div>
              {/* Geometric patterns */}
              <div className="absolute top-16 left-16 w-32 h-32 border border-white/20 transform rotate-45"></div>
              <div className="absolute top-32 right-32 w-24 h-24 border border-white/20 transform rotate-12"></div>
              <div className="absolute bottom-16 left-1/4 w-40 h-40 border border-white/20 transform -rotate-12"></div>
              <div className="absolute bottom-32 right-16 w-28 h-28 border border-white/20 transform rotate-45"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-blue-200 text-sm font-medium tracking-wider uppercase mb-4">HOW WE WORK</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                  Our Working Process
                </h2>
                <p className="max-w-4xl mx-auto text-blue-100 leading-relaxed text-lg">
                  Our process is straightforward. We start by providing a tailored quote after discussing your needs thoroughly. Once you're satisfied, 
                  we proceed with expert installation and ensure long-term maintenance to keep your security system at its best.
                </p>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {/* Step 1 */}
                <div className="bg-white rounded-2xl p-8 shadow-xl relative">
                  <div className="absolute -top-4 left-8 bg-gray-800 text-white px-4 py-2 rounded-lg font-bold">
                    1st
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Discussion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We begin by understanding your unique security needs and preferences, ensuring our solutions align perfectly with your requirements and budget considerations.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-gray-700 rounded-2xl p-8 shadow-xl relative text-white">
                  <div className="absolute -top-4 left-8 bg-gray-600 text-white px-4 py-2 rounded-lg font-bold">
                    2nd
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-4">Installation</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Our expert team sets up your security system with precision and care, ensuring optimal placement and functionality for maximum protection.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-gray-600 rounded-2xl p-8 shadow-xl relative text-white">
                  <div className="absolute -top-4 left-8 bg-gray-500 text-white px-4 py-2 rounded-lg font-bold">
                    3rd
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-4">Maintenance</h3>
                  <p className="text-gray-200 leading-relaxed">
                    We keep your security system running smoothly with regular check-ups and prompt support, ensuring reliable long-term performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="bg-blue-700 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
              <div className="text-white text-center sm:text-left mb-4 sm:mb-0">
                <h3 className="text-3xl lg:text-4xl font-bold">CALL US NOW !</h3>
              </div>
              <div className="text-white text-center sm:text-right space-y-1">
                <div className="text-xl lg:text-2xl font-semibold">+1 (647) 262-7460</div>
                <div className="text-xl lg:text-2xl font-semibold">+1 (647) 707-9350</div>
              </div>
            </div>
          </div>
          
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
        
        {/* Bottom section with blue background */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mt-16">
          <div className="bg-blue-700 pt-16 pb-24">
            {/* White rounded card */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left content - continuation of text */}
                  <div className="text-gray-700 leading-relaxed">
                    <p>
                      <span className="font-semibold">installation</span>, access control system and more. 
                      Customizing solutions for homes, schools, and hospitals. 
                      <span className="font-semibold">Commercial enterprises</span> benefit from our comprehensive 
                      approach. Deploying sophisticated <span className="font-semibold">security cameras and 
                      installation</span>. Tailored to the unique needs of businesses, 
                      restaurants, and offices. Link Secure extends its expertise 
                      to the <span className="font-semibold">industrial sector</span>. Securing large-scale operations 
                      with advanced <span className="font-semibold">CCTV systems</span>, robust <span className="font-semibold">Security camera 
                      solutions and mounting security cameras</span>.
                    </p>
                  </div>
                  
                  {/* Right content - Additional camera images */}
                  <div className="flex justify-center gap-6">
                    {/* PTZ Dome camera */}
                    <div className="bg-gray-100 rounded-lg p-4 w-32 h-32 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gray-800 rounded-full shadow-inner flex items-center justify-center">
                          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                          <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bullet camera */}
                    <div className="bg-gray-100 rounded-lg p-4 w-32 h-32 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-16 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 font-medium">Link Secure</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Services list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium">Best Security Camera Installer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium">24/7 Monitoring System</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium">Security System Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium">High Quality CCTV Installation</span>
                </div>
              </div>
            </div>
          </div>
          
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