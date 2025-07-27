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
    text: "We recently had security cameras installed at our home, and the experience was outstanding. Deep and his team were professional and quick.",
    rating: 4,
    date: "11 months ago",
    image: "/profile-avataar.jpg",
  },
  {
    name: "Sarah Johnson",
    text: "Excellent service! The installation was smooth, and the cameras work perfectly. Highly recommended!",
    rating: 5,
    date: "6 months ago",
    image: "/profile-avataar.jpg",
  },
  {
    name: "John Doe",
    text: "Very responsive and professional team. Affordable and reliable. Would hire again!",
    rating: 5,
    date: "3 months ago",
    image: "/profile-avataar.jpg",
  },
  {
    name: "Emily Brown",
    text: "Great experience overall! The team explained everything and installation was done quickly.",
    rating: 5,
    date: "1 month ago",
    image: "/profile-avataar.jpg",
  },
];

function ReviewsCarouselComponent() {
  return (
    <section className="bg-gray-50 dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#002ECC] uppercase text-sm font-semibold tracking-wide mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-400">
            What Our <span className="text-[#002ECC]">Clients Say</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Swiper Carousel */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-center h-full">
            <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true} 
        >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col justify-between h-full min-h-[350px] p-4">
                    {/* User Info */}
                    <div className="flex items-center mb-4">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover border border-gray-200"
                      />
                      <div className="ml-4">
                        <p className="font-semibold text-gray-800 dark:text-gray-500">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    {/* Review Text */}
                    <p className="text-gray-700 italic mb-6 leading-relaxed">{review.text}</p>
                    {/* Star Rating */}
                    <div className="flex mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.784.57-1.838-.197-1.539-1.118l1.2-3.674a1 1 0 00-.364-1.118L2.3 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                      </svg>
                    ))}
                  </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Google Review Section */}
          <div className="bg-[#002ECC] text-white dark:text-gray-400 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center relative h-full overflow-hidden">
            {/* <div className="absolute inset-0 bg-black: opacity-30 blur-3xl rounded-full"></div> */}
            <Image src="/camera.jpg" alt="Google" width={64} height={64} className="rounded mb-4 relative z-10" />
            <h3 className="text-2xl font-bold mb-2 relative z-10">Loved Our Service?</h3>
            <p className="text-blue-100 dark:text-gray-400 mb-4 relative z-10">
              Share your experience with us on Google! Your feedback helps us improve.
            </p>
            <div className="flex justify-center mb-6 relative z-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0..." />
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

export default function Reviews() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <ReviewsCarouselComponent />;
}
