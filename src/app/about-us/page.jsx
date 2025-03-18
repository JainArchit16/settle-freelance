"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Building, Heart, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80 z-10" />
        <Image
          src="/package"
          alt="Financial services background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              We're dedicated to helping you achieve financial freedom through
              expert debt settlement solutions.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Settle Mitra
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Settle Mitra is a dynamic fintech startup dedicated to providing
                effective Loan Settlement and Debt Relief solutions. Founded
                with the vision to assist individuals struggling with
                overwhelming financial burdens, Settle Mitra offers innovative
                strategies to help clients break free from the cycle of debt.
                Our expert consultants work closely with borrowers, negotiating
                with banks and financial institutions to secure favorable
                settlement terms — ensuring a clear path toward financial
                stability.
              </p>
              <p>
                At Settle Mitra, our mission is simple — to provide borrowers
                with the tools, knowledge, and support they need to break free
                from debt traps. We act as a trusted partner, ensuring every
                client receives fair treatment, personalized guidance, and a
                customized solution tailored to their unique situation.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Button className="group bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md flex items-center">
                Learn more about our approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/package"
                alt="Financial consultation"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-medium">
                  Our experts work with you to find the best solution
                </p>
              </div>
            </div>
            {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg">
              <div className="text-center">
                <div className="text-2xl">15+</div>
                <div className="text-xs">Years Exp.</div>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Cards Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <motion.div variants={fadeIn}>
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="pb-2">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <div>
                <p className="text-gray-700 text-base">
                  At Settle Mitra, our mission is simple — to provide borrowers
                  with the tools, knowledge, and support they need to break free
                  from debt traps. We act as a trusted partner, ensuring every
                  client receives fair treatment, personalized guidance, and a
                  customized solution tailored to their unique situation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="pb-2">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold">Values & Philosophy</h3>
              </div>
              <div>
                <p className="text-gray-700 text-base flex flex-col gap-4">
                  <div>
                    {" "}
                    ✅ <b>Empathy & Understanding:</b> We recognize that debt
                    challenges can be stressful, and we prioritize compassionate
                    solutions.
                  </div>
                  <div>
                    ✅ <b>Transparency:</b> We believe in complete honesty
                    throughout the entire settlement process.
                  </div>
                  <div>
                    ✅ <b>Customer First Approach:</b> Our team works
                    relentlessly to deliver the best possible outcome for our
                    clients.
                  </div>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="pb-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">
                  Why Choose Settle Mitra?
                </h3>
              </div>
              <div>
                <p className="text-gray-700 text-base">
                  Unlike conventional recovery agencies that prioritize lenders,
                  Settle Mitra stands with the borrowers. We are here to provide
                  you with the right guidance, ensuring your financial
                  well-being remains our top priority.<br></br> Whether you're
                  battling overdue EMIs, struggling with credit card debt, or
                  worried about defaulting on a personal loan, Settle Mitra is
                  your trusted partner in achieving financial freedom
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-customBlue">
            Ready to take control of your financial future?
          </h3>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you navigate through your debt
            settlement journey with personalized solutions.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <button className="bg-white text-sky-700 px-6 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors">
                Get In Touch
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
