"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";
const partners = [
  "/images/logo1.png",
  "/images/logo2.webp",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.jpg",
];

export default function TrustedPartner() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: "ondemand", // load images only when needed
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl md:text-5xl text-orange-500 font-bold text-center mb-6">Our Trusted Partners</h2>
     <Slider {...settings}>
  {partners.map((src, i) => (
    <div key={i}>
      <div className="flex justify-center items-center h-32"> {/* height optional */}
        <img
          src={src}
          alt={`Partner ${i + 1}`}
          className="h-24 w-auto object-contain"
        />
      </div>
    </div>
  ))}
</Slider>

    </div>
  );
}
