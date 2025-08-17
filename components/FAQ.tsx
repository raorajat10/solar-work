"use client";
import { useState } from "react";

export default function TabDropdown() {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tabs = [
    { name: "General" },
    { name: "Solar Maintenance" },
    { name: "Solar Economics" },
  ];
   const faqData: Record<string, { question: string; answer: string }[]> = {
    General: [
      { question: "What is a solar plant?", answer: "A solar plant generates electricity from sunlight." },
      { question: "How does solar energy work?", answer: "It uses photovoltaic cells to convert sunlight into electricity." },
    ],
    "Solar Maintenance": [
      { question: "How often should I clean my panels?", answer: "Usually once every 3–6 months depending on dust levels." },
      { question: "Do solar panels require regular servicing?", answer: "Minimal maintenance is needed, but regular checks are recommended." },
    ],
    "Solar Economics": [
      { question: "How much does a solar Plant cost?", answer: "Costs vary based on size and location." },
      { question: "What is the break-even period for Solar rooftop projects?", answer: "Typically 4–6 years depending on savings and subsidies." },
      { question: "Are there any subsidies provided by the government for solar projects?", answer: "Yes, various central and state subsidies are available." },
      { question: "How do I avail subsidy provided by the Madhya Pradesh government?", answer: "You can apply via the state’s renewable energy department." },
      { question: "What is the difference between CapEx and OpEx models?", answer: "CapEx is an upfront purchase, OpEx is a pay-as-you-go model." },
      { question: "Are financing options available for Solar Rooftop projects?", answer: "Yes, banks and NBFCs offer solar loans." },
    ],
  };

  return (


    <section className="flex flex-wrap flex-col items-center justify-center space-y-20 mt-10 px-28">
<div>
    <h2 className="text-2xl md:text-5xl font-bold text-orange-500">Frequently asked questions</h2>
</div>

<div className="w-full flex  justify-between">
    <div>
        <img src="/images/FAQ.webp" alt="" />
    </div>

<div className="w-full">
      {/* Tabs */}
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-10 rounded-tl-lg rounded-tr-lg py-2 font-semibold transition-colors duration-200 
              ${
                activeTab === tab.name
                  ? "bg-cyan-500 text-white"
                  : "text-orange-500 hover:bg-gray-100"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

     
      {/* FAQ */}
      <div className="mt-4">
        {faqData[activeTab].map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between py-3 px-4 text-left font-semibold 
                  ${isOpen ? "bg-cyan-100 text-blue-800" : "text-orange-500"}`}
              >
                <div className="flex items-center">
                  <span
                    className={`mr-2 text-xl font-bold ${
                      isOpen ? "text-blue-800" : "text-cyan-700"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                  {item.question}
                </div>
              </button>
              {isOpen && (
                <div className="px-10 py-4 bg-cyan-100 text-cyan-700 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
</div>

    </section>
    
  );
}
