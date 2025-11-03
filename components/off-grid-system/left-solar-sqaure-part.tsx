"use client";

export default function LeftSolarPart() {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-3xl sm:text-5xl font-bold text-cyan-700 mb-4">
        About Sarvatra Energy
      </h2>
      <p className="text-orange-500 md:text-lg text-sm mb-4 leading-relaxed">
        Sarvatra Energy is born out of the passion to de-escalate pollution and
        escalate the adoption of mass solar. Two like-minded environment pros
        from IIT Bombay started Sarvatra Energy in 2015 as a two-member pack. Now,
        we’re the 3rd largest EPC contractor for residential installations in
        India. We’ve helped 25,000+ homes go solar and have been helping our
        customers save up to 90% on their monthly electricity bills. We install
        both on-grid and hybrid solar systems. In the near future, we will start
        the installation of off-grid solar systems too. Some of the services
        that have set us apart from other vendors include the following.
      </p>
      {/* ... keep the same left content as before ... */}
      <ul className="list-disc pl-4 marker:text-3xl marker:text-cyan-700 md:text-lg text-sm">
        <li className="text-orange-500"><p>We offer free solar consultation services</p></li>
        <li className="text-orange-500"><p>We use premium-quality prefabricated mounting structures that are resilient and durable enough to handle cyclonic wind speeds reaching up to 170 kmph</p></li>
        <li className="text-orange-500"><p>We offer easy, 10-minute loan approval</p></li>
        <li className="text-orange-500"><p>Our solar consultants and design team procures a 3D model of how solar would look on your rooftop within 15 minutes of the site survey</p></li>
        <li className="text-orange-500"><p>We offer many EMI schemes; zero-cost being the most popular one</p></li>
        <li className="text-orange-500"><p>We offer a 5-year AMC contract</p></li>
      </ul>
    </div>

    
  );
}
