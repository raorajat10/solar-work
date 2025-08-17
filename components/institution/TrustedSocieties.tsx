// app/components/TrustedSocieties.tsx
"use client";
export default function TrustedSocieties() {
  const logos = [
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/godrej_icon.svg", alt: "Godrej" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/piramal_icon.svg", alt: "Piramal" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/lodha_icon.svg", alt: "Lodha" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/century_icon.svg", alt: "Century" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/reliance_icon.svg", alt: "Reliance" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/montvert_icon.svg", alt: "Mount" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/brigade_icon.svg", alt: "Brigade" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/icon_sobha.svg", alt: "Sobha" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/kumar_icon.svg", alt: "Kumar Properties" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/snn_icon.svg", alt: "SNN" },
    { src: "https://sse-website.s3.ap-south-1.amazonaws.com/blog/icon_10.svg", alt: "24K" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl text-cyan-700 font-semibold">
          Trusted by Housing Societies Across India
        </h2>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
