"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";

const slides = [
  {
    title: "Your roof, your solar responsibility",
    text: "End to end service. No hassle, no worries.",
    img: "/images/image1.jpg",
  },
  {
    title: "Cyclone-proof solar systems",
    text: "Our SolarSquare WindPro Mount™ is so well built it can handle heavy rain, wind, and other extreme weather conditions.",
    img: "/images/image2.jpg",
  },
  {
    title: "Sustainable Energy for All",
    text: "Affordable, sustainable solutions for a greener future.",
    img: "/images/image3.jpg",
  },
];
// function getQuote() {
//   window.location.href = "#get-quote";

export default function VerticalCarousel() {
  return (
    <div className="h-screen w-full relative">
      <Swiper
      autoplay={{
          delay: 2500, // 2.5 seconds per slide
          disableOnInteraction: false, // keep autoplay after interaction
        }}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel, Autoplay]}
        className="h-full rounded-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-40 left-1/2 -translate-x-1/2 text-center  text-orange-500 p-4 rounded-lg w-full max-w-3xl">
                <h2 className="text-6xl font-bold">{slide.title}</h2>
                <p className="mt-3 text-3xl text-white ">{slide.text}</p>
              </div>
              {/* <button onClick={getQuote}></button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for larger dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          background: white;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #ff9800;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
