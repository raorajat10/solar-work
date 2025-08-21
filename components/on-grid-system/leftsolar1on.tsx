"use client";

import Leftsolar2on from "./leftsolar2on";
import Leftsolar3on from "./Leftsolar3on";
import Leftsolar4on from "./Leftsolar4on";
import Leftsolar5on from "./Leftsolar5on";
export default function Leftsolar1on() {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-3xl sm:text-5xl font-bold text-cyan-700 mb-4">
        Overview of on-grid solar systems
      </h2>
      <p className="text-orange-500 md:text-lg text-sm mb-4 leading-relaxed">
        An On-grid solar system aka a grid-tied solar system is connected to the
        grid. Most Indian households with a reliable grid connection count on
        the on-grid solar system for their electricity needs. And we, at
        <a className="text-cyan-700" href="#home">
          Sarvatra Energy
        </a>
        , specialize in installing on-grid rooftop solar systems for both
        independent homes and housing societies.
      </p>
      <ul className="list-disc pl-4 marker:text-3xl my-auto marker:text-cyan-700 mb-6 md:text-lg text-sm">
        <li className="text-orange-500">
          <p>Solar panels</p>
        </li>
        <li className="text-orange-500">
          <p>Solar inverter</p>
        </li>
        <li className="text-orange-500">
          <p>Mounting structures</p>
        </li>
        <li className="text-orange-500">
          <p>Bi-directional meter</p>
        </li>
        <li className="text-orange-500">
          <p>Solar accessories</p>
        </li>
        {/* <li className="text-orange-500">
          <p>Solar accessories</p>
        </li> */}
      </ul>
      <p className="text-orange-500 md:text-lg text-sm mb-4 leading-relaxed">
        When it comes to categorization, an on-grid solar power system installed
        for smaller applications like an individual home has different
        capacities: 2 kW, 3 KW, 5KW, 10 KW, and so on.
        <br />
        <br />
        An average Indian household with a monthly electricity bill of ₹1500 to
        ₹3000 has a requirement of 2 to 3 kW only. For those consuming 0-150
        units per month, a subsidy ranging from ₹30,000 to ₹60,000 is available
        for 1-2 kW solar plants. Households with a consumption of 150-300 units
        can receive between ₹60,000 and ₹78,000 for 2-3 kW systems, while those
        consuming over 300 units are eligible for ₹78,000 for systems above 3
        kW.
      </p>
      <Leftsolar2on />
      <Leftsolar3on />
      <Leftsolar4on />
      <Leftsolar5on />
    </div>
  );
}
