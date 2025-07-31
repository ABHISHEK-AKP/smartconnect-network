import Image from "next/image";
import { Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-black py-8 px-4 sm-px-6 md:px-12 mx-auto gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl px-0 mx-0">

      {/* Text Content */}
      <div>
        {/* <p className="text-sm font-semibold text-gray-600 dark:text-gray-500  uppercase mb-2">
          About Us
        </p> */}
        <h1 className="text-xl sm:text-4xl md:text-5xl text-black dark:text-gray-400 font-bold leading-tight mb-4">
          Expert Security Camera & Network Installers – Smart Connect Network
        </h1>

        <p className="text-gray-500 mb-4">
          We specialize in delivering top-notch {" "}
          <strong>security and networking solutions</strong> and expert{" "}
          for residential and commercial clients across <strong>GTA (Ontario) and Calgary</strong>.
          .We’re your trusted, fully licensed, and insured local
          experts. From advanced <strong>CCTV systems and sound setups</strong> to structured cabling 
          and smart home integration, our certified team ensures seamless installation 
          and maximum reliability.
        </p>

        <p className="text-gray-500 text-lg">
          <strong>Your Security, Our Priority!</strong> <br />
          ✅ Licensed & Insured Technicians <br />
          ✅ Customized Solutions for Every Space <br />
          ✅ Cutting-Edge Equipment & Technology <br />
        </p>
      </div>

      {/* Image and Review */}
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-2xl shadow-gray-400 shadow-xl border-r-10  border-t-10 border-gray-800">
          <Image
            src="/camera.jpg" 
            alt="Security camera on brick wall"
            width={300}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* <div className="mt-6 space-y-4 flex  flex-col gap-12 md:flex-row">
          <div className="flex items-center space-x-3">
            <Image
              src="/profile-avataar.jpg" 
              alt="Link Secure"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Smart Connect Network</p>
              <p className="text-orange-500 flex items-center">
                5.0{" "}
                <span className="ml-1 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                  ))}
                </span>
              </p>
              <p className="text-sm text-gray-500">Based on 28 reviews</p>
              <button className="mt-1 text-blue-600 text-sm underline">
                review us on Google
              </button>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm max-w-sm">
            <p className="text-sm flex items-centerfont-medium">
              <span className="flex space-1 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                ))}
              </span>
            </p>
            <p className="text-sm mt-2 text-black dark:text-white">
              They have done our KCB warehouse in Toronto with one of the best
              cctv system. Satisfied!
            </p>
            <p className="text-xs text-gray-500 mt-1">— arshad mahmuud</p>
          </div>
        </div> */}
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
