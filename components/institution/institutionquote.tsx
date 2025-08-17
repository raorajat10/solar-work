"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function InstitutionSection() {
  const images = [
    "/images/institute1.jpg",
    "/images/institute3.webp",
    "/images/institute4.webp", 
  ];

  return (
    <section className="bg-gradient-to-r from-orange-600 to-blue-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Heading + Carousel */}
        <div>
          <h2 className="text-3xl sm:text-6xl font-bold text-white leading-snug mb-4">
            Slash Your Institution’s Electricity Bills by{" "}
            <span className="text-cyan-400">90% with SolarSquare!</span>
          </h2>
          <p className="text-white text-2xl mb-8">
            Switch to rooftop solar for schools, colleges & universities and enjoy unbeatable savings.
          </p>

          {/* Carousel */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Institution ${idx + 1}`}
                  className="w-full h-60 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-cyan-700  text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded-md p-2" />
            </div>

            <div>
              <label className="block text-cyan-700  text-sm font-medium mb-1">
                Name of Institution <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded-md p-2" />
            </div>

            <div>
              <label className="block text-cyan-700  text-sm font-medium mb-1">
                Pin code <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded-md p-2" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-cyan-700  text-sm font-medium mb-1">
                  WhatsApp number <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-cyan-700  text-sm font-medium mb-1">
                  Monthly Electricity Bill
                </label>
                <select className="w-full border text-cyan-700  rounded-md p-2">
                  <option className="hover:bg-orange-500">0 - 50,000</option>
                  <option className="hover:bg-orange-500">50,000 - 1,00,000</option>
                  <option className="hover:bg-orange-500">1,00,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-cyan-700  text-sm font-medium mb-2">
                What is your designation in Institution? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {["Principal", "Trustee", "Admin", "Facility Manager"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    className="border text-orange-500  rounded-md px-3 py-1 hover:bg-orange-100"
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-cyan-700  text-sm font-medium mb-1">
                Approval Status <span className="text-red-500">*</span>
              </label>
              <select className="w-full border text-cyan-700  rounded-md p-2">
                <option className="hover:bg-orange-500">Select Approval Status</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Not Required</option>
              </select>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-orange-500">
                I agree to SolarSquare’s{" "}
                <a href="#" className="text-cyan-500 underline">terms of service</a> &{" "}
                <a href="#" className="text-cyan-500 underline">privacy policy</a>.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
