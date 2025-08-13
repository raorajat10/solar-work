"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  FileCheck, 
  FileText, 
  Wrench, 
  PlugZap, 
  Power, 
  Sparkles 
} from "lucide-react";

const steps = [
  {
    icon: Home,
    title: "Free in-home consultation",
    desc: "A SolarSquare consultant will survey your home, answer your questions and generate a custom digital design of what the solar system will look like on your roof.",
    button: "Schedule a free consultation",
  },
  {
    icon: FileCheck,
    title: "Personalised solar proposal & dedicated manager",
    desc: "Based on your requirements, our team will create a custom proposal for you. A Delight Manager is also assigned to answer your queries and keep you updated on the project.",
  },
  {
    icon: FileText,
    title: "Paperwork and subsidy assistance",
    desc: "End-to-end paperwork management by us for hassle-free coordination with the local discom and securing subsidy.",
  },
  {
    icon: Wrench,
    title: "Step-by-step professional & safe installation",
    desc: "Once you submit the advance amount, your rooftop system will arrive in stylish delivery vans and installed in a timely, clean and professional manner.",
  },
  {
    icon: PlugZap,
    title: "Connection to the grid",
    desc: "We coordinate with the discom to connect your system to the power grid and install a new electricity meter.",
  },
  {
    icon: Power,
    title: "Power on your new system",
    desc: "Switch on your system to enjoy reduced electricity bills and an energy-independent future!",
  },
  {
    icon: Sparkles,
    title: "Deep cleaning and maintenance",
    desc: "We’ll call you to schedule quarterly deep cleaning and preventive health checks of your system for 5 years.",
  },
];

export default function Process() {
  return (
    <div className="cursor-pointer py-10 bg-gradient-to-r from-orange-600 to-blue-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white">
            The solar switch made simple
          </h2>
          <p className="mt-2 text-white max-w-2xl mx-auto">
            Switching to solar can seem daunting, but we’ve got you covered.
            Here’s how it works
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 w-1 bg-cyan-400 h-full transform -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.3 }}
                  className={`flex cursor-pointer flex-col md:flex-row items-center md:items-start ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for alignment */}
                  <div className="w-full md:w-1/2 md:px-8">
                    {i % 2 !== 0 && <div className="hidden md:block" />}
                  </div>

                  {/* Step card */}
                  <div className="relative bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2">
                    {/* Dot in the center line */}
                    <div className="absolute top-6 md:top-10 left-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white transform -translate-x-1/2 -translate-y-1/2 z-10" />

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                      <Icon className="mb-4 w-12 h-12 text-orange-500" />
                      <h4 className="text-lg font-semibold text-cyan-700">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-cyan-400">{step.desc}</p>
                      {step.button && (
                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition">
                          {step.button}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Empty space for other side */}
                  <div className="w-full md:w-1/2 md:px-8">
                    {i % 2 === 0 && <div className="hidden md:block" />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
