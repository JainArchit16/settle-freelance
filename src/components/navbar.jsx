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

  return (
    <nav className="w-full bg-white shadow-sm">
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
            <div className="absolute left-0 pt-2 w-52 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
              <div className="py-1 flex flex-nowrap flex-col">
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Personal Loan Settlement
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Credit Card Loan Settlement
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Anti-Harassment Service
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Credit Score Builder
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Home Loan Settlement
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Vehicle Loan Settlement
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Education Loan Settlement
                </Link>
              </div>
            </div>
          </div>
          {/* One Time Settlement (OTS)
OTS With Credit Clearance
structured Settlement
Structured Settlement With Cleared Clearance
Moratorium Period Settlement
Reversed dues Settlement
Statute Barred Settlement
Prepayment Settlement */}
          <div className="relative group">
            <Link
              href="/categories"
              className="text-black hover:text-green-600 font-medium flex items-center"
            >
              Categories <span className="ml-1">▾</span>
            </Link>

            <div className="absolute -left-10 pt-2 w-52 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
              <div className="py-1 flex flex-nowrap flex-col">
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  One Time Settlement (OTS)
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  OTS With Credit Clearance
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Structured Settlement
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Structured Settlement With Cleared Clearance
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Moratorium Period Settlement
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Reversed dues Settlement
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Statute Barred Settlement
                </Link>
                <Link
                  href="/categories/personal-loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Prepayment Settlement
                </Link>
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
          <div className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-md z-20">
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
              <div className="py-2">
                <button className="flex items-center justify-between w-full text-left text-black hover:text-green-600">
                  Services <span>▾</span>
                </button>
                <div className="pl-4 mt-1">
                  <Link
                    href="/services/loan-settlement"
                    className="block py-2 text-sm text-gray-700 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Loan Settlement
                  </Link>
                  <Link
                    href="/services/debt-relief"
                    className="block py-2 text-sm text-gray-700 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Debt Relief
                  </Link>
                </div>
              </div>
              <div className="py-2">
                <button className="flex items-center justify-between w-full text-left text-black hover:text-green-600">
                  Categories <span>▾</span>
                </button>
                <div className="pl-4 mt-1">
                  <Link
                    href="/categories/personal-loans"
                    className="block py-2 text-sm text-gray-700 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Personal Loans
                  </Link>
                  <Link
                    href="/categories/credit-cards"
                    className="block py-2 text-sm text-gray-700 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Credit Cards
                  </Link>
                </div>
              </div>
              <Link
                href="/testimonials"
                className="py-2 text-black hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                className="py-2 text-black hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="py-2 text-black hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="py-2 text-black hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
