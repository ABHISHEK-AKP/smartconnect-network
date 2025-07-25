"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';

const reviews = [
  {
    name: "Vishal Mandal",
    text: "We recently had security cameras installed at our home, and the experience was outstanding. Deep and his team were professional and quick.",
    rating: 4,
    date: "11 months ago",
    image: "/images/user1.jpg",
  },
  {
    name: "Sarah Johnson",
    text: "Excellent service! The installation was smooth, and the cameras work perfectly. Highly recommended!",
    rating: 5,
    date: "6 months ago",
    image: "/images/user2.jpg",
  },
  {
    name: "John Doe",
    text: "Very responsive and professional team. Affordable and reliable. Would hire again!",
    rating: 5,
    date: "3 months ago",
    image: "/images/user3.jpg",
  },
  {
    name: "Emily Brown",
    text: "Great experience overall! The team explained everything and installation was done quickly.",
    rating: 5,
    date: "1 month ago",
    image: "/images/user4.jpg",
  },
  {
    name: "Michael Smith",
    text: "Professional, punctual, and excellent service. Highly recommend them to anyone.",
    rating: 4,
    date: "2 weeks ago",
    image: "/images/user5.jpg",
  },
];

export default function ReviewsCarousel() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Button */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <a
            href="https://www.google.com/maps/place/YourBusiness/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2 shadow-sm"
          >
            <Image
              src="/camera.jpg"
              alt="Google"
              width={20}  
              height={20} 
              className="rounded" 
            />
            Review us on Google
          </a>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-72 transition transform hover:scale-105 hover:shadow-2xl duration-300">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <Image
                    src={"/profile-avataar.jpg"}
                    alt={review.name}
                    width={48}  
                    height={48} 
                    className="rounded-full object-cover border border-gray-200"
                    />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                {/* Review Text */}
                <p className="text-gray-700 italic mb-4 line-clamp-3">
                  {review.text}
                </p>
                {/* Star Rating */}
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
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
    </section>
  );
}
