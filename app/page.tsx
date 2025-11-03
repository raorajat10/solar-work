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
import NavHead from "@/components/header"
import HomeOfferingsPage from "./offerings/home/page"


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
     
     <HomeOfferingsPage />
    </div>
  )
}
