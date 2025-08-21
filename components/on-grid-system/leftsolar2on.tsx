"use client";

export default function Leftsolar2on() {
  return (
    <div className="mb-8 mt-4">
      <h2 className=" text-lg md:text-3xl font-bold text-cyan-700  my-2 mb-6">
        Components of the residential on-grid solar system
      </h2>
      {/* <p className="text-lg mb-2 md:text-xl text-orange-400">
        The generation of electricity in an on-grid solar system starts with
        solar panels and then goes through several steps to keep your house
        powered up during the day as well as at night.
      </p> */}
      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #1. Solar panels
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          Solar panels in a solar grid for home are the most visible parts.
          They’re installed on the rooftop, facing the South direction. When
          sunlight falls on these panels, they absorb that sunlight and convert
          it into electricity.
          <br />
          <br /> The solar electricity directly from the panels is in the form
          of DC power. Since homes require alternating current (AC), there’s the
          need for a solar inverter to convert direct current into alternating
          current.
          {/* Off grid solar panels trap sunlight and convert it into DC
          electricity. The one thing that should be taken care of at the time of
          installation is that the panels should not be clouded by shadows. */}
        </p>
      </div>
      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #2. Solar inverter
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          The entire solar system would have been an impractical model had there
          been no solar inverter. The solar inverter takes up the role of
          converting DC into AC.
          <br />
          <br />
          This conversion is essential because that’s the only way to convert
          electricity generated from an on-grid solar panel into a usable form
          (AC) that can run household appliances.
        </p>
      </div>
      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #3. Solar mounting structures
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          These are the pillars that carry the weight of solar panels. They have
          to be of a standard grade so that they can withstand heavy winds
          during storms & cyclones and hold the weight of the solar panels for
          25 years (that’s the life of a solar system).
          <br />
          <br />
          The best solar mounting structures are prefabricated in precision
          labs. They’re coated with hot-dip galvanizing on steel to make them
          rust-proof.
          <br />
          <br />
          They must be designed to sustain the wind speeds as defined for the
          installation location and height of the building.
        </p>
      </div>
      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #4. Solar accessories
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          These include the AC and DC cables that are required for wiring solar
          panels and connecting different parts to make the entire solar grid
          functional.
          <br />
          <br />
          The next most important accessories required to set up an on-grid
          solar system are DC combiner boxes and AC combiner boxes.
          <br />
          <br />
          A DC combiner box works like an isolation box. All the cables carrying
          DC current from the panels are isolated in this box. DC power coming
          from the panels can be as high as 1000 volts, even more. It’s
          dangerous (potentially lethal); hence, the requirement of a DC
          combiner box.
          <br />
          <br />
          This box feeds the DC current into the solar inverter and the solar
          inverter produces alternating current. This AC power is fed into an AC
          combiner box (all cables carrying the AC current from multiple
          inverters are combined in this box.)
          <br />
          <br />
          Once the entire on-grid solar system is set up, earthing is done using
          earthing strips and wires.
          <br />
          <br />
          <span className="text-cyan-700 font-bold">Please note:</span>all the
          DC cable connections are made using MC4 connectors.
        </p>
      </div>

      <div className="mb-4">
        {" "}
        <p className="font-bold md:text-xl text-lg mb-1 text-orange-400">
          #5. Bi-directional meter
        </p>
        <p className="text-lg md:text-xl text-orange-400">
          This is a smart tracking meter that is basically designed to keep a
          track of:
        </p>
        <ul className="list-disc pl-4 marker:text-2xl marker:text-cyan-700 md:text-lg text-sm mb-2">
          <li className="text-orange-400">Solar energy production</li>
          <li className="text-orange-400">Energy consumption</li>
        </ul>
        <p className="text-lg md:text-xl text-orange-400">
          An on-grid solar system does not get functional until and unless the
          regular meter is replaced with a bi-directional meter.
        </p>
      </div>
      {/* <div className="mb-4">
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
      </div> */}
    </div>
  );
}
