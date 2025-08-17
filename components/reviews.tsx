// app/components/Reviews.tsx

import Image from "next/image";

export default function Reviews() {
  return (
    <div className="flex flex-raw items-center text-center  px-6 py-8 mt-8  max-w-l ">
      {/* Top Quote Icon */}
      <Image
        src="https://www.solarsquare.in/images/housing-society/air-quotes.png"
        alt="Opening Quote"
        width={60}
        height={60}
        className="mb-8 opacity-80"
      />

      {/* Review Text */}
      <p className="text-cyan-700 text-2xl leading-relaxed italic">
        The solar installation by SolarSquare is one of those rare projects,
        where I have not had to get involved during the execution phase.
      </p>

      {/* Bottom Quote Icon */}
      <Image
        src="https://www.solarsquare.in/images/housing-society/air-quotes.png"
        alt="Closing Quote"
        width={60}
        height={60}
        className="mt-4 rotate-180 opacity-80"
      />
     
    </div>
    
  );
}
