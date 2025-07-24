import Image from "next/image";
import { Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-6 md:px-12 mx-auto gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto ">

      {/* Text Content */}
      <div>
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-500  uppercase mb-2">
          About Us
        </p>
        <h1 className="text-3xl md:text-4xl text-black dark:text-gray-400 font-bold leading-tight mb-6">
          Expert Security Camera Installers in Brampton - Link Secure
        </h1>

        <p className="text-gray-600 mb-4">
          Welcome to Link Secure. Your trusted choice for{" "}
          <strong>security camera installers in Brampton</strong> and expert{" "}
          <strong>Security system installers</strong>. With over a 10 years of
          experience. We’re your trusted, fully licensed, and insured local
          experts. Based in <strong>Brampton, Ontario</strong>. We extend our
          top-notch security solutions to surrounding areas. Whether you seek{" "}
          <strong>CCTV camera installation</strong>,{" "}
          <strong>Door operator installation</strong>, or{" "}
          <strong>Access control system</strong>. We deliver tailored solutions
          across residential, commercial, and industrial sectors.
        </p>

        <p className="text-gray-600">
          Our <strong>Commercial services</strong> extend to various sectors.
          Covering the security needs of businesses, schools, hospitals, and
          more. Our expertise includes{" "}
          <strong>Access control solutions</strong>,{" "}
          <strong>Surveillance systems</strong>, and{" "}
          <strong>Network installations</strong> in the industrial domain. Our
          dedicated team delivers unmatched services. We specialize in
          comprehensive security solutions. Our commitment is to your safety and
          satisfaction.
        </p>
      </div>

      {/* Image and Review */}
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-2xl shadow-gray-400 shadow-xl border-r-10  border-t-10 border-gray-400">
          <Image
            src="/camera.jpg" // Replace with actual image path
            alt="Security camera on brick wall"
            width={300}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mt-6 space-y-4 flex  flex-col gap-12 md:flex-row">
          <div className="flex items-center space-x-3">
            <Image
              src="/profile-avataar.jpg" // Replace with actual logo/profile
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
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
