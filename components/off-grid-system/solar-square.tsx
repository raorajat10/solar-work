"use client";
import { useState } from "react";
import LeftSolarPart from "./left-solar-sqaure-part";
import Leftsolar1 from "./left-sloar1";

export default function SolarSquare() {
   const [activeTab, setActiveTab] = useState<"residential" | "housing" | "commercial">("residential");


  return (
    <section className="max-w-7xl mx-auto px-14 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Content */}
    <LeftSolarPart />

      {/* Sidebar Form */}
       <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl">
      {/* Tabs */} <h3 className="text-lg text-center text-orange-500 font-bold mb-2">Book a FREE Solar Consultation</h3>
        <p className="text-sm text-center text-orange-500 mb-4">And save up to ₹78,000 with subsidy</p>
      <div className="flex justify-between border rounded-2xl mb-6 overflow-hidden">
        <button
          onClick={() => setActiveTab("residential")}
          className={`flex-1 py-2 text-sm font-medium ${
            activeTab === "residential" ? "bg-cyan-100 text-cyan-700" : "bg-white text-orange-500"
          }`}
        >
          Residential
        </button>
        <button
          onClick={() => setActiveTab("housing")}
          className={`flex-1 py-2 text-sm font-medium ${
            activeTab === "housing" ? "bg-cyan-100 text-cyan-700" : "bg-white text-orange-500"
          }`}
        >
          Housing Society
        </button>
        <button
          onClick={() => setActiveTab("commercial")}
          className={`flex-1 py-2 text-sm font-medium ${
            activeTab === "commercial" ? "bg-cyan-100 text-cyan-700" : "bg-white text-orange-500"
          }`}
        >
          Commercial
        </button>
      </div>

      {/* Residential Form */}
      {activeTab === "residential" && (
        <form className="space-y-4">
          <input type="text" placeholder="Full Name *" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="WhatsApp number *" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Pin code *" className="w-full border p-2 rounded" required />

          <label className="block text-cyan-700 text-sm font-medium">What is your average monthly bill? *</label>
          <div className="grid grid-cols-2 gap-2">
            {["Less than ₹1500","₹1500 – ₹2500","₹2500 – ₹4000","₹4000 – ₹8000","More than ₹8000"].map((bill) => (
              <button key={bill} type="button" className="border rounded p-2 text-orange-400 text-sm hover:bg-cyan-100">
                {bill}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" required />
            <p className="text-xs text-orange-400">
              I agree to SolarSquare's <a href="#" className="underline text-cyan-500">terms of service</a> &{" "}
              <a href="#" className="underline">privacy policy</a>
            </p>
          </div>
          <button type="submit" className="w-full bg-orange-400 hover:bg-orange-700 text-white py-2 rounded-lg">Submit Details</button>
        </form>
      )}

      {/* Housing Society Form */}
      {activeTab === "housing" && (
        <form className="space-y-4">
          <input type="text" placeholder="Full Name *" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Name of Housing Society *" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Pin code *" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="WhatsApp number *" className="w-full border p-2 rounded" required />

          <label className="block text-sm text-cyan-700 font-medium">Monthly Electricity Bill *</label>
          <select className="w-full border text-orange-400 p-2 rounded">
            <option>0 – 50,000</option>
            <option>50,000 – 1,00,000</option>
            <option>1,00,000+</option>
          </select>

          <label className="block text-sm font-medium text-cyan-700">What is your designation in Housing Society? *</label>
          <div className="grid grid-cols-2 gap-2">
            {["Management committee member","Resident","Builder","Facility Manager"].map((role) => (
              <button key={role} type="button" className="border text-orange-400 hover:bg-cyan-100 rounded p-2 text-sm">
                {role}
              </button>
            ))}
          </div>

          <label className="block text-sm font-medium text-cyan-700">AGM approval status *</label>
          <select className="w-full text-orange-400 border p-2 rounded">
            <option>Select Approval Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>

          <div className="flex items-center space-x-2">
            <input type="checkbox" required />
            <p className="text-xs text-orange-400">
              I agree to SolarSquare's <a href="#" className="text-cyan-500 underline">terms of service</a> &{" "}
              <a href="#" className="underline">privacy policy</a>
            </p>
          </div>
          <button type="submit" className="w-full bg-orange-400 hover:bg-orange-700 text-white py-2 rounded-lg">Submit Details</button>
        </form>
      )}

      {/* Commercial Form */}
      {activeTab === "commercial" && (
        <form className="space-y-4">
          <input type="text" placeholder="Full Name *" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Company Name *" className="w-full border p-2 rounded" required />
          <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="City *" className="w-full border p-2 rounded" required />
            <input type="text" placeholder="Pin code *" className="w-full border p-2 rounded" required />
          </div>
          <input type="text" placeholder="WhatsApp number *" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Average Monthly Bill *" className="w-full border p-2 rounded" required />

          <div className="flex items-center space-x-2">
            <input type="checkbox" required />
            <p className="text-xs text-orange-400">
              I agree to SolarSquare's <a href="#" className="underline text-cyan-500">terms of service</a> &{" "}
              <a href="#" className="underline">privacy policy</a>
            </p>
          </div>
          <button type="submit" className="w-full bg-orange-400 hover:bg-orange-700 text-white py-2 rounded-lg">Submit Details</button>
        </form>
      )}
    </div>
    <Leftsolar1 />
    </section>
  );
}
