"use client";

export default function Leftsolar3on() {
  return (
    <div className=" flex flex-col items-center">
      <div>
        <h2 className="text-lg md:text-xl font-bold text-cyan-700  my-2 mb-6">
          The working of an on-grid solar system for home
        </h2>
        <p className="text-orange-500 md:text-lg text-sm mb-4 leading-relaxed">
          The generation of electricity in an on-grid solar system starts with
          solar panels and then goes through several steps to keep your house
          powered up during the day as well as at night.
        </p>
      </div>
      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          Solar panels absorb sunlight and convert it into direct current (DC)
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-4">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          The DC current goes into the inverter that converts it into
          alternating current (AC)
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          The alternating current is fed into a bidirectional meter
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          The bi-directional meter supplies AC power to your home to run all
          household appliances
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          This meter supplies excess electricity (units that are not consumed)
          to the grid
        </p>
      </div>
      {/* <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span> */}

      {/* <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          When the exported units are needed later (eg. at night), the bi-directional meter imports them from the grid
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          Most off grid solar inverters nowadays have built-in battery
          management systems
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 text-center leading-relaxed">
          The solar inverter finally passes the AC current to run household
          appliances
        </p>
      </div> */}
      {/* <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span> */}

      <p className="text-orange-500 md:text-lg text-sm mb-4 leading-relaxed">
        The exchange of electricity back and forth from the grid via the
        bi-directional meter is called net metering.
      </p>
    </div>
  );
}
