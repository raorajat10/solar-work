// app/components/StatsSection.tsx
"use client";
import { motion } from 'framer-motion';
import WhoAreWe from './whowe';

export default function StatsSection() {
  const stats = [
    { value: "4.8", label: "rating on Google with 6000+ reviews" },
    { value: "15+", label: "years of experience" },
    { value: "25,000+", label: "homes solarised" },
    { value: "₹90+ Cr", label: "Savings for families across India (2020 – 2025)" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
        <WhoAreWe />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {stats.map((stat, i) => (
          <motion.div
            key={i}
             initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
            className="cursor-pointer  bg-orange-400 hover:bg-orange-700  rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4"
          >
            <span className="text-3xl sm:text-4xl font-bold text-white">
              {stat.value}
            </span>
            <p className="mt-2 sm:mt-0 text-white font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
