"use client";

export default function LeftSolarParton() {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-3xl sm:text-5xl font-bold text-cyan-700 mb-4">
        About Sarvatra Energy
      </h2>
      <p className="text-orange-500 md:text-lg text-sm mb-4 leading-relaxed">
        Sarvatra Energy started in 2015 with the desire to escalate the mass
        adoption of solar in India.
        <br />
        <br />
        We're now the third-largest EPC contractor in the country, having served
        25,000+ homes and 250+ housing societies. Our services include:
      </p>
      {/* ... keep the same left content as before ... */}
      <ul className="list-disc pl-4 marker:text-3xl marker:text-cyan-700 md:text-lg text-sm">
        <li className="text-orange-500">
          <p>The installation of on-grid rooftop solar systems for homes and housing societies</p>
        </li>
        <li className="text-orange-500">
          <p>
            We use premium-quality prefabricated mounting structures that are
            resilient and durable enough to handle cyclonic wind speeds reaching
            up to 170 kmph
          </p>
        </li>
        <li className="text-orange-500">
          <p>
After-installation maintenance and after sales care</p>
        </li>
        <li className="text-orange-500">
          <p>
           Varied EMI options for our customers
          </p>
        </li>
        <li className="text-orange-500">
          <p>Using prefabricated mounting structures for the installation of solar panels</p>
        </li>
        {/* <li className="text-orange-500">
          <p>We offer a 5-year AMC contract</p>
        </li> */}
      </ul>
    </div>
  );
}
