"use client";

export default function Leftsolar2() {
  return (
    <div className="mb-8">
      <h2 className=" text-lg md:text-3xl font-bold text-cyan-700  my-2 mb-6">
        Off grid solar components and their working
      </h2>
      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #1. Solar panels
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          Solar panels are made up of solar cells. When they’re made of one
          single silicon crystal, the resulting panel is monocrystalline. When
          they’re made of multiple silicon crystals, the resulting panel is
          polycrystalline (multicrystalline).
          <br />
          <br /> The efficiency of both types differ but they work the same way.{" "}
          <br />
          <br />
          Off grid solar panels trap sunlight and convert it into DC
          electricity. The one thing that should be taken care of at the time of
          installation is that the panels should not be clouded by shadows.
        </p>
      </div>
      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #2. Solar inverter
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          The power from solar panels is in the form of direct current. Home
          appliances run on AC power. This is where the solar inverter comes
          into the picture. It converts DC power into AC power. An off grid
          solar inverter, just like an on-grid inverter, is the heart of the
          solar system.
        </p>
      </div>
      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #3. Batteries
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          Off grid solar functions on batteries. During the sunshine hours, the
          electricity that the panels are producing is used to run the house.
          Whatever is extra is used to charge the batteries. That same power
          from the battery is then used to keep the house running at night.
        </p>
      </div>
      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #4. Charge controller
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          A charge controller is a crucial component of an off grid solar
          system. It regulates the voltage and current coming from the solar
          panels to the batteries. This ensures that the batteries are charged
          properly and prevents overcharging, which can damage the batteries.
        </p>
      </div>

      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #5. Mounting hardware
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          Mounting hardware is used to secure solar panels to the roof or
          ground. It is essential for ensuring that the panels are installed at
          the correct angle and orientation to maximize sunlight exposure.
          Proper mounting also helps protect the panels from wind and other
          environmental factors.
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #6. Solar accessories
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          You know the major components of an off grid solar system but there
          are other accessories without which the system will not be safe. Here
          are the accessories we’re talking about:
        </p>
         <ul className="text-orange-400 list-disc pl-4 marker:text-3xl my-auto marker:text-cyan-700 md:text-lg text-sm">
            <li>DC cables and DC combiner box</li>
            <li>AC cables and AC combiner box</li>
            <li>MC4 connectors</li>
            <li>Earthing strips and conduit trays</li>
            <li>Lightning arrester</li>
          </ul>
      </div>

      
    </div>
  );
}
