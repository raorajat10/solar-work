'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: 'Proven Track Record',
    description:
      'Over 5,000 successful installations across India with 99% customer satisfaction rate and industry-leading performance guarantees.',
  },
  {
    title: 'Premium Quality Components',
    description:
      'We use only Tier-1 solar panels and German-engineered inverters with 25-year warranties for maximum durability and efficiency.',
  },
  {
    title: 'Competitive Pricing',
    description:
      'Best in market pricing with flexible financing options, government subsidy assistance, and transparent cost breakdowns.',
  },
  {
    title: 'Expert Installation Team',
    description:
      'Certified engineers and technicians with specialized training ensure precision solar installations.',
  },
  {
    title: 'Comprehensive After-Sales Support',
    description:
      '24/7 monitoring, regular maintenance, quick response to queries, and peace of mind post-installation.',
  },
  {
    title: 'Government Approved Partner',
    description:
      'We help you easily process subsidy applications, net metering, and ensure compliance with all government schemes.',
  },
];

export default function WhyChooseDropdown() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleFeatures = isMobile && !showAll ? features.slice(0, 1) : features;

  return (
   <section className="max-w-5xl mx-auto px-4 py-12" id="why-choose">
  <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
    Why Choose SolarTech India?
  </h2>
  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6">
    Choosing a reliable and affordable solar provider is crucial for maximizing your investment in clean energy.
    At SolarTech India, we combine years of expertise with cutting-edge technology to deliver solar solutions that exceed expectations.
  </p>

  <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
    <AnimatePresence>
      {visibleFeatures.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer group border rounded-xl p-4 shadow bg-white"
        >
          <h3 className="font-semibold text-green-600 mb-1 group-hover:text-orange-600 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>

  {isMobile && (
    <div className="text-center mt-4">
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  )}
</section>

  );
}
