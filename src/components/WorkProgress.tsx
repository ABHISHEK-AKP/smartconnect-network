'use client';
import { useState } from 'react';

const steps = [
  {
    title: 'Initial Consultation',
    description:
      'We begin with a tailored conversation to understand your exact security goals, challenges, and environment.',
  },
  {
    title: 'System Installation',
    description:
      'Certified technicians install the selected security solution with precision and seamless integration.',
  },
  {
    title: 'Ongoing Maintenance',
    description:
      'We offer regular updates, system health checks, and priority support for uninterrupted service.',
  },
];

export default function WorkingProcess() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    // toggle on click for mobile
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#001a66] text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-36">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Our Working Process
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          SmartConnectNetwork follows a simple 3-step method designed to deliver
          secure, scalable, and seamless solutions tailored to your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative h-64 bg-[#0038ff] rounded-xl shadow-xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.03]"
            >
              <span className="absolute top-4 left-4 bg-white text-[#0038ff] text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                Step {index + 1}
              </span>

              {/* Title View */}
              <div
                className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-all duration-500 ${
                  isActive ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                }`}
              >
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  {step.title}
                </h3>
              </div>

              {/* Description View */}
              <div
                className={`absolute inset-0 p-6 text-md text-center flex items-center justify-center leading-relaxed transition-all duration-500 ${
                  isActive
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
              >
                {step.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
