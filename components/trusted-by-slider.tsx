"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { Settings } from "react-slick";
const Slider = dynamic(() => import("react-slick"), { ssr: false }) as React.ComponentType<Settings>;

export default function TrustedPartner() {
  const settings = {
    lazyLoad: "ondemand" as const,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const partners = [
    "/images/logo1.png",
    "/images/logo2.webp",
    "/images/logo3.png",
    "/images/logo4.jpg",
    "/images/logo5.webp",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Trusted Partners
      </h2>
      <Slider {...settings}>
        {partners.map((logo, i) => (
          <div key={i} className="px-4">
            {/* Using data-lazy for Slick */}
            <img
              data-lazy={logo}
              alt={`Partner ${i + 1}`}
              className="mx-auto h-24 object-contain"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
