"use client";

import Leftsolar2 from "./left-solar2";
import Leftsolar3 from "./left-solar3";



export default function Leftsolar1() {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-3xl sm:text-5xl font-bold text-cyan-700 mb-4">
        Overview of an off grid solar system
      </h2>
      <p className="text-orange-500 md:text-lg text-sm mb-4 leading-relaxed">
        An off-grid solar system is also known as a stand alone solar system.
        Why? Because it’s not connected to the grid. It works as an isolated
        island of its own. An off grid solar power plant is an intricate setup
        of the following components.
      </p>
       <ul className="list-disc pl-4 marker:text-3xl my-auto marker:text-cyan-700 mb-6 md:text-lg text-sm">
        <li className="text-orange-500"><p>Solar panels (modules)</p></li>
        <li className="text-orange-500"><p>Mounting structures</p></li>
        <li className="text-orange-500"><p>Batteries</p></li>
        <li className="text-orange-500"><p>Solar charge controller</p></li>
        <li className="text-orange-500"><p>Solar inverter</p></li>
        <li className="text-orange-500"><p>Solar accessories</p></li>
      </ul>
      <Leftsolar2/>
      <Leftsolar3/>

    </div>
  );
}
