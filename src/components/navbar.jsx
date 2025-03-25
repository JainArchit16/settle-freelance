"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const services = [
    { name: "Personal Loan Settlement", href: "/services/personal-loan" },
    {
      name: "Credit Card Loan Settlement",
      href: "/services/credit-card",
    },
    {
      name: "Anti-Harassment Service",
      href: "/services/anti-harassment",
    },
    { name: "Credit Score Builder", href: "/services/credit-score" },
    { name: "Home Loan Settlement", href: "/services/home-loan" },
    { name: "Vehicle Loan Settlement", href: "/services/vehicle-loan" },
    { name: "Education Loan Settlement", href: "/services/education-loan" },
  ];

  const settlements = [
    {
      name: "One Time Settlement (OTS)",
      href: "/categories/one-time-settlement",
    },
    {
      name: "OTS With Credit Clearance",
      href: "/categories/ots-with-credit-clearance",
    },
    {
      name: "Structured Settlement",
      href: "/categories/structured-settlement",
    },
    {
      name: "Structured Settlement With Cleared Clearance",
      href: "/categories/structured-cleared-clearance",
    },
    {
      name: "Moratorium Period Settlement",
      href: "/categories/moratorium-settlement",
    },
    {
      name: "Reversed Dues Settlement",
      href: "/categories/reversed-dues-settlement",
    },
    {
      name: "Statute Barred Settlement",
      href: "/categories/statute-barred-settlement",
    },
    {
      name: "Prepayment Settlement",
      href: "/categories/prepayment-settlement",
    },
  ];
  return (
    <nav className="w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-0 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48 md:h-20 md:w-60">
            <Image
              src="/logowbg.png"
              alt="Settle Loan Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            href="/"
            className="text-black hover:text-green-600 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-black hover:text-green-600 font-medium"
          >
            About Us
          </Link>
          <div className="relative group">
            <Link
              href="/services"
              className="text-black hover:text-green-600 font-medium flex items-center"
            >
              Services <span className="ml-1">▾</span>
            </Link>
            <div className="absolute left-0 pt-2 w-52 bg-white shadow-lg rounded-md hidden group-hover:block z-40">
              <div className="py-1 flex flex-nowrap flex-col">
                {services.map((loan, index) => (
                  <Link
                    key={index}
                    href={loan.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {loan.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link
              href="/categories"
              className="text-black hover:text-green-600 font-medium flex items-center"
            >
              Categories<span className="ml-1">▾</span>
            </Link>

            <div className="absolute -left-10 pt-2 w-52 bg-white shadow-lg rounded-md hidden group-hover:block z-40">
              <div className="py-1 flex flex-nowrap flex-col">
                {settlements.map((loan, index) => (
                  <Link
                    key={index}
                    href={loan.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {loan.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <Link
            href="/testimonials"
            className="text-black hover:text-green-600 font-medium"
          >
            Testimonials
          </Link> */}
          {/* <Link
            href="/blog"
            className="text-black hover:text-green-600 font-medium"
          >
            Blog
          </Link> */}
          {/* <Link
            href="/careers"
            className="text-black hover:text-green-600 font-medium"
          >
            Careers
          </Link> */}
          <Link
            href="/contact"
            className="text-black hover:text-green-600 font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-md z-40">
            <div className="flex flex-col px-4 py-2">
              <Link
                href="/"
                className="py-2 text-black hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="py-2 text-black hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="py-2 group z-40">
                <button className="flex items-center justify-between w-full text-left text-black hover:text-green-600">
                  Services <span>▾</span>
                </button>

                <div className="pl-4 mt-1 hidden group-hover:block z-40">
                  {services.map((settlement, index) => (
                    <Link
                      key={index}
                      href={settlement.href}
                      className="block py-2 text-sm text-gray-700 hover:text-green-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {settlement.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="py-2 group">
                <button className="flex items-center justify-between w-full text-left text-black hover:text-green-600">
                  Categories <span>▾</span>
                </button>
                <div className="pl-4 mt-1 hidden group-hover:block">
                  {settlements.map((settlement, index) => (
                    <Link
                      key={index}
                      href={settlement.href}
                      className="block py-2 text-sm text-gray-700 hover:text-green-600 "
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {settlement.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className="py-2 text-black hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
