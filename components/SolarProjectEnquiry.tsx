// app/components/SolarProjectEnquiry.tsx
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function SolarProjectEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    city: "",
    pincode: "",
    bill: "",
    terms: true,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_PROJECT_TEMPLATE_ID!, // use a different template ID for this form
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("✅ Enquiry submitted successfully!");
      setFormData({
        name: "",
        company: "",
        whatsapp: "",
        city: "",
        pincode: "",
        bill: "",
        terms: true,
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send enquiry. Please try again.");
    }
  };

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
          <form
            onSubmit={handleSubmit}
            className="text-cyan-700 space-y-4"
            autoComplete="off"
          >
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block font-medium mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block font-medium mb-1">
                WhatsApp number <span className="text-red-500">*</span>
              </label>
              <input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                type="tel"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* City */}
            <div>
              <label className="block font-medium mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Company Pin Code */}
            <div>
              <label className="block font-medium mb-1">Company Pin code</label>
              <input
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
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
                name="bill"
                value={formData.bill}
                onChange={handleChange}
                type="number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm">
              <input
                name="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1"
              />
              <label className="text-orange-400">
                I agree to Sarvatra Energy's&apos;s{" "}
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

            {status && <p className="text-center text-sm mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
