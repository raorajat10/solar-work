"use client";

import SprinkleParticles from "../sprinkel";

export default function SahiSolarSection() {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl text-orange-500 font-bold mb-6">
          Sahi Solar, Guaranteed Savings
        </h2>
        <SprinkleParticles />
        {/* Description */}
        <div className="max-w-3xl mx-auto text-cyan-500 space-y-4 mb-10">
          <p>
            The right solar ensures reliability, longevity, and proper savings. At SolarSquare,
            our advanced IIT-Bombay-approved WindPro Mount™ structures withstand wind speeds up
            to <span className="font-semibold text-orange-500">170 kmph</span>, offering unmatched
            safety and durability.
          </p>
          <p>
            With our <span className="font-semibold text-orange-500">money-back guarantee</span>,
            we ensure your savings are secure—if your solar system doesn’t generate the promised
            units, we’ll compensate you for the shortfall. Furthermore, our{" "}
            <span className="font-semibold text-orange-500">global standard in chemical anchoring</span>{" "}
            ensures a leakage-free rooftop. We also offer a{" "}
            <span className="font-semibold text-orange-500">₹1-lakh leakage-free guarantee</span>.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <img
              src="https://sse-website.s3.ap-south-1.amazonaws.com/blog/icon_9.svg"
              alt="Subsidy"
              className="mx-auto mb-4 h-14 w-14"
            />
            <h3 className="font-semibold text-orange-500 text-lg mb-2">
              Save more with Government Subsidy
            </h3>
            <p className="text-cyan-500 text-sm">
              Avail ₹18,000 per kW subsidy (up to ₹90 lakhs) under government schemes.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <img
              src="https://sse-website.s3.ap-south-1.amazonaws.com/blog/icon_7.svg"
              alt="Financing"
              className="mx-auto mb-4 h-14 w-14"
            />
            <h3 className="font-semibold text-orange-500 text-lg mb-2">
              Financing Options, Tailored for You
            </h3>
            <p className="text-cyan-500 text-sm">
              Choose from OPEX, CAPEX, or our Zero Investment plan to switch to solar with ease.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <img
              src="https://sse-website.s3.ap-south-1.amazonaws.com/blog/icon_8.svg"
              alt="Break Even"
              className="mx-auto mb-4 h-14 w-14"
            />
            <h3 className="font-semibold text-orange-500 text-lg mb-2">
              When will you break even?
            </h3>
            <p className="text-cyan-500 text-sm">
              The break-even period is anywhere between 1 to 4 years depending on electricity
              tariffs and your choice of components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
