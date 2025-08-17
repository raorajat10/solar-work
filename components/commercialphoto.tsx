"use client";

export default function CommercialPhoto() {
    return(  <section className="h-screen w-full relative">
<img className="object-cover w-full h-full" src="/images/buildings.jpg" alt="" />
<div className="absolute bottom-40 left-1/2 -translate-x-1/2 text-center  text-orange-500 p-4 rounded-lg w-full max-w-3xl">
                <h2 className="text-6xl font-bold">India's top companies choose SolarSquare.</h2>
                <a href="">
                  <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300">
                    Get quote
                  </button>
                </a>
              </div>
              
  </section>

    )}