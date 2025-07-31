"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const reviews = [
  {
    name: "Vishal Mandal",
    text: "Smart Connect did a great job with our camera setup. The team arrived on time and explained the whole process clearly. There were a few minor delays, but the overall result was excellent.",
    rating: 4,
    date: "11 months ago",
    image: "/profile-avataar.jpg",
  },
  {
    name: "Sarah Johnson",
    text: "Fantastic experience from start to finish. The technicians were professional, and the system works exactly as described. I appreciated the follow-up after installation.",
    rating: 5,
    date: "6 months ago",
    image: "/profile-avataar.jpg",
  },
  {
    name: "John Doe",
    text: "Very satisfied with the service. Communication was clear, and pricing was fair. I had a small issue with the app setup, but they helped me fix it quickly.",
    rating: 5,
    date: "3 months ago",
    image: "/profile-avataar.jpg",
  },
  {
    name: "Emily Brown",
    text: "Quick and efficient installation. The quality of the footage is impressive, and remote access works great. Would love to see more documentation included for setup.",
    rating: 5,
    date: "1 month ago",
    image: "/profile-avataar.jpg",
  },
  {
    name: "Ali Rehman",
    text: "Great support team. I had a few questions after the install, and they responded promptly. The process felt smooth overall. Highly recommend them!",
    rating: 5,
    date: "2 weeks ago",
    image: "/profile-avataar.jpg",
  },
];

export default function ReviewsCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-gray-50 dark:bg-black py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#002ECC] uppercase text-sm font-semibold tracking-wide mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-400">
            What Our <span className="text-[#002ECC]">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }}
    loop={true}
    observer={true}
    observeParents={true}
    className="w-full relative"
  >
    {reviews.map((review, index) => (
      <SwiperSlide
        key={index}
        className="!w-full flex flex-col items-center justify-center text-center space-y-4 min-h-[380px]"
      >
        {/* Avatar */}
        
         <Image
  src={review.image}
  alt={review.name}
  width={64}
  height={64}
  className="rounded-full object-cover border-2 border-gray-200 shadow-md mb-4 mx-auto mb-5"
  unoptimized
/>

  {/* Name & Date */}
  <div>
    <p className="font-semibold text-lg text-gray-800">{review.name}</p>
    <p className="text-sm text-gray-500">{review.date}</p>
  </div>

        {/* Review Text */}
        <p className="text-gray-700 italic text-base leading-relaxed px-4 max-w-lg">
          “{review.text}”
        </p>

        {/* Star Rating */}
        <div className="flex justify-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-6 w-6 ${
                i < review.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.784.57-1.838-.197-1.539-1.118l1.2-3.674a1 1 0 00-.364-1.118L2.3 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
            </svg>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>




          <div className="bg-[#002ECC] text-white dark:text-gray-400 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center relative h-full overflow-hidden">
            <Image
              src="/camera.jpg"
              alt="Google"
              width={64}
              height={64}
              className="rounded mb-4 relative z-10"
              unoptimized
            />
            <h3 className="text-2xl font-bold mb-2 relative z-10">
              Loved Our Service?
            </h3>
            <p className="text-blue-100 dark:text-gray-400 mb-4 relative z-10">
              Share your experience with us on Google! Your feedback helps us
              improve.
            </p>
            <div className="flex justify-center mb-6 relative z-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.784.57-1.838-.197-1.539-1.118l1.2-3.674a1 1 0 00-.364-1.118L2.3 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                </svg>
              ))}
            </div>
            <a
              href="https://www.google.com/maps/place/YourBusiness/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 text-[#002ECC] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg relative z-10"
            >
              Review us on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
