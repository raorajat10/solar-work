"use client";

export default function Leftsolar3() {
  return (
    <div className=" flex flex-col items-center">
      <div>
        <h2 className="text-lg md:text-xl font-bold text-cyan-700  my-2 mb-6">
          Working of an off grid solar system for home
        </h2>
        <p className="text-orange-500 md:text-lg text-sm mb-4 leading-relaxed">
          The working of an off grid pv system isn’t super complex. We’ve
          simplified it for you. Have a look.
        </p>
      </div>
      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          Off grid solar panels absorb and trap sunlight, converting it into
          direct current (DC)
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-4">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          The DC current goes into a combiner box
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          From the combiner box, it goes into the solar charge controller
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          The charge controller gives current to the batteries and charges them
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          The charge controller also communicates with the off grid solar
          inverter
        </p>
      </div>
      <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span>

      <div className="mx-4">
        <p className="text-orange-500 md:text-lg text-sm mb-1 leading-relaxed">
          The off grid inverter converts DC power into AC power
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
      </div>
      {/* <span className="my-5 text-cyan-700 text-4xl text-center mb-2">⇩</span> */}
      <div className="text-center py-4">
        <h2 className="text-lg  md:text-xl font-bold text-cyan-700 mb-2">
          Off grid solar system with different capacities
        </h2>
        <p className="text-orange-500 md:text-lg text-sm mb-4 leading-relaxed">
          You know the components, you also know the functioning. So, it’s time
          that we walk you through the specifics of different types of off grid
          solar power plants. We’ve tabulated the details below.
        </p>
      </div>
    </div>
  );
}
