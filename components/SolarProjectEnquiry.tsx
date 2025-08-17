// app/components/SolarProjectEnquiry.tsx
"use client";

export default function SolarProjectEnquiry() {
  return (
    <section className="animate-in bg-gradient-to-r from-orange-600 to-blue-300 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            Submit a <span className="text-cyan-400">solar project</span> enquiry
          </h2>
          <p className="text-white text-2xl max-w-md">
            Our solar experts will guide you in your solar journey.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-black">
          <form className="text-cyan-700 space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block font-medium mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block font-medium mb-1">
                WhatsApp number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block font-medium mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* Company Pin Code */}
            <div>
              <label className="block font-medium mb-1">
                Company Pin code
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Average Monthly Bill */}
            <div>
              <label className="block font-medium mb-1">
                Average Monthly Bill <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" defaultChecked className="mt-1" />
              <label className="text-orange-400">
                I agree to SolarSquare&apos;s{" "}
                <a href="#" className="text-cyan-500 underline">
                  terms of service
                </a>{" "}
                &{" "}
                <a href="#" className="text-cyan-500 underline">
                  privacy policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-400 text-white font-medium py-3 rounded-lg hover:bg-orange-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
