"use client";
import TrustedSocieties from "./TrustedSocieties";

// app/components/WhyChooseUs.tsx
export default function WhyChooseUs() {
  const stats = [
    { id: 1, icon: "🏠", value: "250+", label: "Societies Solarised" },
    { id: 2, icon: "⚡", value: "700 Cr+", label: "Solar Projects Executed" },
    { id: 3, icon: "🎖️", value: "10+ Years", label: "Industry Experience" },
    { id: 4, icon: "💎", value: "25,000+", label: "Happy Customers" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-14 text-center">
      {/* Why Choose Us */}
      <div className="mb-12">
        <div className="flex justify-center mb-4">
          <span className="sm:text-7xl text-2xl">🏅</span>
        </div>
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">
          Why choose us?
        </h3>
        <h2 className="text-2xl sm:text-5xl font-bold text-cyan-700">
          SolarSquare – Quality that lasts 25+ years.
        </h2>
        <p className="text-orange-500 mt-2 max-w-2xl mx-auto">
          From design and installation to maintenance and subsidy paperwork, we
          provide end-to-end support.
        </p>
      </div>

      {/* Stats */}
      <div>
        <h3 className="text-xl sm:text-2xl text-cyan-700 font-semibold mb-10">
          Unmatched Experience and Expertise
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h4 className="md:text-4xl text-2xl font-bold text-cyan-900">{item.value}</h4>
              <p className="text-cyan-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <TrustedSocieties />
      </div>
    </section>
  );
}
