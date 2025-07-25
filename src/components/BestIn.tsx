import React from 'react';
import Image from 'next/image';

const SecuritySection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100  dark:bg-gray-900 p-5 rounded-2xl shadow-2xl shadow-gray-600 max-w-7xl mx-auto dark:shadow-white">
        {/* Blue top border */}
        <div className="w-full h-1 bg-blue-600 mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">  
            <div className="space-y-6">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-400 d leading-tight mb-6">
                  Best Residential & Commercial Security CCTV Camera Installation in Brampton
                </h1>
              </div>
              
              {/* Years badge */}
              <div className="bg-blue-200 rounded-lg p-4 text-center min-w-[120px] flex-shrink-0">
                <div className="text-4xl font-bold text-blue-800">10</div>
                <div className="text-sm text-blue-700 font-medium">Years Experienced</div>
              </div>
            </div>

            <div className="space-y-4 text-gray-500 leading-relaxed">
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
          
          
            
            
            {/* Bottom turret camera */}
           
          </div>
          {/* Right content - Camera images */}
        <div>
        <div className="grid grid-cols-2 gap-4">
              {/* Top row */}
              <div className="space-y-4">
                {/* Dome camera */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md h-62">
                  
                   <Image
                               src="/SCN/dome_camera2.jpg" // Replace with actual image path
                               alt="Security camera on brick wall"
                               width={300}
                               height={400}
                               className="object-cover w-full h-full"
                             />
                </div>
                
                {/* PTZ Dome camera */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md h-62">
                  
                   <Image
                               src="/SCN/dome_camera2.jpg" // Replace with actual image path
                               alt="Security camera on brick wall"
                               width={300}
                               height={400}
                               className="object-cover w-full h-full"
                             />
                </div>
                </div>
              
              <div className="space-y-4">
                {/* Doorbell camera */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md h-62">
                  
                   <Image
                               src="/SCN/dome_camera2.jpg" // Replace with actual image path
                               alt="Security camera on brick wall"
                               width={300}
                               height={400}
                               className="object-cover w-full h-full"
                             />
                </div>
                
                {/* Turret camera */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md h-62">
                  
                   <Image
                               src="/SCN/dome_camera2.jpg" // Replace with actual image path
                               alt="Security camera on brick wall"
                               width={300}
                               height={400}
                               className="object-cover w-full h-full"
                             />
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