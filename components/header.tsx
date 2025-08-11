"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuData = [
    {
      name: "offerings",
      label: "Our Offerings",
      links: [
        { href: "/home", text: "Home" },
        { href: "/commercial", text: "Commercial" },
        { href: "/housing-societies", text: "Housing Societies" },
      ],
    },
    {
      name: "solutions",
      label: "Solar Solutions",
      links: [
        { href: "/off-grid", text: "Off-Grid" },
        { href: "/on-grid", text: "On-Grid" },
      ],
    },
    {
      name: "about",
      label: "About Us",
      links: [
        { href: "/company-profile", text: "Company Profile" },
        { href: "/our-team", text: "Our Team" },
        { href: "/mission-vision", text: "Mission & Vision" },
      ],
    },
    {
      name: "more",
      label: "More",
      links: [
        { href: "/solar-calculator", text: "Solar Calculator" },
        { href: "/webinars", text: "Webinars" },
        { href: "/solar-pro", text: "Solar Pro" },
        { href: "/careers", text: "Careers" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-orange-400">
          Sarvatra Energy
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuData.map((menu) => (
            <div
              key={menu.name}
              className="relative"
              onMouseEnter={() => setDesktopDropdown(menu.name)}
              onMouseLeave={() => setDesktopDropdown(null)}
            >
              <button className="text-orange-400">{menu.label}</button>
              {desktopDropdown === menu.name && (
                <div className="absolute left-0 top-full bg-white border rounded-lg shadow-lg mt-0 z-50">
                  {menu.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/projects" className="text-orange-400">
            Projects
          </Link>
          <Link href="/contact" className="text-orange-400">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          {menuData.map((menu) => (
            <div key={menu.name}>
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="w-full px-4 py-2 flex justify-between items-center"
              >
                {menu.label} {openDropdown === menu.name ? "▲" : "▼"}
              </button>
              {openDropdown === menu.name && (
                <div className="pl-6">
                  {menu.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/projects" className="block px-4 py-2">
            Projects
          </Link>
          <Link href="/contact" className="block px-4 py-2">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
