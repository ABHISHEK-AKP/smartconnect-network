import React from 'react';
import Image from 'next/image';

const SecuritySection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Blue top border */}
        <div className="w-full h-1 bg-blue-600 mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">  
            <div className="space-y-6">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Best Residential & Commercial Security CCTV Camera Installation in Brampton
                </h1>
              </div>
              
              {/* Years badge */}
              <div className="bg-blue-200 rounded-lg p-4 text-center min-w-[120px] flex-shrink-0">
                <div className="text-4xl font-bold text-blue-800">10</div>
                <div className="text-sm text-blue-700 font-medium">Years Experienced</div>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Link Secure stands as the premier provider of security solutions. Specialized in installations for{' '}
                <span className="font-semibold">Residential</span>,{' '}
                <span className="font-semibold">Commercial</span>, and{' '}
                <span className="font-semibold">Industrial</span> settings in and around Brampton. In the{' '}
                <span className="font-semibold">residential realm</span>, we bring cutting-edge technology to homes. Ensuring the safety and peace of mind of families.
              </p>
              
              <p>
                Our expert team excels in{' '}
                <span className="font-semibold">surveillance camera installation</span>, access control system and more. Customizing solutions for homes, schools, and hospitals.{' '}
                <span className="font-semibold">Commercial enterprises</span> benefit from our comprehensive approach. Deploying sophisticated{' '}
                <span className="font-semibold">security cameras and installation</span>. Tailored to the unique needs of businesses, restaurants, and offices. Link Secure extends its expertise to the{' '}
                <span className="font-semibold">industrial sector</span>. Securing large-scale operations with advanced{' '}
                <span className="font-semibold">CCTV systems</span>, robust{' '}
                <span className="font-semibold">Security camera solutions and mounting security cameras</span>.
              </p>
            </div>
          
          {/* Right content - Camera images */}
        <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top row */}
              <div className="space-y-4">
                {/* Dome camera */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-inner flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* PTZ Dome camera */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-full shadow-inner flex items-center justify-center relative">
                      <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Link Secure</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Doorbell camera */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-20 bg-gray-800 rounded-lg flex flex-col items-center justify-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Turret camera */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Link Secure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom turret camera */}
            <div className="mt-4 bg-white rounded-lg p-4 shadow-md w-1/2 ml-auto">
              <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-0 right-2 w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">Link Secure</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        
    </section>
  );
};

export default SecuritySection;