import { Sun } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
                <span className="text-lg sm:text-xl font-bold">SolarTech India</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Leading solar energy solutions provider in India, committed to clean energy and customer satisfaction.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li>Solar Installation</li>
                <li>System Maintenance</li>
                <li>Energy Consultation</li>
                <li>Government Subsidies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li>About Us</li>
                <li>Our Projects</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li>📞 +91-9876543210</li>
                <li>✉️ info@solartechindia.com</li>
                <li>📍 Mumbai, Delhi, Bangalore</li>
                <li>🕒 24/7 Support Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; 2024 SolarTech India. All rights reserved. | Powering India's Solar Future
            </p>
          </div>
        </div>
      </footer>
    )
  }