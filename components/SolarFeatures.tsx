// app/components/SolarFeatures.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SolarFeatures() {
  const features = [
    {
      image: "/images/solarimplant1.webp", // Replace with your real image
      title: "Best price challenge",
      description:
        "We create premium solar systems using top-quality components, all at competitive prices, to guarantee a lifetime of high performance and savings.",
    },
    {
      image: "/images/solarimplant2.webp", // Replace with your real image
      title: "Great solar starts with precision designs",
      description:
        "We survey your roof, take measurements, and conduct shadow analysis in our softwares to come up with precise 3D design for your rooftop solar. We consult with you and take approvals on the design before installation.",
    },
  ];

  return (
    <section className=" flex flex-col items-center py-12 px-6 bg-white">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-4 bg-gradient-to-r from-orange-500 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
          Hassle-free, professional and friendly installation experience – we
          are committed to making your solar journey easy
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            whileHover={{ scale: 1.09 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <Image
              src={feature.image}
              alt={feature.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-800 via-blue-cyan/60 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
