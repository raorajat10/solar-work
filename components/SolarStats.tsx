// app/components/SolarStats.tsx
"use client";
import Image from "next/image";
import { Building2, Calendar, Zap, ReceiptIndianRupee } from "lucide-react";

export default function SolarStats() {
  const stats = [
    {
      icon: <Building2 className="w-20 h-20 text-cyan-700 mx-auto" />,
      value: "200+",
      label: "commercial projects",
    },
    {
      icon: <Calendar className="w-20 h-20 text-cyan-700 mx-auto" />,
      value: "10+",
      label: "years",
    },
    {
      icon: <Zap className="w-20 h-20 text-cyan-700 mx-auto" />,
      value: "130+ MWp",
      label: "installation experience",
    },
    {
      icon: <ReceiptIndianRupee className="w-20 h-20 text-cyan-700 mx-auto" />,
      value: "140+ Cr",
      label: "saving annually",
    },
  ];

  return (
    <section
      className="relative bg-fixed bg-center bg-cover min-h-[600px] flex items-center justify-center "
      style={{
        backgroundImage: "url('/images/solar-installation.jpg')", // Replace with your rooftop solar background
      }}
    >
    
      {/* <div className="bg-white rounded-xl shadow-lg px-0 py-2 flex flex-col md:flex-row items-center  gap-2 max-w-6xl w-full hover:bg-cyan-200 transition-colors duration-300 ">
        
        <div className="flex-shrink-0">
          <Image
            src="/images/van1.png" 
            alt="Solar Square Van"
            width={250}
            height={150}
            className="drop-shadow-lg"
          />
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8  text-center text-orange-500 hover:text-white flex-1">
          {stats.map((stat, index) => (
            <div key={index}>
              {stat.icon}
              <p className="text-xl font-bold md:text-3xl mt-2 ">{stat.value}</p>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
