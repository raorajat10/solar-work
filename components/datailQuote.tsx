'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function DetailQuote() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    bill: '',
    pincode: '',
    city: '',
    email: '',
    terms: false,
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleBillSelect = (bill: string) => {
    setFormData({ ...formData, bill });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('✅ Message sent successfully!');
      setFormData({
        name: '',
        whatsapp: '',
        bill: '',
        pincode: '',
        city: '',
        email: '',
        terms: false,
      });
    } catch (error) {
      setStatus('❌ Failed to send message. Try again.');
      console.error(error);
    }
  };

  return (
    <section id="get-quote" className="bg-gradient-to-r from-orange-600 to-blue-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-3xl sm:text-6xl font-bold mb-4">
            Schedule a <span className="text-orange-400">FREE consultation</span> <br /> with us today!
          </h2>
          <p className="text-white text-2xl max-w-md">
            Get genuine advice from our solar experts.<br />
            No pressure, book only if you are satisfied!
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-cyan-700 font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
              <input name="name" value={formData.name} onChange={handleChange}
                type="text" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-cyan-700 font-medium mb-1">WhatsApp Number <span className="text-red-500">*</span></label>
              <input name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                type="tel" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>

            {/* Monthly Bill */}
            <div>
              <label className="block text-cyan-700 font-medium mb-2">Monthly Electricity Bill <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-2">
                {["Less than ₹1500", "₹1500 – ₹2500", "₹2500 – ₹4000", "₹4000 – ₹8000", "More than ₹8000"].map((option) => (
                  <button key={option} type="button"
                    onClick={() => handleBillSelect(option)}
                    className={`px-4 py-2 border rounded-lg ${formData.bill === option ? 'bg-orange-500 text-white' : 'text-cyan-700 hover:bg-orange-500 hover:text-white'}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Pin Code & City */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-cyan-700 font-medium mb-1">Pin code <span className="text-red-500">*</span></label>
                <input name="pincode" value={formData.pincode} onChange={handleChange}
                  type="text" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div>
                <label className="block text-cyan-700 font-medium mb-1">City</label>
                <input name="city" value={formData.city} onChange={handleChange}
                  type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-cyan-700 font-medium mb-1">Email</label>
              <input name="email" value={formData.email} onChange={handleChange}
                type="email" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2 text-sm">
              <input name="terms" checked={formData.terms} onChange={handleChange}
                type="checkbox" className="h-4 w-4 text-cyan-500 border-gray-300 rounded" required />
              <span className="text-orange-400">
                I agree to Sarvatra Energy's <a href="#" className="text-cyan-500">terms of service</a> & <a href="#" className="text-cyan-500">privacy policy</a>
              </span>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-orange-400 text-white font-medium py-3 rounded-lg hover:bg-orange-700">
              Yes! Reduce my electricity bill
            </button>

            {status && <p className="text-center text-sm mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
