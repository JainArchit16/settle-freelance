import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e1621] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/personal-loan" className="hover:text-green-500">
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link href="/credit-card-loan" className="hover:text-green-500">
                  Credit Card Loan
                </Link>
              </li>
              <li>
                <Link href="/gold-loan" className="hover:text-green-500">
                  Gold Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/low-cibil-score-loan"
                  className="hover:text-green-500"
                >
                  Low CIBIL Score Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitelinks Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SITELINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-green-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-green-500">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-green-500">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-green-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-500">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/personal-loan-settlement"
                  className="hover:text-green-500"
                >
                  Personal Loan Settlement
                </Link>
              </li>
              <li>
                <Link
                  href="/credit-card-loan-settlement"
                  className="hover:text-green-500"
                >
                  Credit Card Loan Settlement
                </Link>
              </li>
              <li>
                <Link
                  href="/anti-harassment-service"
                  className="hover:text-green-500"
                >
                  Anti-Harassment Service
                </Link>
              </li>
              <li>
                <Link
                  href="/credit-score-builder"
                  className="hover:text-green-500"
                >
                  Credit Score Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/home-loan-settlement"
                  className="hover:text-green-500"
                >
                  Home Loan Settlement
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicle-loan-settlement"
                  className="hover:text-green-500"
                >
                  Vehicle Loan Settlement
                </Link>
              </li>
              <li>
                <Link
                  href="/education-loan-settlement"
                  className="hover:text-green-500"
                >
                  Education Loan Settlement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Tollfree:</span>{" "}
                <Link href="tel:1800-309-1902" className="hover:text-green-500">
                  1800-309-1902
                </Link>
              </li>
              <li>
                <span className="text-gray-400">Email Id:</span>{" "}
                <Link
                  href="mailto:info@settleloan.in"
                  className="hover:text-green-500"
                >
                  info@settleloan.in
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4">WE ARE SOCIAL</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-green-500">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-green-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-green-500">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-4">
              DOWNLOAD OUR APP
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/app-store.png"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 mb-6">
            Disclaimer: Loan Settlement is at the discretion of the lenders and
            only they can issue settlement letters. We provide legal support and
            do not have any authority to issue such letters. Not all debts are
            eligible for loan settlement. You should consider loan settlement
            only if you are in financial distress and unable to pay your loan
            EMIs.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Settleloan.in is committed to following the highest standards of
            governance in managing client information and providing professional
            support to our clients. In this endeavorous, we work with several
            organizations to meet globally recognized norms. These include:{" "}
            <Link href="#" className="text-green-500 hover:underline">
              GSA audit
            </Link>{" "}
            -{" "}
            <Link href="#" className="text-green-500 hover:underline">
              TUV-SUD
            </Link>{" "}
            -{" "}
            <Link href="#" className="text-green-500 hover:underline">
              Credit Information
            </Link>{" "}
            -{" "}
            <Link href="#" className="text-green-500 hover:underline">
              Experian
            </Link>{" "}
            -{" "}
            <Link href="#" className="text-green-500 hover:underline">
              Escrow Management
            </Link>{" "}
            -{" "}
            <Link href="#" className="text-green-500 hover:underline">
              CRISIL
            </Link>
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © Savemoney Financial Services Pvt Ltd. All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
