import { Phone } from "lucide-react";
import Link from "next/link";

export default function WorkProgress() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="items-center">
          

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
        </div>
      </div>
    </section>
  )}