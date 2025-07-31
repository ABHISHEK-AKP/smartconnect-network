import React from 'react';
import Image from 'next/image';

const SecuritySection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100  dark:bg-gray-900 p-5 rounded-2xl shadow-2xl shadow-gray-600 max-w-7xl mx-auto dark:shadow-[#002ECC]">
        {/* Blue top border */}
        <div className="w-full h-1 bg-[#002ECC] mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">  
            <div className="space-y-6">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-gray-400 mb-6">
                  Best Residential & Commercial CCTV Installation in Calgary & the GTA
                </h1>
              </div>
              
              {/* Years badge */}
              <div className="bg-blue-200 rounded-lg p-4 text-center min-w-[120px] flex-shrink-0">
                <div className="text-4xl font-bold text-[#002ECC]">7</div>
                <div className="text-sm text-[#002ECC] font-medium">Years Experienced</div>
              </div>
            </div>

            <div className="space-y-4 text-black dark:text-gray-500 leading-relaxed">
              {/* <p>
                SCN stands as the premier provider of security solutions. Specialized in installations for{' '}
                <span className="font-semibold">Residential</span>,{' '}
                <span className="font-semibold">Commercial</span>, and{' '}
                <span className="font-semibold">Industrial</span> settings in and around Brampton. In the{' '}
                <span className="font-semibold">residential realm</span>, we bring cutting-edge technology to homes. Ensuring the safety and peace of mind of families.
              </p> */}
              <p>
                We offer tailored camera installation solutions designed to suit your specific property layout and security needs. 
                Whether you are securing a home, office, retail space, or warehouse, our team ensures full coverage, 24/7 surveillance, 
                and remote viewing access through mobile and desktop apps.
              </p>
              
              {/* <p> */}
                <strong>Our Services Include:</strong>{' '}
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Indoor & Outdoor CCTV Installation</li>
                  <li>High-Definition Cameras with Night Vision</li>
                  <li>Mobile App Integration</li>
                  <li>Motion Detection & Alerts</li>
                  <li>Cloud and Local Storage Options</li>
                </ul>

              {/* </p> */}
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
                               src="/SCN/dome_camera2.JPG" // Replace with actual image path
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