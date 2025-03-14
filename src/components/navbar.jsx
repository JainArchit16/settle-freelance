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
    { name: "Personal Loan Settlement", href: "/categories/personal-loans" },
    {
      name: "Credit Card Loan Settlement",
      href: "/categories/credit-card-loans",
    },
    {
      name: "Anti-Harassment Service",
      href: "/categories/anti-harassment-service",
    },
    { name: "Credit Score Builder", href: "/categories/credit-score-builder" },
    { name: "Home Loan Settlement", href: "/categories/home-loans" },
    { name: "Vehicle Loan Settlement", href: "/categories/vehicle-loans" },
    { name: "Education Loan Settlement", href: "/categories/education-loans" },
  ];

  const settlements = [
    {
      name: "One Time Settlement (OTS)",
      href: "/services/one-time-settlement",
    },
    {
      name: "OTS With Credit Clearance",
      href: "/services/ots-credit-clearance",
    },
    { name: "Structured Settlement", href: "/services/structured-settlement" },
    {
      name: "Structured Settlement With Cleared Clearance",
      href: "/services/structured-cleared-clearance",
    },
    {
      name: "Moratorium Period Settlement",
      href: "/services/moratorium-settlement",
    },
    {
      name: "Reversed Dues Settlement",
      href: "/services/reversed-dues-settlement",
    },
    {
      name: "Statute Barred Settlement",
      href: "/services/statute-barred-settlement",
    },
    { name: "Prepayment Settlement", href: "/services/prepayment-settlement" },
  ];
  return (
    <nav className="w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48 md:h-14 md:w-56">
            <Image
              src="/logo.png"
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
          <a
            href="#callback-section"
            className="text-black hover:text-green-600 font-medium"
          >
            Contact
          </a>
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
                href="/"
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
