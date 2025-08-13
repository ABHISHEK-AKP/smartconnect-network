'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function AreasWeServe() {
  const locations = [
    {
      name: 'GTA (Ontario)',
      description:
        'Serving Toronto, Brampton, Mississauga, and surrounding areas with advanced surveillance and networking solutions customized for both residential and commercial needs.',
      image: '/gta1.png',
    },
    {
      name: 'Calgary (Alberta)',
      description:
        'Our Calgary team delivers modern security systems, CCTV installations, and smart access control with expert precision and responsive local support.',
      image: '/calgary.png',
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-8 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-36" id="locations">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002ECC] mb-3">
          Areas We Serve
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          <strong>Smart Connect Network Ltd</strong> provides reliable security solutions across
          Ontario & Alberta. Below are our primary service regions where you will find expert
          technicians and tailored support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-[#0038ff20] dark:border-[#002ECC] hover:shadow-2xl dark:shadow-[#002ECC] transition-all"
          >
            <div className="relative h-56 w-full">
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-[#002ECC] mb-2">
                <FaMapMarkerAlt className="text-xl" />
                <h3 className="text-2xl font-bold">{loc.name}</h3>
              </div>
              <p className="text-gray-500">{loc.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
