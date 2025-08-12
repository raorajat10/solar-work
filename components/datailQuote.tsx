"'use client'";

export default function DetailQuote() {
  return (

<section className="bg-gradient-to-r from-orange-600 to-blue-300 py-12">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* <!-- Left Content --> */}
    <div className="text-white">
      <h2 className="text-3xl sm:text-6xl font-bold mb-4">
        Schedule a <span className="text-orange-400">FREE consultation</span> <br /> with us today!
      </h2>
      <p className="text-white text-2xl max-w-md">
        Get genuine advice from our solar experts.<br />
        No pressure, book only if you are satisfied!
      </p>
    </div>

    {/* <!-- Right Form --> */}
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <form className="space-y-4">

        {/* <!-- Full Name --> */}
        <div>
          <label className="block font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
{/* 
        <!-- WhatsApp Number --> */}
        <div>
          <label className="block font-medium mb-1">WhatsApp number <span className="text-red-500">*</span></label>
          <input type="tel" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>

        {/* <!-- Monthly Bill --> */}
        <div>
          <label className="block font-medium mb-2">Monthly Electricity Bill <span className="text-red-500">*</span></label>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="px-4 py-2 border rounded-lg hover:bg-cyan-50">Less than ₹1500</button>
            <button type="button" className="px-4 py-2 border rounded-lg hover:bg-cyan-50">₹1500 – ₹2500</button>
            <button type="button" className="px-4 py-2 border rounded-lg hover:bg-cyan-50">₹2500 – ₹4000</button>
            <button type="button" className="px-4 py-2 border rounded-lg hover:bg-cyan-50">₹4000 – ₹8000</button>
            <button type="button" className="px-4 py-2 border rounded-lg hover:bg-cyan-50">More than ₹8000</button>
          </div>
        </div>

        {/* <!-- Pin Code & City --> */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-medium mb-1">Pin code <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div>
            <label className="block font-medium mb-1">City</label>
            <input type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
        </div>

        {/* <!-- Email --> */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>

        {/* <!-- Terms --> */}
        <div className="flex items-center space-x-2 text-sm">
          <input type="checkbox" className="h-4 w-4 text-cyan-500 border-gray-300 rounded" />
          <span>I agree to SolarSquare's <a href="#" className="text-cyan-500">terms of service</a> & <a href="#" className="text-cyan-500">privacy policy</a></span>
        </div>

        {/* <!-- Submit Button --> */}
        <button type="submit" className="w-full bg-orange-400 text-white font-medium py-3 rounded-lg hover:bg-orange-700">
          Yes! Reduce my electricity bill
        </button>
      </form>
    </div>
  </div>
</section>
  );
}