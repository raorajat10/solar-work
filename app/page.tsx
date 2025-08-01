"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { useEffect } from 'react'
import {
  Sun,
  Zap,
  Shield,
  Users,
  Star,
  CheckCircle,
  Home,
  Building,
  Wrench,
  MessageSquare,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { Carousel } from "@/components/carousel"
import { MultiCardCarousel } from "@/components/multi-card-carousel"
import WhyChooseSection from "@/components/WhyChooseSection"
import SprinkleParticles from "@/components/sprinkel"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  
// useEffect(() => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0')
//           entry.target.classList.remove('opacity-0', '-translate-y-6')
//         }
//       })
//     },
//     {
//       threshold: 0.2,
//     }
//   )

//   const targets = document.querySelectorAll('.animate-on-scroll')
//   targets.forEach((el) => observer.observe(el))

//   return () => {
//     targets.forEach((el) => observer.unobserve(el))
//   }
// }, [])

  const serviceCards = [
    {
      icon: Sun,
      title: "Solar Distribution",
      content:
        "We supply high-quality solar panels, inverters, and components from leading manufacturers. Our distribution network ensures reliable access to premium solar equipment across India.",
    },
    {
      icon: Home,
      title: "Residential Installation",
      content:
        "Professional installation of rooftop solar systems for homes with complete setup and commissioning. We handle everything from design to grid connection for hassle-free solar adoption.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      content:
        "Comprehensive maintenance services including cleaning, monitoring, and repairs to ensure optimal performance. Our 24/7 support team keeps your solar system running at peak efficiency.",
    },
    {
      icon: MessageSquare,
      title: "Solar Consultation",
      content:
        "Expert consultation services for system sizing, feasibility studies, and energy audits. We provide customized solar solutions based on your specific energy needs and budget.",
    },
  ]

  const detailedServices = [
    {
      icon: Home,
      title: "Residential Solar Installation",
      content:
        "Complete rooftop solar system installation for homes with professional design and engineering. Includes permits, grid connection, and warranty support for worry-free solar adoption.",
    },
    {
      icon: Zap,
      title: "Grid-Tied Systems",
      content:
        "Connected to the electricity grid allowing excess power to be fed back and earn credits. Perfect for urban areas with reliable grid infrastructure and net metering policies.",
    },
    {
      icon: Shield,
      title: "Off-Grid Systems",
      content:
        "Independent solar systems with battery storage for complete energy self-sufficiency. Ideal for remote locations or areas with unreliable grid power supply.",
    },
    {
      icon: Building,
      title: "Commercial Solar Solutions",
      content:
        "Large-scale solar installations for businesses, factories, and institutions with custom design. Includes financing options and performance monitoring for maximum ROI and efficiency.",
    },
  ]

  const benefitCards = [
    {
      icon: Zap,
      title: "Massive Cost Savings",
      content:
        "Reduce electricity bills by 80-90% and achieve payback within 4-5 years. With rising electricity tariffs, solar provides long-term protection against increasing energy costs.",
    },
    {
      icon: Shield,
      title: "Environmental Protection",
      content:
        "Reduce carbon footprint by 3-4 tons of CO2 annually per household. Solar energy is completely clean and renewable, helping combat climate change and air pollution.",
    },
    {
      icon: Home,
      title: "Increased Property Value",
      content:
        "Solar installations increase property value by 15-20% and make homes more attractive to buyers. Properties with solar systems sell faster in the real estate market.",
    },
    {
      icon: Sun,
      title: "Energy Independence",
      content:
        "Generate your own electricity and reduce dependence on grid power. With battery storage, enjoy uninterrupted power supply even during outages and load shedding.",
    },
    {
      icon: CheckCircle,
      title: "Government Incentives",
      content:
        "Benefit from central and state government subsidies up to 40% of system cost. Additional tax benefits and accelerated depreciation make solar even more affordable.",
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      content:
        "Solar systems require minimal maintenance with 25-year performance warranties. Simple cleaning and periodic checks ensure optimal performance for decades.",
    },
  ]

  const projectCards = [
    {
      title: "Mumbai Villa - 5kW System",
      description: "Premium rooftop installation",
      capacity: "5kW (20 panels)",
      generation: "7,500 units",
      savings: "₹6,500",
      payback: "4.2 years",
      co2: "3.8 tons/year",
    },
    {
      title: "Bangalore Apartment - 3kW System",
      description: "Compact rooftop solution",
      capacity: "3kW (12 panels)",
      generation: "4,800 units",
      savings: "₹4,200",
      payback: "3.8 years",
      co2: "2.4 tons/year",
    },
    {
      title: "Delhi Farmhouse - 10kW System",
      description: "Large-scale residential installation",
      capacity: "10kW (40 panels)",
      generation: "14,000 units",
      savings: "₹12,000",
      payback: "4.5 years",
      co2: "7.2 tons/year",
    },
    {
      title: "Chennai Office - 25kW System",
      description: "Commercial solar installation",
      capacity: "25kW (100 panels)",
      generation: "35,000 units",
      savings: "₹28,000",
      payback: "4.0 years",
      co2: "18 tons/year",
    },
    {
      title: "Pune Factory - 50kW System",
      description: "Industrial solar solution",
      capacity: "50kW (200 panels)",
      generation: "70,000 units",
      savings: "₹55,000",
      payback: "3.8 years",
      co2: "35 tons/year",
    },
  ]

  const testimonials = [
    {
      rating: 5,
      title: "Exceptional Service & Savings",
      content:
        "SarvatraEnergy India transformed our energy bills completely! Our monthly electricity cost dropped from ₹7,200 to just ₹800. The installation was professional and the team guided us through every step. We're saving over ₹75,000 annually now!",
      name: "Priya Mehta",
      location: "Homeowner, Mumbai",
    },
    {
      rating: 5,
      title: "Outstanding ROI & Support",
      content:
        "Best investment we ever made! Our 8kW system has been running flawlessly for 2 years. Monthly savings of ₹9,500 mean we'll recover our investment in just 4 years. The monitoring app and customer support are excellent.",
      name: "Amit Patel",
      location: "Business Owner, Ahmedabad",
    },
    {
      rating: 5,
      title: "Reliable & Profitable",
      content:
        "Three years with SarvatraEnergy India and we've saved ₹2.1 lakhs already! The system performs exactly as promised. No maintenance issues, great monitoring, and the team is always available for support. Highly recommend to everyone!",
      name: "Dr. Sunita Rao",
      location: "Homeowner, Bangalore",
    },
    {
      rating: 5,
      title: "Professional Excellence",
      content:
        "From consultation to installation, everything was perfect. Our 12kW system generates more power than expected. Monthly savings of ₹15,000 and excellent after-sales service. SolarTech India exceeded all expectations!",
      name: "Vikram Singh",
      location: "Villa Owner, Gurgaon",
    },
    {
      rating: 5,
      title: "Clean Energy Champion",
      content:
        "Not just saving money but also contributing to environment! Our solar system has prevented 25 tons of CO2 emissions in 3 years. Great quality panels and inverters. Proud to be part of clean energy revolution!",
      name: "Kavita Sharma",
      location: "Eco-conscious Homeowner, Jaipur",
    },
  ]

  const companyPhotos = [
    {
      image: "/images/company-office.jpg",
      title: "Modern Office Headquarters",
      description: "Our state-of-the-art office in Mumbai with latest technology and customer service center",
    },
    {
      image: "/images/company-team.jpg",
      title: "Expert Team Meeting",
      description: "Our certified engineers and technicians planning solar installations across India",
    },
    {
      image: "/images/company-warehouse.jpg",
      title: "Solar Equipment Warehouse",
      description: "Massive inventory of premium solar panels, inverters and components from top manufacturers",
    },
    {
      image: "/images/company-installation-team.jpg",
      title: "Professional Installation Team",
      description: "Our skilled installation crew working on a rooftop solar project with safety protocols",
    },
    {
      image: "/images/company-lab.jpg",
      title: "Quality Testing Laboratory",
      description: "Advanced testing facility ensuring all solar components meet international quality standards",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-lg sm:text-2xl font-bold text-gray-900">SarvatraEnergy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-orange-500 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="#benefits" className="text-gray-600 hover:text-orange-500 transition-colors">
                Benefits
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-orange-500 transition-colors">
                Projects
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-orange-500 transition-colors">
                Reviews
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-sm sm:text-base px-3 sm:px-4">Get Quote</Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
              <nav className="py-4 space-y-2">
                <Link
                  href="#services"
                  className="block px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="block px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#benefits"
                  className="block px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefits
                </Link>
                <Link
                  href="#projects"
                  className="block px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#testimonials"
                  className="block px-4 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{ backgroundImage: "url(/images/solar-hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Power Your Future with
            <span className="text-orange-400"> Clean Solar Energy</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to SarvatraEnergy India, your trusted partner in harnessing the power of the sun! We are a leading solar
            energy company dedicated to transforming homes and businesses across India with sustainable, affordable, and
            reliable solar solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-base sm:text-lg px-6 sm:px-8">
              <Zap className="mr-2 h-5 w-5" />
              Start Your Solar Journey
            </Button>
           <div className="relative group w-fit">

  {/* Sprinkle particles */}
 <div className="relative group w-fit">
  <Button
    size="lg"
    variant="outline"
    className="relative z-10 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent text-base sm:text-lg px-6 sm:px-8 overflow-hidden"
  >
    <MessageSquare className="mr-2 h-5 w-5" />
    Free Consultation
  </Button>

  {/* Sprinkle Effect */}
  <SprinkleParticles />
</div>
</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="py-12 sm:py-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/solar-panels-field.jpg)" }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
  Our Mission & Purpose
</h2>

            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At SarvatraEnergy India, our mission is to accelerate India's transition to clean, renewable energy by making
              solar power accessible and affordable for every household and business. We believe in empowering
              communities with sustainable energy solutions that not only reduce carbon footprints but also provide
              long-term financial savings.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section with Company Photos */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About SarvatraEnergy India</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over a decade of experience in the solar industry, we have established ourselves as India's most
              trusted solar energy partner. Our state-of-the-art facilities, expert team, and commitment to quality make
              us the preferred choice for thousands of customers.
            </p>
          </div>

          <Carousel autoPlay={true} interval={5000} className="max-w-4xl mx-auto">
            {companyPhotos.map((photo, index) => (
              <div key={index} className="relative">
                <div
                  className="h-64 sm:h-80 md:h-96 bg-cover bg-center bg-no-repeat rounded-lg"
                  style={{ backgroundImage: `url(${photo.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{photo.title}</h3>
                    <p className="text-sm sm:text-base text-white/90">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">Our Solar Services</h2>
            <p className="text-base sm:text-lg text-gray-600">Comprehensive solar solutions tailored to your needs</p>
          </div>

          <MultiCardCarousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 2 }} autoPlay={true} interval={5000}>
            {serviceCards.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg  h-full ">
                  <CardHeader className="pb-4">
                    <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mx-auto mb-4" />
                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.content}</p>
                  </CardContent>
                </Card>
              )
            })}
          </MultiCardCarousel>

          {/* Detailed Service Explanations */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">Service Details</h3>

            <MultiCardCarousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 2 }} autoPlay={true} interval={6000}>
              {detailedServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg  h-full ">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-lg sm:text-xl">
                        <IconComponent className="mr-2 h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span className="leading-tight">{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.content}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </MultiCardCarousel>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseSection />

      {/* Testimonials Section */}
      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-12 sm:py-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/solar-benefits-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-orange-50/95"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">Benefits of Solar Power in India</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Solar power offers tremendous advantages for Indian homes and businesses. By harnessing abundant sunlight,
              you can significantly reduce electricity costs while protecting the environment.
            </p>
          </div>

          <MultiCardCarousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 2 }} autoPlay={true} interval={4500}>
            {benefitCards.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-green-600 text-lg sm:text-xl">
                      <IconComponent className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="leading-tight">{benefit.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.content}</p>
                  </CardContent>
                </Card>
              )
            })}
          </MultiCardCarousel>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Successful Solar Projects</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Real examples of our solar installations and their impact
            </p>
          </div>

          <MultiCardCarousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 2 }} autoPlay={true} interval={5500}>
            {projectCards.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-4">
                  <Badge className="w-fit mb-2">Residential Project</Badge>
                  <CardTitle className="text-lg sm:text-xl leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Capacity:</span>
                      <span>{project.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Annual Generation:</span>
                      <span>{project.generation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Monthly Savings:</span>
                      <span className="text-green-600 font-semibold">{project.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Payback Period:</span>
                      <span>{project.payback}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">CO2 Reduction:</span>
                      <span className="text-green-600">{project.co2}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </MultiCardCarousel>

          {/* Case Study */}
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200 mt-8 sm:mt-12">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-orange-500">Featured Case Study</Badge>
              <CardTitle className="text-xl sm:text-2xl leading-tight">
                Sharma Family, Gurgaon - Complete Energy Transformation
              </CardTitle>
              <CardDescription className="text-base sm:text-lg">
                How a 6kW solar system changed everything
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">The Challenge</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      The Sharma family was facing monthly electricity bills of ₹8,500 in their 3BHK home in Gurgaon.
                      With frequent power cuts and rising tariffs, they were looking for a sustainable solution.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Our Solution</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      We installed a 6kW grid-tied solar system with 24 high-efficiency panels and a German inverter.
                      The system was designed to cover 85% of their electricity consumption.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm sm:text-base">Outstanding Results</h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span>Monthly Bill Reduction:</span>
                      <span className="font-semibold text-green-600">₹8,500 → ₹1,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Annual Savings:</span>
                      <span className="font-semibold text-green-600">₹87,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span>System Payback:</span>
                      <span className="font-semibold">3.9 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span>25-year Savings:</span>
                      <span className="font-semibold text-green-600">₹18.5 lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CO2 Reduction:</span>
                      <span className="font-semibold text-green-600">4.5 tons/year</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded-lg border">
                    <p className="text-xs sm:text-sm italic text-gray-600 leading-relaxed">
                      "We're amazed by the results! Our electricity bills have dropped by 86% and we're contributing to
                      a cleaner environment. SolarTech India's professional service exceeded our expectations."
                    </p>
                    <p className="text-xs sm:text-sm font-semibold mt-2">- Mr. Rajesh Sharma</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">What Our Customers Say</h2>
            <p className="text-base sm:text-lg text-gray-600">Real reviews from satisfied solar customers</p>
          </div>

          <Carousel autoPlay={true} interval={6000} className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 sm:px-4">
                <Card className="bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg sm:text-xl leading-tight">{testimonial.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">Ready to Start Saving with Solar?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who are saving money and protecting the environment with solar energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8">
              <Sun className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
           <div className="relative group w-fit">
             <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent text-base sm:text-lg px-6 sm:px-8"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            {/* Sprinkle Effect */}
            <SprinkleParticles />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}
