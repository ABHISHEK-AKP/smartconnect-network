

export default function ServiceCategories() {
  return (
    <section className="bg-gray-50 dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="items-center">
          {/* Service Categories Section */}
          <div className="bg-white dark:bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Residential */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#002ECC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-400 mb-4">Residential</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We provide smart security and networking solutions for condos, townhouses, and multi-storey homes. From CCTV systems to remote access control, we ensure your family and property stay safe—24/7.
                  </p>
                  <button className="bg-[#002ECC] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2 mx-auto">
                    Residential Security System
                    {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg> */}
                  </button>
                </div>

                {/* Commercial */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#002ECC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900  dark:text-gray-400 mb-4">Commercial</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Tailored systems for offices, retail stores, and warehouses. Monitor your assets, manage access, and maintain security across your business locations with scalable, high-performance setups.
                  </p>
                  <button className="bg-[#002ECC] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2 mx-auto">
                    Commercial Security System
                    {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg> */}
                  </button>
                </div>

                {/* Industrial */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#002ECC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-400 mb-4">Industrial</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Designed for factories, storage sites, and industrial facilities, our systems deliver continuous surveillance, intrusion detection, and reliable monitoring—even in challenging environments.
                  </p>
                  <button className="bg-[#002ECC] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2 mx-auto">
                    Industrial Security System
                    {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg> */}
                  </button>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )}