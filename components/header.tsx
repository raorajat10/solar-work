"use client"
import Link from "next/link";
import { useState } from "react"
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Building,
  Users,
  Sun,
  Zap,
  Shield,
  Wrench,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NavHead() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div className="text-orange-400 font-bold text-lg">
                <span className="text-2xl text-orange-400"> Sarvatra Energy</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Our Offerings Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("offerings")}
                  className="flex items-center space-x-1 text-cyan-700 hover:text-orange-400 font-medium"
                >
                  <span className="text-lg">Our Offerings</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "offerings" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                    <a
                      href="/offerings/home"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <Home className="w-4 h-4 mr-3" />
                    Home
                    </a>
                    <a
                      href="/offerings/commercial"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <Building className="w-4 h-4 mr-3" />
                      Commercial
                    </a>
                    <a
                      href="/offerings/institution"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <Users className="w-4 h-4 mr-3" />
                      institution
                    </a>
                  </div>
                )}
              </div>

              {/* Solar Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("solutions")}
                  className="flex items-center space-x-1 text-cyan-700 hover:text-orange-400 font-medium"
                >
                  <span className="text-lg">Solar Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                    <a
                      href="#grid-tied"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <Zap className="w-4 h-4 mr-3" />
                      Grid-Tied Systems
                    </a>
                    <a
                      href="#off-grid"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <Shield className="w-4 h-4 mr-3" />
                      Off-Grid Systems
                    </a>
                    <a
                      href="#maintenance"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <Wrench className="w-4 h-4 mr-3" />
                      Maintenance
                    </a>
                  </div>
                )}
              </div>

              {/* Our Presence Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("presence")}
                  className="flex items-center space-x-1 text-cyan-700 hover:text-orange-400 font-medium"
                >
                  <span className="text-lg">Our Presence</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "presence" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                    <a
                      href="#locations"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <MapPin className="w-4 h-4 mr-3" />
                      Our Locations
                    </a>
                    <a
                      href="#projects"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <Building className="w-4 h-4 mr-3" />
                      Completed Projects
                    </a>
                  </div>
                )}
              </div>

              {/* Blog */}
              <a href="#blog" className="text-cyan-700 hover:text-orange-400 font-medium">
                Blog
              </a>

              {/* More Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("more")}
                  className="flex items-center space-x-1 text-cyan-700 hover:text-orange-400 font-medium"
                >
                  <span className="text-lg">More</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "more" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                    <a
                      href="#about"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <Users className="w-4 h-4 mr-3" />
                      About Us
                    </a>
                    <a
                      href="#contact"
                      className="flex items-center px-4 py-2 text-cyan-700 hover:bg-blue-50 hover:text-orange-400"
                    >
                      <Phone className="w-4 h-4 mr-3" />
                      Contact
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-orange-400 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-medium">
                Sign up for free electricity
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-cyan-700 hover:text-blue-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-cyan-700 hover:text-blue-600">
                  Home
                </a>
                <a href="#commercial" className="block px-3 py-2 text-cyan-700 hover:text-blue-600">
                  Commercial
                </a>
                <a href="#solutions" className="block px-3 py-2 text-cyan-700 hover:text-blue-600">
                  Solar Solutions
                </a>
                <a href="#blog" className="block px-3 py-2 text-cyan-700 hover:text-blue-600">
                  Blog
                </a>
                <a href="#about" className="block px-3 py-2 text-cyan-700 hover:text-blue-600">
                  About Us
                </a>
                <a href="#contact" className="block px-3 py-2 text-cyan-700 hover:text-blue-600">
                  Contact
                </a>
                <div className="pt-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Sign up for free electricity
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    )}