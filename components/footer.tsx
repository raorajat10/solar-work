import { Sun } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-8 sm:py-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                <span className="text-lg sm:text-xl text-orange-400 font-bold">SolarTech India</span>
              </div>
              <p className="text-sm sm:text-base text-cyan-700 leading-relaxed">
                Leading solar energy solutions provider in India, committed to clean energy and customer satisfaction.
              </p>
            </div>
            <div className="cursor-pointer">
              <h3 className="font-semibold text-cyan-700 mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm  text-cyan-500">
                <li className="hover:text-orange-400">Solar Installation</li>
                <li className="hover:text-orange-400">System Maintenance</li>
                <li className="hover:text-orange-400">Energy Consultation</li>
                <li className="hover:text-orange-400">Government Subsidies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-700 mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm  text-cyan-500">
                <li className="hover:text-orange-400">About Us</li>
                <li className="hover:text-orange-400">Our Projects</li>
                <li className="hover:text-orange-400">Careers</li>
                <li className="hover:text-orange-400">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-700 mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm  text-cyan-500">
                <li className="hover:text-orange-400">📞 +91-9876543210</li>
                <li className="hover:text-orange-400">✉️ info@solartechindia.com</li>
                <li className="hover:text-orange-400">📍 Mumbai, Delhi, Bangalore</li>
                <li className="hover:text-orange-400">🕒 24/7 Support Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-lg text-cyan-500">
              &copy; 2024 SolarTech India. All rights reserved. | Powering India's Solar Future
            </p>
          </div>
        </div>
      </footer>
    )
  }