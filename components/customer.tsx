"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

export default function TestimonialSlider() {
  const reviews = [
    {
      name: "Patrick James",
      company: "CoCo Inc.",
      text: "First of all, it’s so gorgeous to look at and super easy to set up! The support team answers super fast if any questions are raised.",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      rating: 5,
    },
    {
      name: "Sarah Parker",
      company: "CoCo Inc.",
      text: "Great plugin, very easy to use! If you have a problem they react super fast and are very helpful.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Kathy Twain",
      company: "Chino",
      text: "First of all, it’s so gorgeous to look at and super easy to set up! The support team answers super fast if any questions are raised.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
    },
    {
      name: "Chan Lee",
      company: "Coca-Cola",
      text: "Love it! The best testimonial slider that I’ve been able to find! Easy to use and with just a few simple customizations.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
    },
    {
      name: "Jessica Simpson",
      company: "Company Inc.",
      text: "My favorite thing about this Testimonial Slider is the ease of use and the ability to customize it for my needs.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-r from-orange-600 to-cyan-300">
        <h2 className="text-2xl md:text-5xl text-white font-bold text-center mb-8">Exceptional quality. End-to-end service. Delighted customers</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       coverflowEffect={{
  rotate: 20,   // tilt angle of side cards
  stretch: 0,
  depth: 200,   // how deep the side cards go
  modifier: 2.5,
  slideShadows: false, // you can set true if you want shadow on tilted cards
}}

        pagination={{ clickable: true }}   // ✅ dots enabled
      modules={[EffectCoverflow, Autoplay, Pagination]}
        className="max-w-4xl mx-auto"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide
            key={idx}
            className="bg-white rounded-2xl shadow-lg px-8 py-10 max-w-md text-center"
          >
            <p className="text-cyan-500 italic mb-6">
              “{review.text.slice(0, 120)}...{" "}
              <span className="text-orange-500 font-semibold cursor-pointer">
                Read More
              </span>
              ”
            </p>
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-orange-500 object-cover"
            />
            <h3 className="font-bold text-lg">{review.name}</h3>
            <p className="text-sm text-orange-600">{review.company}</p>
            <div className="flex justify-center mt-2 text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
